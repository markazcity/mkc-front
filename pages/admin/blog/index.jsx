

import AdminLayout from '@/components/Admin/Layout'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Blog = () => {
    const router = useRouter();

    const [error, setError] = useState(null);
    const DATA_URL = "https://api.markazcity.in/blog.php?type=list";
    const [blogs, setBlogs] = useState(null);

    
        const getData = async () => {
            fetch(DATA_URL)
            .then(response => response.json())
            .then(data =>{
              if(data.status==="HasBlog"){
                setBlogs(data.blogs);
              }
              else if(data.status==="EmptyBlog"){
                setBlogs([]);
              }else {
                setError("Auth Error");
                
              }
            });
          }
    
    
    useEffect(() => {
        getData();
    },[])


    return (
        <AdminLayout title="Blog" label="Blog">
           <div className="flex justify-between">
               <div></div>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
               onClick={() => router.push('/admin/blog/new')}
               >New Blog</button>
           </div>
<section>
{
              blogs!=null?blogs.length>0?(
                <div>
                    {
                        blogs.map((blg)=>{
                            return  blg.title.length>1?
                            (
                                <section className="flex bg-gray-100 rounded my-4 px-4 py-2 shadow hover:shadow-md">
                                   

                                            
                                                <div
                                                className="w-52 h-52  mr-4 rounded"
                                                style={{
                                                    background: 
                                                    blg.thumb!=null && blg.thumb.length>4?
                                                    `url(https://api.markazcity.in/${blg.thumb})`:
                                                    `url(https://via.placeholder.com/350x150)`,
                                                    
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                }}
                                                >
                                                </div>
                                            
                                        
                                    
                                    <div
                                key={blg.id}
                                className=""
                                >
                                    <span className="text-violet-700 text-xl font-bold  py-1 rounded inline-block my-2">
                                    {blg.title} 
                                    </span>
                                   
                                    
                                   <hr />

<p className="pt-3">
<div dangerouslySetInnerHTML={{__html: blg.body.substring(0,100)+"..."}}>
</div>
<button
onClick={()=>{
    window.open(`/blog/${blg.blog_link}`, '_blank').focus();
}}
className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-1 rounded my-2"
>Read Blog</button>
<button
onClick={()=>{
    window.open(`/admin/blog/edit?id=${blg.id}`, '_blank').focus();
}}
className="bg-butter-600 hover:bg-butter-700 text-black px-4 py-1 rounded my-2 ml-3"
>Edit</button>

</p>

                                </div>
                                </section>
                            ):(<span></span>)
                        })
                    }
                </div>
            ):(
                  <div>No blogs</div>
              ):(
                  <div>Loading..</div>
              )
          }
</section>


        </AdminLayout>
    );
}
 
export default Blog;
