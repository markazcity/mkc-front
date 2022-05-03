import AdminLayout from '@/components/Admin/Layout'
import { useState } from 'react';
import axios from 'axios';
import {API_KEY} from '@/inc/Const'
import { useRouter } from 'next/router';
import Head from 'next/head'

const UpdatePhoto = () => {


const [title, setTitle] = useState(null);
const [photo, setPhoto] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const router = useRouter();

  function submitPhoto(){
      if(title!=null && photo!=null){
        setError(null)
        setLoading(true)
        addUpdatePhoto().then(resnew=>{
                   
          if(resnew.data.status=="success"){
            setLoading(false)
              router.push('/admin/gallery')
          }else{
              setError("Something went wrong. Please try again later.");
          }
      });
      }else{
          if(title==null){
            setError("Please fill all the fields")

          }else{
            setError("Please upload the file.")

          }
      }
      
  }

 async function addUpdatePhoto(){
      const URL = "https://api.markazcity.in/gallery/updatePhoto.php";
    const formData = new FormData();
    formData.append('api',API_KEY)
    formData.append('file',photo)
    formData.append('title',title)
    return  await axios.post(URL, formData,{
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
  }




    return (
        <AdminLayout title="New Photo"  label="Photo">
<Head>
    <title>New Photo | Markaz Knowledge City</title>
</Head>

            {error && <div className="bg-red-200 text-red-700 px-3 py-2 mb-3 rounded">{error}</div>}
            <input type="text" onChange={(e) => {setTitle(e.target.value);
             }}
            
            className="w-full"
            placeholder="Title"
            />
             <br />
 
              <br />
            <h4 className="text-violet-700 mb-2">Select Photo</h4>
        <input type="file"
        className="w-full m2-4"
        placeholder="Photo"
        onChange={ (e)=>setPhoto(e.target.files[0]) } 
        accept="image/jpeg,image/png"
        />    
        <span className="text-red-600 text-sm pt-1 inline-block">Upload compressed images to optimize page loading time.</span>
             <br /><br />

            <br />
             <div className="flex justify-end">
             <button
             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mt-3" 
             onClick={()=>submitPhoto()}
             >{loading?(
              <span>
                  <img src="/assets/img/loading.gif" className="mx-4" style={{height:"30px"}} alt="" />
              </span>
          ):(
              <span>Upload Photo</span>
          )}</button>
             </div>
        </AdminLayout>
    );
}
 
export default UpdatePhoto;