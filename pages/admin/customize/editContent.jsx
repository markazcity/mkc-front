import AdminLayout from "@/components/Admin/Layout";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { API_KEY } from "@/inc/Const";
import { useRouter } from "next/router";
import { ROOT_URL } from "@/inc/Const";
import Head from "next/head";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditContent = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [thumb, setThumb] = useState(null);
  const [thumbUrl, setThumbUrl] = useState(null);
  const [link, setLink] = useState(null);
  const [category, setCategory] = useState(null);
  const [position, setPosition] = useState(null);
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoUploadPercent, setVideoUploadPercent] = useState(0);

  const [homeVideoLoading, setHomeVideoLoading] = useState(false);
  const [videoSelected, setVideoSelected] = useState(false);

  const [contentId, setContentId] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    setContentId(query.id);
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (contentId != null) {
      getContentData();
    }
  }, [contentId]);

  async function getContentData() {
    await fetch(ROOT_URL + `webContents/content.php?id=${contentId}`)
      .then((res) => res.json())
      .then((data) => {
        let dat = data.data[0];
        setTitle(dat.wc_title);
        setBody(dat.wc_body);
        setThumbUrl(dat.wc_image);
        setLink(dat.wc_link);
        setCategory(dat.wc_category);
        setVideoUrl(dat.wc_video);
        if (dat.wc_category === "about_leadership") {
          setPosition(dat.wc_author_position);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  function submitContent() {
    if (title != null && body != null) {
      setError(null);
      setLoading(true);

      if (thumb != null) {
        uploadThumb().then((res) => {
          if (res.data.status == "success") {
            updateContent(res.data.file).then((resnew) => {
              setLoading(false);
              if (resnew.data.status == "success") {
                toast.success("Content Updated!");
              } else {
                setError("Something went wrong. Please try again later.");
              }
            });
          } else {
            setError(res.data.message);
          }
        });
      } else {
        updateContent(thumbUrl).then((resnew) => {
          setLoading(false);
          if (resnew.data.status == "success") {
            toast.success("Content Updated!");
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
    const URL = "https://api.markazcity.in/webContents/upload.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("file", thumb);
    return await axios.post(URL, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }

  async function uploadVideo(file) {
    const URL = "https://api.markazcity.in/webContents/uploadVideo.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("file", file);
    axios
      .post(URL, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
        onUploadProgress: function (progressEvent) {
          let progress = (progressEvent.loaded / progressEvent.total) * 100;
          setVideoUploadPercent(progress);
        },
      })
      .then((res) => {
        setVideoUrl(res.data.file);
        setHomeVideoLoading(false);
        toast.success("Video Uploaded successfully!");
      });
  }

  async function updateContent(thumblink) {
    const URL = "https://api.markazcity.in/webContents/updateContent.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("id", contentId);
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", thumblink);
    formData.append("link", link);
    formData.append("category", category);
    formData.append("video", videoUrl);

    if (category == "about_leadership") {
      formData.append("position", position);
    }

    return await axios.post(URL, formData, {
      headers: {
        Accept: "application/json",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
  }

  function getImageSize(cat) {
    switch (cat) {
      case "residence":
        return "1920x1080";
      case "zones":
        return "1000x500";
      case "about_leadership":
        return "800x670";
      case "about_past":
        return "1000x530";
      default:
        return "1000x800";
    }
  }

  return (
    <AdminLayout title="Edit Content" label="Dashboard">
      <Head>
        <title>Edit Content | Markaz Knowledge City</title>
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {error && (
        <div className="bg-red-200 text-red-700 px-3 py-2 mb-3 rounded">
          {error}
        </div>
      )}
      <br />
      <h4 className="text-violet-700 mb-2">Title</h4>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full"
        defaultValue={title}
        placeholder="Title"
      />
      <div className="my-4">
        <h4 className="text-violet-700 mb-2">Description</h4>
        <textarea
          className="w-full"
          rows="10"
          onChange={(e) => setBody(e.target.value)}
          placeholder="Description"
          defaultValue={body}
        ></textarea>{" "}
      </div>

      <div className="my-4">
        <h4 className="text-violet-700 mb-2">Link</h4>
        <input
          type="text"
          onChange={(e) => setLink(e.target.value)}
          className="w-full"
          defaultValue={link}
          placeholder="Direct to Link"
        />
      </div>

      {category === "about_leadership" ? (
        <div className="my-4">
          <h4 className="text-violet-700 mb-2">Position</h4>
          <input
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            className="w-full"
            defaultValue={position}
            placeholder="Position"
          />
        </div>
      ) : (
        <span></span>
      )}

      <section className="mb-5">
        <h4 className="text-violet-700 mb-2">Video</h4>
        <input
          type="file"
          className="w-full m2-4"
          placeholder="Photo"
          onChange={(e) => {
            setHomeVideoLoading(true);
            let output = document.getElementById("thumbvideo");
            output.src = URL.createObjectURL(e.target.files[0]);
            uploadVideo(e.target.files[0]);
          }}
          accept="video/mp4"
        />{" "}
        <br />
        <video
          src={ROOT_URL + "webContents/uploads/" + videoUrl}
          className="rounded-lg mt-4"
          id="thumbvideo"
          style={{ width: "300px" }}
          controls
        ></video>
      </section>

      {/* <h4 className="text-violet-700 mb-2">Category</h4>
            <input type="text" onChange={(e) => setCategory(e.target.value)}
            className="w-full"
            defaultValue={category}
            placeholder="Category"
            />
             <br />
              <br /> */}

      <h4 className="text-violet-700 mb-2">Content Image</h4>
      {thumbUrl != null ? (
        <div className="my-2">
          <img
            src={ROOT_URL + "webContents/uploads/" + thumbUrl}
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
        Image must be in <b>{getImageSize(category)}</b> px resolution.
      </span>
      <br />
      <div className="flex justify-end">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mt-3"
          onClick={() => submitContent()}
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
            <span>Update Content</span>
          )}
        </button>
      </div>
      <br />
      <br />

      {homeVideoLoading ? (
        <div className="fixed top-0 left-0 right-0 bg-green-800 p-4 text-white flex items-center">
          Uploading Video
          <div className="w-4"></div>
          <div className="h-full">
            <div
              className="absolute bg-white bg-opacity-25 h-2 rounded-lg"
              style={{ width: `200px` }}
            ></div>
            <div
              className="absolute bg-white h-2 rounded-lg"
              style={{ width: `${videoUploadPercent * 2}px` }}
            ></div>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </AdminLayout>
  );
};

export default EditContent;
