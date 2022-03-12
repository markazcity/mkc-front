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
            }).catch(err=>alert("Network Error!"));
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

{/* EDUCATION SECTION */}
<EditSection
dataset={education}
title="EDUCATION"
/>

{/*HEALTH SECTION */}
<EditSection
dataset={health}
title="HEALTH"
/>

{/*COMMERCE SECTION */}
<EditSection
dataset={commerce}
title="COMMERCE"
/>

{/*AGRICULTURE SECTION*/}
<EditSection
dataset={agriculture}
title="AGRICULTURE"
/>

{/*RESIDENCE SECTION*/}
<EditSection
dataset={residence}
title="RESIDENCE"
/>

        </AdminLayout>
    );
}
 
export default Content;


export const EditSection = ({dataset, title})=>{
    return (
        <section className="mt-12"><h2 className="text-violet-700 font-bold text-3xl">{title}</h2> <br />
{dataset!=null?dataset.length>0?(<div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
{dataset.map((item)=>
                                (<div className=" bg-gray-100 rounded  shadow hover:shadow-md cursor-pointer" key={item.wc_id}
                                onClick={()=>{
                                    window.open(`/admin/customize/editContent?id=${item.wc_id}`, '_blank').focus();
                                }}
                                >
                                <div className=" h-40  rounded-t"
                                style={{
                                    background: 
                                    item.wc_image!=null && item.wc_image.length>4?
                                    `url(https://api.markazcity.in/webContents/uploads/${item.wc_image})`:
                                    `url(https://via.placeholder.com/350x150)`,
                                    
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                    <span className="text-violet-700  py-1 px-3 rounded inline-block my-1">
                    {item.wc_title} 
                    </span></div>))}</div>):(<div>No Contents</div>):(<div>Loading..</div>)
          }
</section>
    )
}