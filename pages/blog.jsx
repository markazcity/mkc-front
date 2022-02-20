import Logo from "@/components/Logo";
import Footer from "@/components/Footer/Footer";
import Head from 'next/head'


const Blog = () => {
  const posts = [1,2,3,4,5,6,7,8];
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
     
      <section className="my-10 lg:mx-64 mx-10">
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
      </section> </div>
      <section className="grid lg:grid-cols-4 my-5 lg:my-10 lg:mx-64 gap-x-1 gap-y-4">
          {
              posts.map(post=>(
                  <div  key={post}
                  className="mx-10 lg:mx-0 bg-gray-50"
                  data-aos="fade-up-right"
                  data-aos-delay={posts.indexOf(post)*50}
                  >
                      <div
                  className="h-52 mb-4"
                  style={
                    posts.indexOf(post)%2==0?
                    {background:"#BCC61E"}:
                    {background:"#A0A57C"}
                    }
                   
                  ></div>
                  <div className="mx-4 text-center leading-5 mb-5">Lorem ipsum dolor sit amet, 
consectetuer adipiscing elit, 
sed diam nonummy nibh 
euismod tincidunt ut laoreet</div>
                  </div>
              ))
          }
      </section>
      <Footer/>
    </div>
  );
};

export default Blog;
