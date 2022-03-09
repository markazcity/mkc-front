

import AdminLayout from '@/components/Admin/Layout'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import {ROOT_URL} from '@/inc/Const'
import Dialog from '@/components/Admin/Dialog'
import {API_KEY} from '@/inc/Const'

const Gallery = () => {
    const router = useRouter();

    const [error, setError] = useState(null);
    const DATA_URL = ROOT_URL+"gallery/getPhotos.php";
    const [blogs, setGallerys] = useState(null);
    const [deletePhoto, setDeletePhoto] = useState(null);

    
        const getData = async () => {
            fetch(DATA_URL)
            .then(response => response.json())
            .then(data =>{
              if(data.status==="success"){
                setGallerys(data.data);
              }
              else if(data.status==="empty"){
                setGallerys([]);
              }else {
                setError("Auth Error");
                
              }
            });
          }
    
    
    useEffect(() => {
        getData();
    },[])


    return (
        <AdminLayout title="Gallery" label="Gallery">
             <Head>
        <title>Gallery - Markaz Knowledge City</title>
        <meta name="description" content="Gallery of Markaz Knowledge City" />
      </Head>
           <div className="flex justify-between">
               <div></div>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
               onClick={() => router.push('/admin/gallery/new')}
               >Upload Photo</button>
           </div>
<section className="grid lg:grid-cols-2 xl:grid-cols-3">
{
              blogs!=null?blogs.length>0?(
                <div>
                    {
                        blogs.map((blg)=>{
                            return  (<section>
                                <div className="flex bg-gray-100 rounded-lg my-4 px-4 py-2 shadow hover:shadow-md h-52"
                                style={{
                                    backgroundImage:`url('${ROOT_URL+"gallery/"+blg.g_fileLink}')`,
                                    backgroundSize:"cover",
                                }}
                                >

                            
                                </div>
                                <div>
                                    {blg.g_name} <br />
                                    <button
onClick={()=>setDeletePhoto(true)
}
className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded my-2 "
>Delete</button>
                                </div>
                                {deletePhoto?(
    <DeletePhoto 
    id={blg.g_id}
    onClose={()=>setDeletePhoto(false)}
    onSuccess = {()=>getData()}
    ></DeletePhoto>
):(<span></span>)}
                            </section>
                                )
                            
                        })
                    }
                </div>
            ):(
                  <div>No photos</div>
              ):(
                  <div>Loading..</div>
              )
          }
</section>


        </AdminLayout>
    );
}
 
export default Gallery;

export const DeletePhoto = (props)=>{
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();
    return (
        <Dialog
    onClose={() =>props.onClose()}
    >
        <div className="py-6 px-4">
            Are you sure you want to delete this photo? <br />
            <button className="bg-green-600 hover:bg-green-700  text-white px-2 py-1 rounded mr-2 mt-2"
            onClick={() =>props.onClose()}
            >Cancel</button> 
            <button className="bg-red-600 hover:bg-red-700  text-white px-2 py-1 rounded mr-2 mt-2"
            onClick={() =>{
                setDeleting(true);
                fetch(`https://api.markazcity.in/gallery/delete.php?id=${props.id}&api=${API_KEY}`)
                .then(response => response.json())
                .then(res=>{
                    props.onClose()
                    if(res.status === "success"){
                        props.onSuccess()
                    }else{
                       
                    alert("Something went wrong. Please try again later.")
                    }
                    
                });
            }}
            >Yes, Delete</button>
            
        </div>
{deleting?(
    <div className="px-4">Deleting Photo...</div>
):(
    <span></span>
)}
        </Dialog>
    );
}