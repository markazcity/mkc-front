import Logo from "@/components/Logo";
import MenuBar from "@/components/NavMenu/Menu";
import Footer from "@/components/Footer/Footer";
import HeadTag from "@/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ROOT_URL } from "@/inc/Const";
import renderHTML from "react-render-html";
import Dialog from "@/components/Admin/Dialog";
import PhotoModal from "@/components/Utils/PhotoModal";
import Footer2 from "@/components/Footer/Footer2";

const getData = async () => {
  const BLOG_URL = ROOT_URL + "blog.php?type=list";
  const CITYPULSE_URL = ROOT_URL + "CityPulse/getCityPulse.php";
  const GALLERY_URL = ROOT_URL + "gallery/getPhotos.php";

  let blogData = await fetch(BLOG_URL).then((response) => response.json());

  let cityPulseData = await fetch(CITYPULSE_URL).then((response) =>
    response.json()
  );

  let galleryData = await fetch(GALLERY_URL).then((response) =>
    response.json()
  );

  return { blogData, cityPulseData, galleryData };
};

export async function getStaticProps() {
  const content = await getData();
  return {
    props: {
      blogData: content.blogData,
      cityPulseData: content.cityPulseData,
      galleryData: content.galleryData,
    },
    revalidate: 300,
  };
}

