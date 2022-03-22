

import AdminLayout from '@/components/Admin/Layout'
import Dialog from '@/components/Admin/Dialog'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import {API_KEY} from '@/inc/Const'

const CityPulse = () => {
    const router = useRouter();

    const [error, setError] = useState(null);
    const [deletePulse, setDeletePulse] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const DATA_URL = "https://api.markazcity.in/CityPulse/getCityPulse.php";
    const [dataset, setCityPulses] = useState(null);

    
        const getData = async () => {
            fetch(DATA_URL)
            .then(response => response.json())
            .then(data =>{
              if(data.status==="success"){
                setCityPulses(data.data);
              }
              else if(data.status==="empty"){
                setCityPulses([]);
                
              }else {
                setError("Auth Error");
                
                
              }
            });
          }
    
    
    useEffect(() => {
        getData();
    },[])


    return (
        <AdminLayout title="CityPulse" label="CityPulse">
             <Head>
        <title>CityPulse - Markaz Knowledge City</title>
        <meta name="description" content="CityPulse of Markaz Knowledge City" />
      </Head>
           <div className="flex justify-between">
               <div></div>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
               onClick={() => router.push('/admin/citypulse/new')}
               >New CityPulse</button>
           </div>
<section>
{
              dataset!=null?dataset.length>0?(
                <div>
                    {
                        dataset.map((blg)=>{
                            return  blg.cp_name.length>1?
                            (
                                <section className="flex bg-gray-100 rounded my-4 px-4 py-2 shadow hover:shadow-md">
                                   

                                            
                                                <div
                                                className="w-52 h-36  mr-4 rounded"
                                                style={{
                                                    background: 
                                                    blg.cp_thumb!=null && blg.cp_thumb.length>4?
                                                    `url(https://api.markazcity.in/${blg.cp_thumb})`:
                                                    `url(https://via.placeholder.com/350x150)`,
                                                    
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                }}
                                                >
                                                </div>
                                            
                                        
                                    
                                    <div
                                key={blg.cp_id}
                                className=""
                                >
                                    <span className="text-violet-700 text-xl font-bold  py-1 rounded inline-block my-1">
                                    {blg.cp_name} 
                                    </span>
                                   
                                    
                                   <hr />

<p className="pt-3">
{/* <div dangerouslySetInnerHTML={{__html: blg.body.substring(0,100)+"..."}}>
</div> */}
<button
onClick={()=>{
    window.open(`/blog`, '_blank').focus();
}}
className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-1 rounded my-2"
>View in Site</button>
<button
onClick={()=>{
    window.open(`/admin/citypulse/edit?id=${blg.cp_id}`, '_blank').focus();
}    
}
className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded my-2 ml-3"
>Edit</button>
<button
onClick={()=>{
    setDeletePulse(true)
    setDeleteId(blg.cp_id)
}
    
}
className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded my-2 ml-3"
>Delete</button>
</p>

                                </div>
                                </section>
                            ):(<span></span>)
                        })
                    }
                </div>
            ):(
                  <div>No dataset</div>
              ):(
                  <div>Loading..</div>
              )
          }
</section>

    <DeleteCityPulse 
    open={deletePulse}
    id={deleteId}
    onClose={()=>{
        setDeletePulse(false)
        setDeleteId(null)
    }}
    onSuccess = {()=>getData()}
    />


        </AdminLayout>
    );
}
 
export default CityPulse;

export const DeleteCityPulse = (props)=>{
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();
    return (
        <Dialog
        open={props.open}
    onClose={() =>props.onClose()}
    >
        <div className="py-6 px-4">
            Are you sure you want to delete this CityPulse? <br />
            <button className="bg-green-600 hover:bg-green-700  text-white px-2 py-1 rounded mr-2 mt-2"
            onClick={() =>props.onClose()}
            >Cancel</button> 
            <button className="bg-red-600 hover:bg-red-700  text-white px-2 py-1 rounded mr-2 mt-2"
            onClick={() =>{
                setDeleting(true);
                fetch(`https://api.markazcity.in/CityPulse/delete.php?id=${props.id}&api=${API_KEY}`)
                .then(response => response.json())
                .then(res=>{
                    if(res.status === "success"){
                        props.onClose()
                        props.onSuccess()
                    }else{
                        props.onClose()
                    alert("Something went wrong. Please try again later.")
                    }
                    
                });
            }}
            >Yes, Delete</button>
            
        </div>
{deleting?(
    <div className="px-4">Deleting CityPulse...</div>
):(
    <span></span>
)}
        </Dialog>
    );
}