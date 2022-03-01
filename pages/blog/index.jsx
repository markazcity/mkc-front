import Logo from "@/components/Logo";
import Footer from "@/components/Footer/Footer";
import Head from 'next/head'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const Blog = () => {
  

    const router = useRouter();
  const DATA_URL = "https://api.markazcity.in/blog.php?type=list";
  const [blogs, setBlogs] = useState(null);
  const [featured, setFeatured] = useState(null);
  
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
    
    <div>
       <Head>
        <title>Blog - Markaz Knowledge City</title>
        <meta name="description" content="Blog of Markaz Knowledge City" />
      </Head>
      <div className="py-5" style={{ backgroundColor: "#F8FAF8" }}>
        <Logo logo="logob" className="z-9" />
        <h1 className="text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#69696D",
                }}
                data-aos="zoom-in"
                >BLOG</h1> <br />
     </div>
     {
       blogs!=null &&
       blogs.length>0?(
         <div>
                 {/* <section className="my-10 lg:mx-64 mx-10">
       <div className="flex lg:flex-row flex-col">
           <div className="flex-1">
               <h1 className="text-2xl font-extrabold text-gray-600">CULTURAL CENTER</h1>
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse 
molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros 
et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril 
delenit augue duis dolore te feugait nulla facilisi. 
           </div>
           <div className="lg:flex-1 bg-gray-400 lg:ml-10 h-80 order-first lg:order-last mb-6"></div>
       </div>
      </section>  */}
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 my-5 lg:my-10 lg:mx-32 xl:mx-56 gap-x-10 gap-y-10 ">
          {
              blogs.map(post=>(
                  <a  key={post}
                  className="mx-10 lg:mx-0 bg-gray-50 shadow-md rounded-lg block cursor-pointer"
                  data-aos="fade-up-right"
                  data-aos-delay={blogs.indexOf(post)*50}
                  href={`/blog/${post.id}`}
                  onClick={
                      (e) => {
e.preventDefault();
router.push(`/blog/${post.id}`)

                      }
                  }

                  >
                      <div
                  className="h-52 mb-4 rounded-t-lg"
                  style={
                   {
                     background:`url('https://api.markazcity.in/${post.thumb}') no-repeat center center`,
                      backgroundSize: "cover",
                   }
                    }
                   
                  ></div>
                  <div className="mx-4 text-center leading-5 mb-5 font-bold">{post.title}</div>
                  </a>
              ))
          }
      </section>
         </div>
       ):(
         <div  className="grid lg:grid-cols-2 xl:grid-cols-3 my-5 lg:my-10 xl:mx-64 gap-x-4 gap-y-10">
           {
             [1,2,3,4,5,6].map(e=>{
               return (<div  key={e}
                
                className="mx-10 lg:mx-0 bg-gray-300 rounded-lg"
                data-aos="fade-up-right"
                
                >
                    <div
                className="h-52 mb-4 "
                
                 
                ></div>
                <div className="mx-4 text-transparent leading-5 mb-5 ">Markaz Knowledge City</div>
                </div>)
             })
           }
         </div>
       )
     }
<br /><br />
      <Footer/>
    </div>
  );
};

export default Blog;
