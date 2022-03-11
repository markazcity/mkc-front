

import AdminLayout from '@/components/Admin/Layout'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head'

const Content = () => {
    const router = useRouter();

    const [error, setError] = useState(null);
    const DATA_URL = "https://api.markazcity.in/webContents/content.php";
    const [dataset, setData] = useState(null);

    const [education, setEducation] = useState(null);
    const [commerce, setCommerce] = useState(null);
    const [health, setHealth] = useState(null);
    const [agriculture, setAgriculture] = useState(null);
    const [residence, setResidence] = useState(null);
    const [cc, setCC] = useState(null);

    
        const getData = async () => {
            fetch(DATA_URL)
            .then(response => response.json())
            .then(data =>{
              if(data.status==="success"){
                setData(data.data);
                setEducation(data.data.filter(item=>item.wc_category==="education"));
                setCommerce(data.data.filter(item=>item.wc_category==="commerce"));
                setHealth(data.data.filter(item=>item.wc_category==="health"));
                setAgriculture(data.data.filter(item=>item.wc_category==="agriculture"));
                setResidence(data.data.filter(item=>item.wc_category==="residence"));
                setCC(data.data.filter(item=>item.wc_category==="cc"));

              }
              else if(data.status==="failed"){
                setData([]);
              }else {
                setError("Auth Error");
                
              }
            });
          }
    
    
    useEffect(() => {
        getData();
    },[])


    return (
        <AdminLayout title="Contents" label="Dashboard">
             <Head>
        <title> Contents - Markaz Knowledge City</title>
        <meta name="description" content="Content of Markaz Knowledge City" />
      </Head>
           <div className="flex justify-between">
               <div></div>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
               onClick={() => router.push('/admin/customize/contents')}
               >New Content</button>
           </div>
           <br /> <br />

{/* 
========================
EDUCATION SECTION 
========================
*/}
<section><h2 className="text-violet-700 font-bold text-3xl">EDUCATION</h2> <br />
{education!=null?education.length>0?(<div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
{education.map((edu)=>
                                (<div className=" bg-gray-100 rounded  shadow hover:shadow-md" key={edu.wc_id}
                                onClick={()=>{
                                    window.open(`/admin/customize/editContent?id=${edu.wc_id}`, '_blank').focus();
                                }}
                                >
                                <div className=" h-40  rounded-t"
                                style={{
                                    background: 
                                    edu.wc_image!=null && edu.wc_image.length>4?
                                    `url(https://api.markazcity.in/webContents/uploads/${edu.wc_image})`:
                                    `url(https://via.placeholder.com/350x150)`,
                                    
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                    <span className="text-violet-700  py-1 px-3 rounded inline-block my-1" 
                   
                    >
                    {edu.wc_title} 
                    </span></div>))}</div>):(<div>No Contents</div>):(<div>Loading..</div>)
          }
</section>

{/* 
========================
HEALTH SECTION 
========================
*/}
<section className="mt-12"><h2 className="text-violet-700 font-bold text-3xl">HEALTH</h2> <br />
{health!=null?health.length>0?(<div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
{health.map((edu)=>
                                (<div className=" bg-gray-100 rounded  shadow hover:shadow-md" key={edu.wc_id}>
                                <div className=" h-40  rounded-t"
                                style={{
                                    background: 
                                    edu.wc_image!=null && edu.wc_image.length>4?
                                    `url(https://api.markazcity.in/webContents/uploads/${edu.wc_image})`:
                                    `url(https://via.placeholder.com/350x150)`,
                                    
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                    <span className="text-violet-700  py-1 px-3 rounded inline-block my-1">
                    {edu.wc_title} 
                    </span></div>))}</div>):(<div>No Contents</div>):(<div>Loading..</div>)
          }
</section>


{/* 
========================
COMMERCE SECTION 
========================
*/}
<section className="mt-12"><h2 className="text-violet-700 font-bold text-3xl">COMMERCE</h2> <br />
{commerce!=null?commerce.length>0?(<div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
{commerce.map((edu)=>
                                (<div className=" bg-gray-100 rounded  shadow hover:shadow-md" key={edu.wc_id}>
                                <div className=" h-40  rounded-t"
                                style={{
                                    background: 
                                    edu.wc_image!=null && edu.wc_image.length>4?
                                    `url(https://api.markazcity.in/webContents/uploads/${edu.wc_image})`:
                                    `url(https://via.placeholder.com/350x150)`,
                                    
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                    <span className="text-violet-700  py-1 px-3 rounded inline-block my-1">
                    {edu.wc_title} 
                    </span></div>))}</div>):(<div>No Contents</div>):(<div>Loading..</div>)
          }
</section>


{/* 
========================
AGRICULTURE SECTION 
========================
*/}
<section className="mt-12"><h2 className="text-violet-700 font-bold text-3xl">AGRICULTURE</h2> <br />
{agriculture!=null?agriculture.length>0?(<div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
{agriculture.map((edu)=>
                                (<div className=" bg-gray-100 rounded  shadow hover:shadow-md" key={edu.wc_id}>
                                <div className=" h-40  rounded-t"
                                style={{
                                    background: 
                                    edu.wc_image!=null && edu.wc_image.length>4?
                                    `url(https://api.markazcity.in/webContents/uploads/${edu.wc_image})`:
                                    `url(https://via.placeholder.com/350x150)`,
                                    
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                    <span className="text-violet-700  py-1 px-3 rounded inline-block my-1">
                    {edu.wc_title} 
                    </span></div>))}</div>):(<div>No Contents</div>):(<div>Loading..</div>)
          }
</section>


{/* 
========================
RESIDENCE SECTION 
========================
*/}
<section className="mt-12"><h2 className="text-violet-700 font-bold text-3xl">RESIDENCE</h2> <br />
{residence!=null?residence.length>0?(<div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
{residence.map((edu)=>
                                (<div className=" bg-gray-100 rounded  shadow hover:shadow-md" key={edu.wc_id}>
                                <div className=" h-40  rounded-t"
                                style={{
                                    background: 
                                    edu.wc_image!=null && edu.wc_image.length>4?
                                    `url(https://api.markazcity.in/webContents/uploads/${edu.wc_image})`:
                                    `url(https://via.placeholder.com/350x150)`,
                                    
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                    <span className="text-violet-700  py-1 px-3 rounded inline-block my-1">
                    {edu.wc_title} 
                    </span></div>))}</div>):(<div>No Contents</div>):(<div>Loading..</div>)
          }
</section>

        </AdminLayout>
    );
}
 
export default Content;
