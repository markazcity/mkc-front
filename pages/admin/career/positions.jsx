import AdminLayout from '@/components/Admin/Layout'
import { useEffect, useState } from 'react';
var qs = require('qs');

const Admin = () => {

const [error, setError] = useState(null);

    const DATA_URL = "https://api.markazcity.in/getJobPositions.php";
const [jobPos, setPos] = useState(null);
    const getData = async () => {
        fetch(DATA_URL)
        .then(response => response.json())
        .then(data =>{

          if(data.status==="success"){
            setPos(data.data);
          }
          else if(data.status==="empty"){
            setPos([]);
          }else {
            setError("Auth Error");
            
          }
        });
      }


useEffect(() => {
    getData();
},[])


    return (
        <AdminLayout title="Job Positions"  label="Job Positions">
          {
              jobPos!=null?jobPos.length>0?(
                <div>
                    {
                        jobPos.map((pos)=>{
                            return  jobPos.length>1?
                            (
                                <div
                                key={pos.jp_id}
                                className="bg-gray-100 rounded my-4 px-6 py-4 shadow-lg"
                                >
{pos.jp_name}


                                   
                                   


                                </div>
                            ):(<span></span>)
                        })
                    }
                </div>
            ):(
                  <div>No Positions</div>
              ):(
                  <div>Loading..</div>
              )
          }
            
        </AdminLayout>
    );
}
 
export default Admin;