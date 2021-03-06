import AdminLayout from "@/components/Admin/Layout";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { API_KEY } from "@/inc/Const";
import { useRouter } from "next/router";
import Head from "next/head";

const NewsNews = () => {
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;

  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [thumb, setThumb] = useState(null);
  const [link, setLink] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function handleChange(value) {
    setBody(value);
  }
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  function submitNews() {
    if (title != null && body != null && thumb != null) {
      setError(null);
      setLoading(true);

      uploadThumb().then((res) => {
        if (res.data.status == "success") {
          addNewNews(res.data.file).then((resnew) => {
            if (resnew.data.status == "success") {
              setLoading(false);
              router.push("/admin/news");
            } else {
              setError("Something went wrong. Please try again later.");
            }
          });
        } else {
          setError(res.data.message);
        }
      });
    } else {
      if (title == null || body == null) {
        setError("Please fill all the fields");
      } else {
        setError("Please upload a thumbnail.");
      }
    }
  }

  async function uploadThumb() {
    const URL = "https://api.markazcity.in/uploadFile.php";
    // const URL = "http://localhost/mkc/api/uploadFile.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("file", thumb);
    return await axios.post(URL, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }

  async function addNewNews(thumbUrl) {
    const URL = "https://api.markazcity.in/news/newNews.php";
    // const URL = "http://localhost/mkc/api/news/newNews.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("title", title);
    formData.append("body", body);
    formData.append("thumb", thumbUrl);
    formData.append("link", link);
    console.log(formData);
    return await axios.post(URL, formData, {
      headers: {
        Accept: "application/json",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
  }

  return (
    <AdminLayout title="New News" label="News">
      <Head>
        <title>New News | Markaz Knowledge City</title>
      </Head>
      {error && (
        <div className="bg-red-200 text-red-700 px-3 py-2 mb-3 rounded">
          {error}
        </div>
      )}
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
          setLink(e.target.value.toLowerCase().trim().replace(/\s/g, "-"));
        }}
        className="w-full"
        placeholder="News Title"
      />
      <span className="text-blue-600 italic text-sm">
        https://markazcity.in/news/{link ?? ""}
      </span>{" "}
      <br /> <br />
      <ReactQuill value={body} onChange={handleChange} modules={modules} />
      <br />
      <h4 className="text-violet-700 mb-2">News Image</h4>
      <input
        type="file"
        className="w-full m2-4"
        placeholder="Thumbnail"
        onChange={(e) => setThumb(e.target.files[0])}
        accept="image/jpeg,image/png"
      />
      <span className="text-red-600 text-sm pt-1 inline-block">
        Image must be in <b>1000x600</b>px resolution.
      </span>
      <br />
      <br />
      <br />
      <div className="flex justify-end">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mt-3"
          onClick={() => submitNews()}
        >
          {loading ? (
            <span>
              <img
                src="/assets/img/loading.gif"
                className="mx-4"
                style={{ height: "30px" }}
                alt=""
              />
            </span>
          ) : (
            <span>Add News</span>
          )}
        </button>
      </div>
    </AdminLayout>
  );
};

export default NewsNews;
