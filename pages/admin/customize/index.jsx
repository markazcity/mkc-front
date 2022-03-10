import AdminLayout from '@/components/Admin/Layout'
import { useEffect, useState } from 'react';
var qs = require('qs');
import {API_KEY} from '@/inc/Const'
import axios from 'axios';
import Head from 'next/head'
const Customize = () => {

const [careerLoading, setCareerLoading] = useState(false);
const [homeVideoLoading, setHomeVideoLoading] = useState(false);
const [CCVideoLoading, setCCVideoLoading] = useState(false);




async function submitCareerBanner(file){
    const URL = "https://api.markazcity.in/siteAssets/uploadCareerBanner.php";
  const formData = new FormData();
  formData.append('api',API_KEY)
  formData.append('file',file)
   await axios.post(URL, formData,{
      headers: {
          'content-type': 'multipart/form-data',
      }
  }).then(res=>{
    setCareerLoading(false)
      if(res.data.status=="success"){
        alert("Uploaded!");
      }else{
        alert("Something went wrong. Please try again later.1");
      }
  }).catch(err=>{
        setCareerLoading(false)
        alert(err);
  });
}
// HOME VIDEO UPLOADING

async function uploadHomeVideo(file){
    const URL = "https://api.markazcity.in/siteAssets/uploadHomeVideo.php";
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
//CC VIDEO UPLOAD
async function uploadCCVideo(file){
  const URL = "https://api.markazcity.in/siteAssets/uploadCCvideo.php";
const formData = new FormData();
formData.append('api',API_KEY)
formData.append('file',file)
 await axios.post(URL, formData,{
    headers: {
        'content-type': 'multipart/form-data',
    }
}).then(res=>{
  setCCVideoLoading(false)
    if(res.data.status=="success"){
      alert("CC Video Uploaded!");
    }else{
      alert("Something went wrong. Please try again later.1");
    }
}).catch(err=>{
  setCCVideoLoading(false)
      alert(err);
});
}





    return (
        <AdminLayout title="Customize"  label="Customize">
<Head>
    <title>Customize Site - Markaz Knowledge City</title>
    </Head>
    {/*
     ----------------------------------------------------------------
    CHANGE CAREER BANNER
    ---------------------------------------------------------------- 
    */}

   <section className="customize-section">
   <h2 className="text-2xl font-bold mb-2 text-violet-700">Career Page Banner</h2>
        <input type="file"
        className="w-full m2-4"
        placeholder="Photo"
        onChange={ (e)=>{
            setCareerLoading(true);
            var output = document.getElementById('thumbPreview');
            output.src = URL.createObjectURL(e.target.files[0]);
            submitCareerBanner(e.target.files[0]);
        }} 
        accept="image/jpeg,image/png"
        />   
        <span className="text-red-600 text-sm pt-1 inline-block">Image must be <b>1000x300</b>px</span>   <br />
        {careerLoading?(
            <div className="bg-blue-700 inline-flex text-white px-3 rounded mt-2 items-center">
                <img src="/assets/img/loading.gif" className="mx-4" style={{height:"30px"}} alt="" /> Uploading...
                </div>
        ):(
            <span></span>
        )}
            <img src="https://api.markazcity.in/uploads/career_banner.jpg" className="rounded-lg mt-2"
                        id="thumbPreview"
                        style={{height:"150px"}} a alt="" />
   </section>
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
            <video src="https://api.markazcity.in/siteAssets/home.mp4" className="rounded-lg mt-4"
            id="homeVideo"
            style={{width:"300px"}}
            controls
            ></video>
            
          
   </section>

 {/*
     ----------------------------------------------------------------
    CC VIDEO CHANGE
    ---------------------------------------------------------------- 
    */}

<section className="mt-6 customize-section">
   <h2 className="text-2xl font-bold my-2 text-violet-700">Cultural Centre Video</h2>
        <input type="file"
        className="w-full m2-4"
        placeholder="Photo"
        onChange={ (e)=>{
          setCCVideoLoading(true);
            let output = document.getElementById('ccVideo');
            output.src = URL.createObjectURL(e.target.files[0]);
            uploadCCVideo(e.target.files[0]);
        }} 
        accept="video/mp4"
        />   <br />
        {CCVideoLoading?(
            <div className="bg-blue-700 inline-flex text-white px-3 rounded mt-2 items-center">
                <img src="/assets/img/loading.gif" className="mx-4" style={{height:"30px"}} alt="" /> Uploading...
                </div>
        ):(
            <span></span>
        )}
          <video src="https://api.markazcity.in/siteAssets/cc.mp4" 
          id="ccVideo"
          className="rounded-lg mt-4"
            style={{width:"300px"}}
            controls
            ></video>
   </section>

        </AdminLayout>
    );
}
 
export default Customize;