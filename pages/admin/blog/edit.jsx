import AdminLayout from "@/components/Admin/Layout";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { API_KEY } from "@/inc/Const";
import { useRouter } from "next/router";
import { ROOT_URL } from "@/inc/Const";
import Head from "next/head";

const NewBlog = () => {
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;

  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [thumb, setThumb] = useState(null);
  const [thumbUrl, setThumbUrl] = useState(null);
  const [link, setLink] = useState(null);

  const [blogId, setsetBlogId] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    setsetBlogId(query.id);
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (blogId != null) {
      getBlogData();
    }
  }, [blogId]);

  function getBlogData() {
    fetch(ROOT_URL + "blog.php?type=single&id=" + blogId)
      .then((res) => res.json())
      .then((data) => {
        let dat = data.blogs[0];
        setTitle(dat.title);
        setBody(dat.body);
        setThumbUrl(dat.thumb);
        setLink(dat.blog_link);
      });
  }

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

  function submitBlog() {
    if (title != null && body != null) {
      setError(null);
      setLoading(true);

      if (thumb != null) {
        uploadThumb().then((res) => {
          if (res.data.status == "success") {
            updateBlog(res.data.file).then((resnew) => {
              setLoading(false);
              if (resnew.data.status == "success") {
                alert("Blog Updated!");
              } else {
                setError("Something went wrong. Please try again later.");
              }
            });
          } else {
            setError(res.data.message);
          }
        });
      } else {
        updateBlog(thumbUrl).then((resnew) => {
          setLoading(false);
          if (resnew.data.status == "success") {
            alert("Blog Updated!");
          } else {
            console.log(resnew);
            setError("Something went wrong. Please try again later");
          }
        });
      }
    } else {
      setError("Please fill all the fields");
    }
  }

  async function uploadThumb() {
    const URL = "https://api.markazcity.in/uploadFile.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("file", thumb);
    return await axios.post(URL, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }

  async function updateBlog(thumblink) {
    const URL = "https://api.markazcity.in/updateBlog.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("id", blogId);
    formData.append("title", title);
    formData.append("body", body);
    formData.append("thumb", thumblink);
    formData.append("link", link);
    return await axios.post(URL, formData, {
      headers: {
        Accept: "application/json",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
  }

  return (
    <AdminLayout title="Edit Blog" label="Blog">
      <Head>
        <title>Edit Blog | Markaz Knowledge City</title>
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
        defaultValue={title}
        placeholder="Blog Title"
      />
      <span
        className="text-blue-600 italic text-sm cursor-pointer"
        onClick={() => {
          window.open(`/blog/${link}`, "_blank").focus();
        }}
      >
        https://markazcity.in/blog/{link ?? ""}
      </span>{" "}
      <br /> <br />
      <ReactQuill value={body} onChange={handleChange} modules={modules} />
      <br />
      <h4 className="text-violet-700 mb-2">Blog Thumbnail</h4>
      {thumbUrl != null ? (
        <div className="my-2">
          <img
            src={ROOT_URL + thumbUrl}
            className="rounded-lg"
            id="thumbPreview"
            style={{ height: "200px" }}
            alt=""
          />
        </div>
      ) : (
        <span></span>
      )}
      <input
        type="file"
        className="w-full m2-4"
        accept="image/*"
        placeholder="Thumbnail"
        onChange={(e) => {
          var output = document.getElementById("thumbPreview");
          output.src = URL.createObjectURL(e.target.files[0]);
          setThumb(e.target.files[0]);
        }}
      />
      <span className="text-red-600 text-sm pt-1 inline-block">
        Image ust be in <b>1000x600</b>px resolution.
      </span>
      <br />
      <div className="flex justify-end">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mt-3"
          onClick={() => submitBlog()}
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
            <span>Update Blog</span>
          )}
        </button>
      </div>
      <br />
      <br />
    </AdminLayout>
  );
};

export default NewBlog;
