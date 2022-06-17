import AdminLayout from "@/components/Admin/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import Dialog from "@/components/Admin/Dialog";

import Head from "next/head";
import { ROOT_URL } from "@/inc/Const";
import { API_KEY } from "@/inc/Const";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var qs = require("qs");
const axios = require("axios");

const DATA_URL = ROOT_URL + "jobPositions.php";

const Admin = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [newPost, setNewPost] = useState(false);

  const [jobPos, setPos] = useState(null);

  const getData = async () => {
    axios
      .get(DATA_URL)
      .then((res) => {
        let data = res.data;
        if (data.status === "available") {
          setPos(data.data);
        } else if (data.status === "empty") {
          setPos([]);
        } else {
          setError("Auth Error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function updateItem(id, name) {
    axios
      .post(
        DATA_URL,
        qs.stringify({
          api: API_KEY,
          id: id,
          name: name,
        })
      )
      .then((response) => {
        if (response.data.status == "success") {
          toast.success("Job position updated!");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout title="Job Positions" label="Job Positions">
      <Head>
        <title>Jobs Positions | Markaz Knowledge City</title>
      </Head>
      <div className="flex justify-between">
        <div></div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => setNewPost(true)}
        >
          New Position
        </button>
      </div>
      {jobPos != null ? (
        jobPos.length > 0 ? (
          <div>
            {jobPos.map((pos) => {
              return jobPos.length > 0 ? (
                <div key={pos.jp_id}>
                  <div className="bg-gray-100 rounded my-4 px-6 py-4 shadow-lg flex justify-between items-center">
                    <input
                      type="text"
                      id={pos.jp_id}
                      defaultValue={pos.jp_name}
                      className="border-none bg-gray-100 w-full mr-6  rounded-lg"
                      onBlur={(e) => {
                        if (pos.jp_name !== e.target.value) {
                          updateItem(pos.jp_id, e.target.value);
                          getData();
                        }
                      }}
                    />

                    <div className="flex">
                      <div
                        className="bg-blue-100 hover:bg-blue-300 p-2 rounded-full transition-all duration-500  mr-2"
                        onClick={() => {
                          document.getElementById(pos.jp_id).focus();
                        }}
                      >
                        <BiEditAlt className="text-blue-600 text-xl" />
                      </div>

                      <div
                        className="bg-red-100 hover:bg-red-300 p-2 rounded-full transition-all duration-500"
                        onClick={() => {
                          setShowDelete(true);
                          setDeleteId(pos.jp_id);
                        }}
                      >
                        <RiDeleteBin6Line className="text-red-600 text-xl " />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <span></span>
              );
            })}
          </div>
        ) : (
          <div>No Positions</div>
        )
      ) : (
        <div>Loading..</div>
      )}
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
      {
        <DeletePosition
          open={showDelete}
          onClose={() => {
            setShowDelete(false);
            setDeleteId(null);
            getData();
          }}
          id={deleteId}
        />
      }

      {
        <NewPosition
          open={newPost}
          onClose={() => {
            setNewPost(false);
            getData();
          }}
        />
      }
    </AdminLayout>
  );
};

export default Admin;

export const DeletePosition = (props) => {
  const [deleting, setDeleting] = useState(false);

  function deleteItem(id) {
    axios
      .post(
        DATA_URL,
        qs.stringify({
          api: API_KEY,
          id: id,
          delete: 1,
        })
      )
      .then((response) => {
        setDeleting(false);
        if (response.data.status == "success") {
          toast.success("Job position deleted!");
          props.onClose();
        }
      })
      .catch((error) => {
        toast.error(error);
        props.onClose();
      });
  }

  return (
    <Dialog open={props.open} onClose={() => props.onClose()}>
      <div className="py-6 px-4">
        Are you sure you want to delete this position? <br />
        <button
          className="bg-green-600 hover:bg-green-700  text-white px-2 py-1 rounded mr-2 mt-2"
          onClick={() => props.onClose()}
        >
          Cancel
        </button>
        <button
          className="bg-red-600 hover:bg-red-700  text-white px-2 py-1 rounded mr-2 mt-2"
          onClick={() => {
            setDeleting(true);
            deleteItem(props.id);
          }}
        >
          Yes, Delete
        </button>
      </div>
      {deleting ? (
        <div className="px-4 text-red-700 italic">Deleting Job Position...</div>
      ) : (
        <span></span>
      )}
    </Dialog>
  );
};

// ----------------------------------------------------------------
// NEW POSOITION

export const NewPosition = (props) => {
  function newItem(name) {
    axios
      .post(
        DATA_URL,
        qs.stringify({
          api: API_KEY,
          new: 1,
          name: name,
        })
      )
      .then((response) => {
        setAdding(false);
        if (response.data.status == "success") {
          toast.success("Job position added!");
          props.onClose();
        }
      })
      .catch((error) => {
        toast.error(error);
        props.onClose();
      });
  }

  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  return (
    <Dialog open={props.open} onClose={() => props.onClose()}>
      <div className="py-6 px-4">
        <span className="font-bold text-2xl text-blue-800 inline-block mb-3">
          Add Position
        </span>{" "}
        <br />
        <input
          type="text"
          placeholder="Position Title"
          className="w-full rounded-md py-3"
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <br />
        <button
          className="bg-blue-600 hover:bg-blue-700  text-white px-4 py-3 rounded mr-2 mt-2"
          onClick={() => {
            setAdding(true);
            newItem(name);
          }}
        >
          Add Position
        </button>
      </div>
      {adding ? (
        <div className="px-4 text-green-800 italic">Adding new position...</div>
      ) : (
        <span></span>
      )}
    </Dialog>
  );
};
