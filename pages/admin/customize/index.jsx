import AdminLayout from '@/components/Admin/Layout'
import { useEffect, useState } from 'react';
var qs = require('qs');
import {API_KEY} from '@/inc/Const'
import axios from 'axios';
import Head from 'next/head'
const Customize = () => {

const [error, setError] = useState(null);
const [careerBanner, setCareerBanner] = useState(null);
const [loading, setLoading] = useState(false);


function submitCareerBanner(file){
    uploadCareerBanner(file).then(res=>{
        setLoading(false)
          if(res.data.status=="success"){
            alert("Uploaded!");
          }else{
            alert("Something went wrong. Please try again later.1");
          }
      }).catch(err=>{
            setLoading(false)
            alert(err);
      });
}


async function uploadCareerBanner(file){
    const URL = "https://api.markazcity.in/uploads/uploadCareerBanner.php";
  const formData = new FormData();
  formData.append('api',API_KEY)
  formData.append('file',file)
  return await axios.post(URL, formData,{
      headers: {
          'content-type': 'multipart/form-data',
         
      }
  });
}



    return (
        <AdminLayout title="Customize"  label="Customize">
<Head>
    <title>Customize Site - Markaz Knowledge City</title>
    </Head>
    <h2 className="text-2xl font-bold mb-2">Career Page Banner</h2>
        <input type="file"
        className="w-full m2-4"
        placeholder="Photo"
        onChange={ (e)=>{
            setLoading(true);
            var output = document.getElementById('thumbPreview');
            output.src = URL.createObjectURL(e.target.files[0]);
            submitCareerBanner(e.target.files[0]);
        }} 
        accept="image/jpeg,image/png"
        />   
        <span className="text-red-600 text-sm pt-1 inline-block">Image must be <b>1000x300</b>px</span> 
        {loading?(
            <div className="bg-blue-700 inline-flex text-white px-3 rounded mt-2 items-center">
                <img src="/assets/img/loading.gif" className="mx-4" style={{height:"30px"}} alt="" /> Uploading
                </div>
        ):(
            <span></span>
        )}
            <img src="https://api.markazcity.in/uploads/career_banner.jpg" className="rounded-lg mt-2"
                        id="thumbPreview"
                        style={{height:"150px"}} a alt="" />
        </AdminLayout>
    );
}
 
export default Customize;