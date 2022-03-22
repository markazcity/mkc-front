import AdminLayout from '@/components/Admin/Layout'
import { useEffect, useState } from 'react';
var qs = require('qs');

import axios from 'axios';
import Dialog from '@/components/Admin/Dialog'


import Head from 'next/head'
import {ROOT_URL} from '@/inc/Const'
import {API_KEY} from '@/inc/Const'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomizeHome = () => {

const [homeVideoLoading, setHomeVideoLoading] = useState(false);



// HOME VIDEO UPLOADING

async function uploadHomeVideo(file){
    const URL = ROOT_URL+"siteAssets/uploadHomeVideo.php";
  const formData = new FormData();
  formData.append('api',API_KEY)
  formData.append('file',file)
   await axios.post(URL, formData,{
      headers: {
          'content-type': 'multipart/form-data',
      }
  }).then(res=>{
    setHomeVideoLoading(false)
      if(res.data.status=="success"){
        alert("Home Video Uploaded!");
      }else{
        alert("Something went wrong. Please try again later.1");
      }
  }).catch(err=>{
    setHomeVideoLoading(false)
        alert(err);
  });
}






    return (
        <AdminLayout title="Customize Home"  label="CustomizeHome">
<Head>
    <title>Customize Home - Markaz Knowledge City</title>
    </Head>
 
   {/*
     ----------------------------------------------------------------
    HOME VIDEO CHANGE
    ---------------------------------------------------------------- 
    */}

<section className="mt-6 customize-section">
   <h2 className="text-2xl font-bold my-2 text-violet-700">Homepage Background Video</h2>
        <input type="file"
        className="w-full m2-4"
        placeholder="Photo"
        onChange={ (e)=>{
          setHomeVideoLoading(true);
             let output = document.getElementById('homeVideo');
             output.src = URL.createObjectURL(e.target.files[0]);
            uploadHomeVideo(e.target.files[0]);
        }} 
        accept="video/mp4"
        />   <br />
        {homeVideoLoading?(
            <div className="bg-blue-700 inline-flex text-white px-3 rounded mt-2 items-center">
                <img src="/assets/img/loading.gif" className="mx-4" style={{height:"30px"}} alt="" /> Uploading...
                </div>
        ):(
            <span></span>
        )}
            <video src={ROOT_URL+"siteAssets/home.mp4"} className="rounded-lg mt-4"
            id="homeVideo"
            style={{width:"300px"}}
            controls
            ></video>
            
          
   </section>
{/* ZONES */}
<section className="mt-6 bg-white shadow-lg rounded-lg p-4">
<h2 className="text-2xl font-bold my-2 text-violet-700">Zones</h2>
  <Zones/>
  </section> 


        </AdminLayout>
    );
}
 
export default CustomizeHome;


export const Zones = () => {
  const DATA_URL = "https://api.markazcity.in/webContents/content.php";
const [zoneData, setZoneData] = useState([]);



function getData(){
  axios.get(DATA_URL).then(res=>{
    let data = res.data;
    if(data.status==="success"){
      setZoneData(data.data.filter(item=>item.wc_category==="zones"));
    }else{
      alert("Something went wrong. Please try again later.2");
    }
  })
}


useEffect(() => {
  getData();
},[])

  return (
    <div>
{
  zoneData!=null?(
    <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-32 3xl:mx-64 gap-y-1">
      {zoneData.map((item,index)=>{
        return (<div  key={item.wc_id}
        className="shadow-lg hover:shadow-2xl rounded-xl m-2 cursor-pointer"
        
        >
        
          <div className="h-40 w-full rounded-t-xl "
          style={{
            backgroundImage:`url('${ROOT_URL}webContents/uploads/${item.wc_image}')`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat"
          }}
          ></div>
          <div className="text-center m-4">
          <span className="text-blue-600 font-bold text-xl text-center">{item.wc_title}</span> <br />
          <span className="text-gray-600">{item.wc_body.substring(0,150)}...</span> <br />
          <button className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded my-2 text-xs"
          onClick={()=>{
            window.open(`/admin/customize/editContent?id=${item.wc_id}`, '_blank').focus();
        }}
          
          >Edit Zone</button>
          </div>
        </div>)
      })}
    </div>
  ):(
    <div>Loading</div>
  )
}



    </div>
  );
}
 

 
