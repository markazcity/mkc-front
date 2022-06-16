import AdminLayout from "@/components/Admin/Layout";
import { useEffect, useState } from "react";
import { ROOT_URL } from "@/inc/Const";
import Head from "next/head";

var qs = require("qs");

const Admin = () => {
  const [error, setError] = useState(null);

  const DATA_URL = ROOT_URL + "jobapplications.php";
  const [jobApplics, setApplics] = useState(null);
  const getData = async () => {
    fetch(DATA_URL, {
      method: "POST",
      body: qs.stringify({
        api: "c24106bb093954188b2883e807d3bd8040cb96a9",
      }),
      headers: {
        Accept: "application/json",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setApplics(data.data);
          console.log(data);
        } else if (data.status === "noapplicants") {
          setApplics([]);
        } else {
          setError("Auth Error");
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout title="Career" label="Career">
      <Head>
        <title>Job Applications</title>
      </Head>
      {jobApplics != null ? (
        jobApplics.length > 0 ? (
          <div>
            {jobApplics.map((job) => {
              console.log(job);
              return jobApplics.length > 1 ? (
                <div
                  key={job.cr_id}
                  className="bg-gray-100 rounded my-4 px-6 py-4 shadow-lg"
                >
                  <span className="bg-butter-700  px-2 py-1 rounded inline-block my-2">
                    {job.cr_addedOn.split(/(\s+)/)[0]}
                  </span>
                  <br />
                  <div>
                    <span className="text-gray-500">Full Name: </span>{" "}
                    <span>{job.cr_name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email: </span>{" "}
                    <span>{job.cr_email}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone: </span>{" "}
                    <span>{job.cr_phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Position: </span>{" "}
                    <span>{job.cr_position}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Expected Salary: </span>{" "}
                    <span>{job.cr_salary}</span>
                  </div>

                  <div>
                    <span className="text-gray-500">Experience: </span>{" "}
                    <p>{job.cr_experience}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Qualification: </span>{" "}
                    <p>{job.cr_qualification}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Cover Letter: </span>{" "}
                    <p>{job.cr_cover_letter}</p>
                  </div>
                  <button
                    className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-3 rounded mt-2"
                    onClick={() => {
                      window
                        .open(ROOT_URL + `resume/${job.cr_cv_link}`, "_blank")
                        .focus();
                    }}
                  >
                    Download Resume
                  </button>
                </div>
              ) : (
                <span></span>
              );
            })}
          </div>
        ) : (
          <div>No Applicants</div>
        )
      ) : (
        <div>Loading..</div>
      )}
    </AdminLayout>
  );
};

export default Admin;