const Blog = ({ blogData, cityPulseData, galleryData }) => {
  const router = useRouter();

  const [blogs, setBlogs] = useState(null);
  const [featured, setFeatured] = useState(null);
  const [cityPulse, setCityPulse] = useState(null);

  const [connError, setConnError] = useState(false);

  useEffect(() => {
    if (blogData != null) {
      if (blogData.status === "HasBlog") {
        let tempBlog = [];
        blogData.blogs.map((blg, index) => {
          if (index === 0) {
            setFeatured(blg);
          } else {
            tempBlog.push(blg);
          }
        });
        setBlogs(tempBlog);
      } else {
        setBlogs([]);
      }
    }
    if (cityPulseData.status === "success") {
      setCityPulse(cityPulseData.data);
    } else {
      setCityPulse([]);
    }
  }, []);
  console.log(galleryData);

  return (
    <div>
      <HeadTag title="Blog - Markaz Knowledge City" />

      <div className="py-5" style={{ backgroundColor: "#F8FAF8" }}>
        <Logo logo="logob" className="z-9" />
        <MenuBar icoColor=" text-black" />
        <h1
          className="text-5xl font-extrabold mb-5 text-center"
          style={{
            color: "#69696D",
          }}
          data-aos="zoom-in"
        >
          BLOG
        </h1>{" "}
        <br />
      </div>
      <section
        style={{
          minHeight: "50vh",
        }}
      >
        {blogs != null && blogs.length > 0 ? (
          <div>
            {featured != null ? (
              <section
                className="mb-10 lg:px-56 p-10"
                style={{ backgroundColor: "#F8FAF8" }}
              >
                <div className="flex lg:flex-row flex-col">
                  <div className="flex-1">
                    <h1 className="text-2xl font-extrabold text-gray-600">
                      {featured.title}
                    </h1>
                    <p className="hyphenate text-base">
                      {renderHTML(
                        `<div class="noto hyphenate">${featured.body.substring(
                          0,
                          300
                        )}...</div>`
                      )}
                    </p>
                    <div
                      className="bg-minigreen-800 hover:bg-minigreen-700 text-white  rounded inline-block mt-4 mb-5 px-4 py-2 cursor-pointer"
                      onClick={(e) =>
                        router.push(`/blog/${featured.blog_link}`)
                      }
                    >
                      Read More
                    </div>
                  </div>
                  <div
                    className="lg:flex-1 bg-gray-400 lg:ml-10 h-80 order-first lg:order-last mb-6"
                    style={{
                      background: `url('${
                        ROOT_URL + featured.thumb
                      }') no-repeat center center`,
                      backgroundSize: "cover",
                    }}
                  >
                    {/* <Image
                      src={ROOT_URL + featured.thumb}
                      layout="fill"
                      // width="300px"
                      // height="200px"
                      responsive
                    /> */}
                  </div>
                </div>
              </section>
            ) : (
              <span></span>
            )}

            <section className="grid md:grid-cols-2 xl:grid-cols-3 my-5 lg:my-10 md:mx-10 lg:mx-32 xl:mx-56 lg:gap-x-10 gap-y-10 ">
              {blogs.map((post) => (
                <a
                  key={post}
                  className="blogItem mx-10 lg:mx-0 bg-gray-100 rounded-lg block cursor-pointer"
                  data-aos="fade-up-right"
                  data-aos-delay={blogs.indexOf(post) * 50}
                  href={`/blog/${post.blog_link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/blog/${post.blog_link}`);
                  }}
                >
                  <div
                    className="h-52 mb-4 rounded-t-lg"
                    style={{
                      background: `url('${
                        ROOT_URL + post.thumb
                      }') no-repeat center center`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="mx-4 text-xl leading-5 ">{post.title}</div>
                  <div className="text-minigreen-600  rounded inline-block mt-2 mb-5 mx-4">
                    Read More
                  </div>
                </a>
              ))}
            </section>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 my-5 lg:my-10 xl:mx-64 gap-x-4 gap-y-10">
            {[1, 2, 3, 4, 5, 6].map((e) => {
              return (
                <div
                  key={e}
                  className="mx-10 lg:mx-0 bg-gray-300 rounded-lg"
                  data-aos="fade-up-right"
                >
                  <div className="h-52 mb-4 "></div>
                  <div className="mx-4 text-transparent leading-5 mb-5 ">
                    Markaz Knowledge City
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
      <section>
        {/*
-----------------------------------------------------------------------
------------------------  CITYPULSE SECTION  --------------------------
-----------------------------------------------------------------------

*/}
        <h1
          className="text-5xl font-extrabold mb-5 text-center"
          style={{
            color: "#69696D",
          }}
          data-aos="zoom-in"
        >
          CITYPULSE
        </h1>
        {cityPulse != null && cityPulse.length > 0 ? (
          <div>
            <section className="grid md:grid-cols-2 xl:grid-cols-3 my-5 lg:my-10 md:mx-10 lg:mx-32 xl:mx-56 lg:gap-x-10 gap-y-10 ">
              {cityPulse.map((post, index) => (
                <a
                  key={index}
                  className="blogItem mx-10 lg:mx-0 bg-gray-100 rounded-lg block cursor-pointer"
                  data-aos="fade-up-right"
                  data-aos-delay={index * 50}
                  onClick={() =>
                    window.open(ROOT_URL + "CityPulse/" + post.cp_fileLink)
                  }
                  download
                >
                  <div
                    className="h-52 mb-4 rounded-t-lg"
                    style={{
                      background: `url('${
                        ROOT_URL + post.cp_thumb
                      }') no-repeat center center`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="mx-4 text-xl leading-5 ">{post.cp_name}</div>
                  <div className="text-minigreen-600  rounded inline-block mt-2 mb-5 mx-4">
                    Download
                  </div>
                </a>
              ))}
            </section>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 my-5 lg:my-10 xl:mx-64 gap-x-4 gap-y-10">
            {[1, 2, 3, 4, 5, 6].map((e) => {
              return (
                <div
                  key={e}
                  className="mx-10 lg:mx-0 bg-gray-300 rounded-lg"
                  data-aos="fade-up-right"
                >
                  <div className="h-52 mb-4 "></div>
                  <div className="mx-4 text-transparent leading-5 mb-5 ">
                    Markaz Knowledge City
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
      {connError ? (
        <Dialog onClose={() => setConnError(false)}>
          <center>Please check your connection!</center>
        </Dialog>
      ) : (
        <span></span>
      )}
      <Gallery dataset={galleryData} />
      <Footer2 />
    </div>
  );
};

export default Blog;

export const Gallery = ({ dataset }) => {
  const [photoLink, setPhotoLink] = useState(null);

  const gallery = dataset.data;
  return (
    <div>
      <h1
        className="text-5xl font-extrabold mb-5 text-center"
        style={{
          color: "#69696D",
        }}
        data-aos="zoom-in"
      >
        GALLERY
      </h1>
      {dataset != null && (gallery != null) & (gallery.length > 0) ? (
        <div>
          <section className="grid md:grid-cols-2 xl:grid-cols-3 my-5 lg:my-10 md:mx-10 lg:mx-32 xl:mx-56 lg:gap-x-10 gap-y-10 ">
            {gallery.map((post, index) => (
              <a
                key={index}
                className="blogItem mx-10 lg:mx-0 bg-gray-100 rounded-lg block cursor-pointer"
                data-aos="fade-up-right"
                data-aos-delay={index * 50}
                onClick={() =>
                  setPhotoLink(ROOT_URL + "gallery/" + post.g_fileLink)
                }
                download
              >
                <div
                  className="h-52 mb-4 rounded-lg"
                  style={{
                    background: `url('${
                      ROOT_URL + "gallery/" + post.g_fileLink
                    }') no-repeat center center`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </a>
            ))}
          </section>
          {photoLink != null ? (
            <PhotoModal link={photoLink} onClose={() => setPhotoLink(null)} />
          ) : (
            <span></span>
          )}
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 my-5 lg:my-10 xl:mx-64 gap-x-4 gap-y-10">
          {[1, 2, 3, 4, 5, 6].map((e) => {
            return (
              <div
                key={e}
                className="mx-10 lg:mx-0 bg-gray-300 rounded-lg"
                data-aos="fade-up-right"
              >
                <div className="h-52 mb-4 "></div>
                <div className="mx-4 text-transparent leading-5 mb-5 ">
                  Markaz Knowledge City
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
