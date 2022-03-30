import AdminLayout from '@/components/Admin/Layout'
import { useEffect, useState } from 'react';

var qs = require('qs');
import axios from 'axios';

import {RiDeleteBin6Line} from 'react-icons/ri'
import {BiEditAlt} from 'react-icons/bi'

import Head from 'next/head'
import {ROOT_URL} from '@/inc/Const'
import {API_KEY} from '@/inc/Const'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomizeHome = () => {

const DATA_URL = "https://api.markazcity.in/webContents/content.php";
const [data, setData] = useState(null);

function getData(){
  axios.get(DATA_URL).then(res=>{
    let data = res.data;
    if(data.status==="success"){
      setData(data.data);
    }else{
      alert("Something went wrong. Please try again later.2");
    }
  })
}

useEffect(() => {
  getData();
},[])

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

{/* HOME ABOUT */}
<section className="mt-6 bg-white shadow-lg rounded-lg p-4">
<h2 className="text-2xl font-bold my-2 text-violet-700">Home Slides</h2>
  <HomeSlides data={data} refresh={()=>getData()}/>
  </section> 

{/* HOME SLIDES */}
<section className="mt-6 bg-white shadow-lg rounded-lg p-4">
<h2 className="text-2xl font-bold my-2 text-violet-700">About Section</h2>
  <HomeAbout data={data} refresh={()=>getData()}/>
  </section> 

{/* ZONES */}
<section className="mt-6 bg-white shadow-lg rounded-lg p-4">
<h2 className="text-2xl font-bold my-2 text-violet-700">Zones</h2>
  <Zones data={data}/>
  </section> 


  

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
        </AdminLayout>
    );
}
 
export default CustomizeHome;



 
export const HomeAbout = ({data, refresh}) => {

  const [aboutTitle, setAboutTitle] = useState("");
const [aboutBody, setAboutBody] = useState("");
const [aboutId, setAboutId] = useState("");


  useEffect(() => {
    if(data!=null){
      let aboutContent = data.filter(item=>item.wc_category==="homeabout")[0];
      setAboutTitle(aboutContent.wc_title);
      setAboutBody(aboutContent.wc_body);
      setAboutId(aboutContent.wc_id);

    }
  },[data])

  // UPDATE SLIDE ITEM
  async function updateContent(){
    const URL = "https://api.markazcity.in/webContents/updateContent.php";
  const formData = new FormData();
  formData.append('api',API_KEY)
  formData.append('id',aboutId)
  formData.append('title',aboutTitle)
  formData.append('body',aboutBody)
  formData.append('category','homeabout')

   await axios.post(URL, formData,{
      headers: {
        'Accept': 'application/json',
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      }
  })  .then( (response)=> {
    if(response.data.status=="success"){
        toast.success("About content updated!")
        refresh()
    }
  })
  .catch( (error)=> {
    toast.error(error)
  });;
}



  return aboutTitle!=null?(
    <section>
<div className="my-2">
  <span className="text-minigreen-700 px-1">Title</span>
<input type="text"
defaultValue={aboutTitle}
className=" bg-gray-100 w-full mr-6 rounded"
onChange={ (e)=>setAboutTitle(e.target.value)}
/>
<br /> <br />
<span className="text-minigreen-700 px-1">Content</span>

<textarea rows="4"
defaultValue={aboutBody}
className=" bg-gray-100 w-full mr-6 rounded-lg"
onChange={ (e)=>setAboutBody(e.target.value)}
></textarea>

<br />
<div className="flex justify-end px-4 py-3">
<button
className="bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded text-white"
onClick={()=>updateContent()}
>Update Content</button>
</div>


</div>


   
    </section>
  ):(
    <div>Loading</div>
  );
}
 
export const HomeSlides = ({data, refresh}) => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    if(data!=null){
      setSlideData(data.filter(item=>item.wc_category==="homeslide"));
    }
  },[data])

  // UPDATE HOME ABOUT SECTION
  async function updateContent(id, title){
    const URL = "https://api.markazcity.in/webContents/updateContent.php";
  const formData = new FormData();
  formData.append('api',API_KEY)
  formData.append('id',id)
  formData.append('title',title)
  formData.append('category','homeslide')

   await axios.post(URL, formData,{
      headers: {
        'Accept': 'application/json',
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      }
  })  .then( (response)=> {
    if(response.data.status=="success"){
        toast.success("Slide text updated!")
        refresh()
    }
  })
  .catch( (error)=> {
    toast.error(error)
  });;
}

  return slideData!=null?(
    <section>
      {
        slideData.map((item)=>{
          return (
            <div  key={item.wc_id}>
          
<div className="bg-gray-100 rounded my-4 px-6 py-4 shadow-lg flex justify-between items-center">
<input type="text"
id={item.wc_id}
defaultValue={item.wc_title}
className="border-none bg-gray-100 w-full mr-6 rounded-lg"
onBlur={(e)=> {
    if(item.wc_title!==e.target.value){
      updateContent(item.wc_id,e.target.value)
      
    }
} }
/> 

<div className="flex">

<div className="bg-blue-100 hover:bg-blue-300 p-2 rounded-full transition-all duration-500  mr-2"
onClick={() =>{
    document.getElementById(item.wc_id).focus();
}}
>
    <BiEditAlt className="text-blue-600 text-xl"/></div>  


{/* <div className="bg-red-100 hover:bg-red-300 p-2 rounded-full transition-all duration-500"
onClick={() =>{
    setShowDelete(true)
    setDeleteId(item.wc_id)}}><RiDeleteBin6Line className="text-red-600 text-xl "/></div> */}


</div></div>





            </div>
          )
        })
      }
    </section>
  ):(
    <div>Loading</div>
  );
}
 


export const Zones = ({data}) => {
  
  const [zoneData, setZoneData] = useState([]);
  
  useEffect(() => {
    if(data!=null){
      setZoneData(data.filter(item=>item.wc_category==="zones"));
    }
  },[data])
  
    return (
      <div>
  {
    zoneData!=null?(
      <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-5 lg:mx-32 3xl:mx-64 gap-y-1">
        {zoneData.map((item)=>{
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
            
            >Edit</button>
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
   