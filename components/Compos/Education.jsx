import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import { useEffect, useState } from 'react';

SwiperCore.use([Pagination]);

const Education = () => {
   
    
    const educationList = [
        
        
        {"title":"WIRAS", 
        "text":"World Institute for Research in Advanced Sciences (WIRAS) is an institute for higher education in Islamic studies. WIRAS is committed to equipping young scholars in the field of Islamic law, theology, mysticism, medicine, and various other Islamic sciences. Along with promoting advanced studies in classical Islamic sciences, it also focuses on producing original researches in the larger domain of contemporary Islamic studies as well as on issues regarding Muslim societies in the modern world.", 
        "img":"wiras.jpg",
    "link":"http://wiras.in/"},

        {"title":"Unani Medical College", 
        "text":"To ensure more secured habitual health culture, we started the first Unani medical college in Kerala. It aims to produce highly qualified medical professionals capable of strengthening the health infrastructure by providing more medical facilities. MUMC offers a well-crafted synthesis of theory-practice learning atmosphere with sophisticated infrastructure, technically advanced learning spaces, and practice-oriented curriculum for better educational experiences. ", 
        "img":"unani.jpg",
    "link":"http://markazunanimedicalcollege.org/"},
        {"title":"Markaz Law College", 
        "text":"Markaz Law College (MLC) is envisioned to prepare a legal generation committed to protect and revive the constitution of India. MLC provides 5-year integrated law course and 3-year LLB programme with various specializations at undergraduate level, and two LLM programmes are offered at post-graduate level. Rather than being a mere centre for legal learning, MLC also functions as a unique space for advanced research in legal studies. ", 
        "img":"law.jpg",
    "link":"http://www.markazlawcollege.com/"},
        {"title":"Malaibar Foundation", 
        "text":"As part of its journey towards bringing innovation and development in the educational sector, Markaz Knowledge City formed Malaibar Foundation for Research and Development (MFRD) as a platform for clubbing experts in the proposed area for more creative dialogues and discussions. MFRD intends to fulfill the aim of advanced research followed by the production of new knowledge in the fields of arts, science, managements, technology, and literature.    ", 
        "img":"malaibar.jpg",
    "link":"https://malaibar.org/"},
        {"title":"Queensland", 
        "text":"Queensland is a multidisciplinary hub for women’s education, employment, and entrepreneurship. It consists of a wellness centre, studio for Quranic learning, an exclusive campus for Sharia studies, technical skill development academy, residence for professional students, digital library, and indoor sports stadium. Queensland offers higher secondary and undergraduate courses in integrated Islamic sciences under various steams of humanities, commerce, and science. ", 
        "img":"queensland.jpg",
    "link":"https://markazqueensland.com/"},
    {"title":"Alif Global School",
        "text":"Alif Global School provides the K-12 education with international standards. By integrating local, national, and international curriculums together, AGS strives to draw a new map in the educational sector with more glocal advancements. Along with offering the finest curriculums of CBSE and IGCSE, it has ensured to set up a good habitus for better learning outcomes from the students. Thus AGS has technically full equipped smart classrooms, climate regulation facilities, creative circles, homely residences, and outdoor inventory spaces. ",
        "img":"alif.jpg",
        "link":"https://alifglobalschool.com/"
    }   ,
    {"title":"Hillsinai",
        "text":"To produce more qualified leaders and skilled human resources, we set up a center of excellence named Hillsinai. Its curriculum is designed to equip higher secondary level students with many interdisciplinary programmes including communicative skill development programme, civil service coaching, martial arts, photography, social work, TED talks, study excursions, and media and journalism, along with providing higher secondary education in commerce and humanities. ",
        "img":"hillsinai.jpg",
        "link":"http://www.hillsinai.com/"
    }   ,
    {"title":"MeeM",
        "text":"MeeM is the virtual platform of Markaz Knowledge City developed as part of its mission for global education. Through this, thousands of active learners from across the world are able to pursue primary to advanced level education in various disciplines. It is supported with highly qualified technical professionals and subject experts from all fields of study. MeeM is also moving ahead to achieve its unique goal of erasing the boundaries of nations for the universal dissemination of knowledge and shared human values.",
        "img":"meem.jpg",
        "link":"https://meemacademia.com/"
    }   ,
    {"title":"Habitus",
        "text":"To empower the youth with more advanced skills in their professions, Markaz Knowledge City started a finishing school under the tittle ‘Habitus’. Through providing different short-term and long-term courses, workshops, and consultations, Habitus looks to empower the youth who in turn can build their own career with individual growth and collective support. The facilitators in Habitus include experts in different industries and academics from different parts of the world. ",
        "img":"habitus.jpg",
        "link":"http://www.habitusschool.in/"
    }   
   
    
    ];
    const [isPhone, setIsphone] = useState(false)
    function matchSlideCount(x) {
        if (x.matches) { 
          setIsphone(false);
        } else {
         setIsphone(true);
        }
      }

     function eduHorScroll(){
        var windowWidth = window.innerWidth;
        var horLength = document.querySelector(".education-items-wrapper").scrollWidth;
        var distFromTop = document.querySelector(".education-section").offsetTop;
        var scrollDistance = distFromTop + horLength - windowWidth;
        document.querySelector(".education-section").style.height = horLength-300 + "px";
        window.onscroll = function(){
          var scrollTop = window.pageYOffset;
          if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
            document.querySelector(".education-items-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop+300)+"px)";
          }
        }
     }

    useEffect(()=>{
        var screenSize = window.matchMedia("(min-width: 768px)")
matchSlideCount(screenSize)
screenSize.addListener(matchSlideCount)
eduHorScroll();
    }, []);  
    const colorChange = [0,3,4,7, 8]
    return (
        <div  className="education-section pb-8 py-5">

            <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center pt-10"
                style={{
                    color: "#69696D",
                }}
                data-aos="zoom-in"
                >EDUCATION</h1>
                {/* LISTS STARTS HERE */}
                <div className="sticky-wrapper">
                
                <section className="hidden lg:flex mx-10 lg:mx-64">
              
   
    <div className="education-items-wrapper">
                
            {
                educationList.map(edu=>(
                    <div>
                    
                    <div className="edu-element my-4 pb-4 mx-3  bg-white component-container"
                        
                    key={educationList.indexOf(edu)}
                    data-aos="fade-up"
                    data-aos-delay={educationList.indexOf(edu)*50}
                    >
                        <div className="relative">

                        
                        <div
                        className="lg:mx-0 lg:my-0 h-72"
                        style={
                           {
                        backgroundImage:`url('/assets/img/components/${edu.img}')`,
                        backgroundSize:"cover",
                        }
                           }
                        >
                            </div>
                            <section className="absolute w-full flex justify-center"
                            style={{ bottom:"-25px"}}
                            >
                            <div className=" bg-violet-600 rounded-full
                               hover:bg-violet-700 flex justify-center items-center"
                               style={{
                                   width:"56px",
                                   height:"56px",
                                  
                               }}
                               > 
                               <h1 className="font-bold text-white text-2xl">{
                                   educationList.indexOf(edu)+1
                                   }</h1></div></section>
                            </div>
                            

                            <div className=" mx-6 mt-8 xl:mt-2">
                               
                            <h1
                            className={`font-extrabold text-xl  px-4 lg:p-8 text-gray-600 text-center`
                        }
                           // style={{color:"#69696D"}}
                            >{edu.title.toUpperCase() }</h1>
                            </div>
                            <p className="mx-8 my-10 mt-4 leading-5 text-gray-500">
                        {edu.text}
                        <br />
                        <div className="text-violet-600 mt-4 py-2 inline-block cursor-pointer hover:text-violet-700"
                        onClick={
                            ()=>{
                                window.open(edu.link, '_blank')
                            }
                        }
                        >
                        KNOW MORE
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-2"></div>
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                        <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                        </div>
                        
                        </p>
                       
                       
                        
                    </div>
                   
                    </div>
                ))
            } 
            
            </div> 
           
            </section> </div> 
            {/* PHONE SECTION */}

            <section className="block lg:hidden mx-10">
              
   
             
                          
                      {
                          educationList.map(edu=>(
                              <div>
                              
                              <div className="w-full my-4 pb-2 mx-3  bg-white component-container"
                                  
                              key={educationList.indexOf(edu)}
                              data-aos="fade-up"
                              data-aos-delay={educationList.indexOf(edu)*50}
                              >
                                  <div className="relative">
          
                                  
                                  <div
                                  className=" h-72"
                                  style={
                                     {
                                  backgroundImage:`url('/assets/img/components/${edu.img}')`,
                                  backgroundSize:"cover",
                                  }
                                     }
                                  >
                                      </div>
                                      <section className="absolute w-full flex justify-center"
                                      style={{ bottom:"-25px"}}
                                      >
                                      <div className=" bg-violet-600 rounded-full
                                         hover:bg-violet-700 flex justify-center items-center"
                                         style={{
                                             width:"56px",
                                             height:"56px",
                                            
                                         }}
                                         > 
                                         <h1 className="font-bold text-white text-2xl">{
                                             educationList.indexOf(edu)+1
                                             }</h1></div></section>
                                      </div>
                                      
          
                                      <div className=" mx-6 mt-8 xl:mt-2">
                                         
                                      <h1
                                      className={`font-extrabold text-xl  px-4 lg:p-8 text-gray-600 text-center`
                                  }
                                     // style={{color:"#69696D"}}
                                      >{edu.title.toUpperCase() }</h1>
                                      </div>
                                      <p className="mx-8 my-10 mt-4 leading-5 text-gray-500">
                                  {edu.text}
                                  <br />
                                  <div className="text-violet-600 mt-4 py-2 inline-block cursor-pointer hover:text-violet-700"
                                  onClick={
                                      ()=>{
                                          window.open(edu.link, '_blank')
                                      }
                                  }
                                  >
                                  KNOW MORE
                                  <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-2"></div>
                                  <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                                  <div className="bg-violet-600 rounded-full h-2 w-2 inline-block ml-1"></div>
                                  </div>
                                  
                                  </p>
                                 
                                 
                                  
                              </div>
                             
                              </div>
                          ))
                      } 
                      
                     
                     
                      </section>




           
        </div>
    );
}
 
export default Education;