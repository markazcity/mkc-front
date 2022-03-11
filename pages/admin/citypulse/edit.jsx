import AdminLayout from '@/components/Admin/Layout'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {API_KEY} from '@/inc/Const'
import { useRouter } from 'next/router';
import Head from 'next/head'
import {ROOT_URL} from '@/inc/Const'

const EditCityPulse = () => {


const [title, setTitle] = useState(null);
const [pdf, setPdf] = useState(null);
const [pdfLink, setPdfLink] = useState(null);

const [thumb, setThumb] = useState(null);
const [thumbLink, setThumbLink] = useState(null);

const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

const [pulseId, setPulseId] = useState(null);

const router = useRouter();

useEffect(() => {
    if(!router.isReady) return;
    const query = router.query;
    setPulseId(query.id);
  }, [router.isReady, router.query]);


  useEffect(() => {
    if(pulseId!=null){
        getCityPulseData()
    }
},[pulseId])

  function getCityPulseData(){
      fetch(ROOT_URL+'CityPulse/getCityPulse.php?id='+pulseId).then(res=>res.json()).then(data=>{
          let dat = data.data[0];
          setTitle(dat.cp_name);
          setThumbLink(dat.cp_thumb);
          setPdfLink(dat.cp_fileLink);

      }).catch(error=>{alert(error);});
  }


  function submitCityPulse(){
      if(title!=null){
        setError(null)
        setLoading(true)
        
        if(thumb!=null){
            uploadThumb().then(res=>{
                if(res.data.status=="success"){
                  updateEditCityPulse(res.data.file).then(resnew=>{
                    setLoading(false)
                      if(resnew.data.status=="success"){
                        alert("City Pulse Updated!")
                      }else{
                          alert("Something went wrong. Please try again later.");
                      }
                  });
                }else{
                  alert(res.data.message)
                }
              })
        }else{
            updateEditCityPulse(thumbLink).then(resnew=>{
                setLoading(false)
                  if(resnew.data.status=="success"){
                      alert("City Pulse Updated!")
                  }else{
                      alert(resnew.data.message);
                  }
              });
        }
       
                
           
            
      
      }else{
            setError("Please fill all the fields")

         
      }
      
  }
  async function uploadThumb(){
    const URL = ROOT_URL+"uploadFile.php";
  const formData = new FormData();
  formData.append('api',API_KEY)
  formData.append('file',thumb)
  return  await axios.post(URL, formData,{
      headers: {
          'content-type': 'multipart/form-data'
      }
  });
}


 async function updateEditCityPulse(thumbUrl){
      const URL = ROOT_URL+"CityPulse/update.php";
    const formData = new FormData();
    formData.append('id',pulseId)
    formData.append('api',API_KEY)
    if(pdf!=null){formData.append('file',pdf)}
    formData.append('title',title)
    formData.append('fileLink',pdfLink)
    formData.append('thumb',thumbUrl)
    return  await axios.post(URL, formData,{
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
  }




    return (
        <AdminLayout title="Edit CityPulse"  label="CityPulse">
<Head>
    <title>Edit CityPulse | Markaz Knowledge City</title>
</Head>

            {error && <div className="bg-red-200 text-red-700 px-3 py-2 mb-3 rounded">{error}</div>}
            <input type="text" onChange={(e) => {setTitle(e.target.value);
            }}
            className="w-full"
            placeholder="Title"
            defaultValue={title}
            />
             <br />
 
              <br />
            <h4 className="text-violet-700 mb-2">CityPulse Upload</h4>
        <input type="file"
        className="w-full m2-4"
        placeholder="CityPulse"
        onChange={ (e)=>setPdf(e.target.files[0]) } 
        accept="application/pdf"
        />    
      <br />
      <br />
            <h4 className="text-violet-700 mb-2">Thumbnail</h4>
            {
                thumbLink!=null?(
                    <div className="my-2">
                        <img src={ROOT_URL+thumbLink} 
                        className="rounded-lg"
                        id="thumbPreview"
                        style={{height:"200px"}} alt="" />
                    </div>
                ):(
                    <span></span>
                )
            }
        <input type="file"
        className="w-full m2-4"
        placeholder="Thumbnail"
        onChange={ (e)=>{
            var output = document.getElementById('thumbPreview');
            output.src = URL.createObjectURL(e.target.files[0]);
            setThumb(e.target.files[0])} } 
        accept="image/jpeg,image/png"
        />    
        <span className="text-red-600 text-sm pt-1 inline-block">Thumbnail must be in <b>1000x600</b>px resolution.</span>  
             <br />
            <br />
             <div className="flex justify-end">
             <button
             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mt-3" 
             onClick={()=>submitCityPulse()}
             >{loading?(
              <span>
                  <img src="/assets/img/loading.gif" className="mx-4" style={{height:"30px"}} alt="" />
              </span>
          ):(
              <span>Update CityPulse</span>
          )}</button>
             </div>
        </AdminLayout>
    );
}
 
export default EditCityPulse;