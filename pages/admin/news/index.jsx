import AdminLayout from "@/components/Admin/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import renderHTML from "react-render-html";
import Head from "next/head";

const AdminNews = () => {
  const router = useRouter();

  const [error, setError] = useState(null);
  const DATA_URL = "https://api.markazcity.in/news/news.php?type=list";
  // const DATA_URL = "http://localhost/mkc/api/news/news.php?type=list";
  const [newses, setNewses] = useState(null);
  console.log(newses);

  const getData = async () => {
    fetch(DATA_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "HasNews") {
          setNewses(data.newses);
        } else if (data.status === "EmptyNews") {
          setNewses([]);
        } else {
          setError("Auth Error");
        }
        console.log(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AdminLayout title="News" label="News">
        <Head>
          <title>News - Markaz Knowledge City</title>
          <meta name="description" content="News of Markaz Knowledge City" />
        </Head>
        <div className="flex justify-between">
          <div></div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => router.push("/admin/news/new")}
          >
            New News
          </button>
        </div>
        <section>
          {newses != null ? (
            newses.length > 0 ? (
              <div>
                {newses.map((news) => {
                  return news?.title.length > 1 ? (
                    <section className="flex bg-gray-100 rounded my-4 px-4 py-2 shadow hover:shadow-md">
                      <div
                        className="w-52 h-36  mr-4 rounded"
                        style={{
                          background:
                            news?.thumb != null && news?.thumb.length > 4
                              ? // ? `url(http://localhost/mkc/api/${news?.thumb})`
                                // :
                                `url(https://api.markazcity.in/${news?.thumb})`
                              : `url(https://via.placeholder.com/350x150)`,

                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      <div key={news?.id} className="">
                        <span className="text-violet-700 text-xl font-bold  py-1 rounded inline-block my-1">
                          {news?.title}
                        </span>

                        <hr />
                        <span className="text-gray-800 font-bold">
                          {news?.createdOn.split(" ")[0]}
                        </span>

                        <p className="pt-3">
                          {/* <div dangerouslySetInnerHTML={{__html: news?.body.substring(0,100)+"..."}}></div> */}
                          <button
                            onClick={() => {
                              window
                                .open(`/blog/${news?.news_link}`, "_blank")
                                .focus();
                            }}
                            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-1 rounded my-2"
                          >
                            Read News
                          </button>
                          <button
                            onClick={() => {
                              window
                                .open(
                                  `/admin/news/edit?id=${news?.id}`,
                                  "_blank"
                                )
                                .focus();
                            }}
                            className="bg-butter-600 hover:bg-butter-700 text-black px-4 py-1 rounded my-2 ml-3"
                          >
                            Edit
                          </button>
                        </p>
                      </div>
                    </section>
                  ) : (
                    <span></span>
                  );
                })}
              </div>
            ) : (
              <div>No newses</div>
            )
          ) : (
            <div>Loading..</div>
          )}
        </section>
      </AdminLayout>
    </>
  );
};

export default AdminNews;
