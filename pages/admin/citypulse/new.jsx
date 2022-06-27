import AdminLayout from "@/components/Admin/Layout";
import { useState } from "react";
import axios from "axios";
import { API_KEY } from "@/inc/Const";
import { useRouter } from "next/router";
import Head from "next/head";

const NewCityPulse = () => {
  const [title, setTitle] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [thumb, setThumb] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function submitCityPulse() {
    if (title != null && pdf != null && thumb != null) {
      setError(null);
      setLoading(true);

      uploadThumb().then((res) => {
        if (res.data.status == "success") {
          addNewCityPulse(res.data.file).then((resnew) => {
            setLoading(false);
            if (resnew.data.status == "success") {
              router.push("/admin/citypulse");
            } else {
              setError("Something went wrong. Please try again later.");
            }
          });
        } else {
          setError(res.data.message);
        }
      });
    } else {
      if (title == null) {
        setError("Please fill all the fields");
      } else {
        setError("Please upload the file.");
      }
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

  async function addNewCityPulse(thumbUrl) {
    const URL = "https://api.markazcity.in/CityPulse/upload.php";
    const formData = new FormData();
    formData.append("api", API_KEY);
    formData.append("file", pdf);
    formData.append("title", title);
    formData.append("thumb", thumbUrl);
    return await axios.post(URL, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }

  return (
    <AdminLayout title="New CityPulse" label="CityPulse">
      <Head>
        <title>New CityPulse | Markaz Knowledge City</title>
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
        }}
        className="w-full"
        placeholder="Title"
      />
      <br />

      <br />
      <h4 className="text-violet-700 mb-2">CityPulse Upload</h4>
      <input
        type="file"
        className="w-full m2-4"
        placeholder="CityPulse"
        onChange={(e) => setPdf(e.target.files[0])}
        accept="application/pdf"
      />
      <br />
      <br />
      <h4 className="text-violet-700 mb-2">Thumbnail</h4>
      <input
        type="file"
        className="w-full m2-4"
        placeholder="Thumbnail"
        onChange={(e) => setThumb(e.target.files[0])}
        accept="image/jpeg,image/png"
      />
      <span className="text-red-600 text-sm pt-1 inline-block">
        Thumbnail must be in <b>1000x600</b>px resolution.
      </span>
      <br />
      <br />
      <div className="flex justify-end">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mt-3"
          onClick={() => submitCityPulse()}
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
            <span>Upload CityPulse</span>
          )}
        </button>
      </div>
    </AdminLayout>
  );
};

export default NewCityPulse;
