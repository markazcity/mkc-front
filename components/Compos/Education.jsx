

import {ROOT_URL} from '@/inc/Const'
import { useState } from 'react';
import VideoModal from '@/components/Utils/VideoModal'
import {AiOutlinePlayCircle} from 'react-icons/ai'

const Education = (props) => {
   
    const smallRound = "bg-violet-600 rounded-full h-2 w-2 inline-block ml-2";
    const educationList = [
        
        {"wc_title":"Markaz Medical College", 
        "wc_body":"To ensure more secured habitual health culture, we started the first Unani medical college in Kerala. It aims to produce highly qualified medical professionals capable of strengthening the health infrastructure by providing more medical facilities. Markaz Medical College offers a well-crafted synthesis of theory-practice learning atmosphere with sophisticated infrastructure, technically advanced learning spaces, and practice-oriented curriculum for better educational experiences. ", 
        "wc_image":"unani.jpg",
    "wc_link":"http://markazunanimedicalcollege.org/"},
        {"wc_title":"Markaz Law College", 
        "wc_body":"Markaz Law College is envisioned to prepare a legal generation committed to protect and revive the constitution of India by ensuring justice and equality for all. Markaz Law College provides 5-year integrated law and management course and 3-year LLB programme with various specializations at undergraduate level, and two LLM programmes specialized in Constitutional and Commercial law are offered at post-graduate level. Additionally, being a mere centre for legal learning, Markaz Law College also functions as a unique space for advanced research in legal studies.", 
        "wc_image":"law.jpg",
    "wc_link":"http://www.markazlawcollege.com/"},
    {"wc_title":"AIMER",
    "wc_body":"Avaan Institute of Management Education and Research is a business school with an impact located in Markaz Knowledge City. It’s a locus where great minds, visionaries, and young talents come together to develop businesses and come up with region-specific solutions to management problems.  ",
    "wc_image":"aimer.jpg",
    "wc_link":"https://avaan.in"
}  ,
        {"wc_title":"WIRAS", 
        "wc_body":"WIRAS – World Institute for Research in Advanced Sciences – is an institute for higher education in Islamic studies. WIRAS is committed to equipping young scholars in the field of Islamic law, theology, mysticism, medicine, and various other Islamic sciences. Along with promoting advanced studies in classical Islamic sciences, it also focuses on producing original researches in the larger domain of contemporary Islamic studies as well as on issues regarding Muslim societies in the modern world. ", 
        "wc_image":"wiras.jpg",
    "wc_link":"http://wiras.in/"},
    {"wc_title":"Hillsinai",
    "wc_body":"To produce more qualified leaders and skilled human resources, we set up a center of excellence named Hillsinai. Its curriculum is designed to equip higher secondary level students with many interdisciplinary programmes including communicative skill development programme, civil service coaching, martial arts, photography, social work, TED talks, study excursions, and media and journalism, along with providing higher secondary education in commerce and humanities. ",
    "wc_image":"hillsinai.jpg",
    "wc_link":"http://www.hillsinai.com/"
}   ,
{"wc_title":"Habitus",
"wc_body":"To empower the youth with more advanced skills in their professions, Markaz Knowledge City started a finishing school under the tittle ‘Habitus’. Through providing different short-term and long-term courses, workshops, and consultations, Habitus looks to empower the youth who in turn can build their own career with individual growth and collective support. The facilitators in Habitus include experts in different industries and academics from different parts of the world. ",
"wc_image":"habitus.jpg",
"wc_link":"http://www.habitusschool.in/"
}   ,
{"wc_title":"Alif Global School",
"wc_body":"Alif Global School provides the K-12 education with international standards. By integrating local, national, and international curriculums together, AGS strives to draw a new map in the educational sector with more glocal advancements. Along with offering the finest curriculums of CBSE and IGCSE, it has ensured to set up a good habitus for better learning outcomes from the students. Thus AGS has technically full equipped smart classrooms, climate regulation facilities, creative circles, homely residences, and outdoor inventory spaces. ",
"wc_image":"alif.jpg",
"wc_link":"https://alifglobalschool.com/"
}   ,
        {"wc_title":"Malaibar Foundation", 
        "wc_body":"As part of its journey towards bringing innovation and development in the educational sector, Markaz Knowledge City formed Malaibar Foundation for Research and Development as a platform for clubbing experts in the proposed area for more creative dialogues and discussions. Malaibar Foundation intends to fulfill the aim of advanced research followed by the production of new knowledge in the fields of arts, science, managements, technology, and literature.", 
        "wc_image":"malaibar.jpg",
    "wc_link":"https://malaibar.org/"},
        {"wc_title":"Queensland", 
        "wc_body":"Queensland is a multidisciplinary hub for women empowerment programmes in the fields of education, employment, and entrepreneurship. It consists of a wellness centre, studio for Quranic learning, an exclusive campus for Sharia studies, technical skill development academy, residence for professional students, digital library, and indoor sports stadium. Queensland offers higher secondary and undergraduate courses in integrated Islamic sciences under various streams of humanities, commerce, and science.", 
        "wc_image":"queensland.jpg",
    "wc_link":"https://markazqueensland.com/"},
    {"wc_title":"MeeM",
        "wc_body":"MeeM is the virtual platform of Markaz Knowledge City developed as part of its mission for global education. Through this, thousands of active learners from across the world are able to pursue primary to advanced level education in various disciplines. It is supported with highly qualified technical professionals and subject experts from all fields of study. MeeM is also moving ahead to achieve its unique goal of erasing the boundaries of nations for the universal dissemination of knowledge and shared human values.",
        "wc_image":"meem.jpg",
        "wc_link":"https://meemacademia.com/"
    }   ,
   
    {"wc_title":"College of Nursing",
        "wc_body":"As part of creating good medical professionals in the field of Nursing activities, we create a brand of trust and truth. Our nursing college would be at the forefront of delivering qualified experts for various medical fields. The project includes academics and field professionals in the various health sectors.",
        "wc_image":"nursing.jpg",
        "wc_link":""
    }   ,
    {"wc_title":"College of Pharmacy",
        "wc_body":"For nurturing the best professionals in the field of pharmaceuticals, we begin a centre for the study. We aim to build a better generation who has the professional capacity as well research capacity. The team of the project includes experts in different fields of knowledge and experience.",
        "wc_image":"pharmacy.jpg",
        "wc_link":""
    }   ,
   

    ];
 
    const [videoLink, setVideoLink] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div  className="education-section pb-8 py-5">

            <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center pt-10"
                style={{
                    color: "#69696D",
                }}
                data-aos="zoom-in"
                >EDUCATION</h1>
           


            <section className="grid md:grid-cols-2 xl:grid-cols-3 mx-10 lg:mx-32 3xl:mx-64">

                      {
                          props.dataset.map((edu,index)=>(
                              
                              
                              <div className="w-full h-auto my-4 pb-2 mx-3  bg-white component-container"
                                  
                              key={index}
                              data-aos="fade-up"
                              data-aos-delay={index*50}
                              id={`${edu.wc_id}`}
                              onMouseOver={()=>{
                           
                                if(edu.wc_video!=null && edu.wc_video.length>8){
                                    document.getElementById(`icon${index}`).classList.add('animate-back');
                                    document.getElementById(`index${index}`).classList.add('animate-down');
                                }                                    

                              }}
                              onMouseOut={()=>{
                                document.getElementById(`icon${index}`).classList.remove('animate-back');
                                document.getElementById(`index${index}`).classList.remove('animate-down');
                                document.getElementById(`index${index}`).classList.add('anim-fade');
                            }}
                              >
                                  <div className="relative">
          
                                  
                                  <div
                                  className=" h-72"
                                  style={
                                     {
                                  backgroundImage:`url('${ROOT_URL}webContents/uploads/${edu.wc_image}')`,
                                  backgroundSize:"cover",
                                  }
                                     }
                                  >
                                      </div>
                                      <section className="absolute w-full flex justify-center"
                                      style={{ bottom:"-25px"}}
                                      >
                                      <div className=" relative bg-violet-600  rounded-full
                                         hover:bg-violet-700 flex justify-center items-center cursor-pointer overflow-hidden"
                                         style={{
                                             width:"56px",
                                             height:"56px",
                                            
                                         }}
                                         onClick={()=>{
                                             if(edu.wc_video!=null && edu.wc_video.length>5){
                                                setVideoLink(ROOT_URL+"webContents/uploads/"+edu.wc_video);
                                             }
                                         }}
                                         > 
                                         {/* <span className="inline-block" id={`icon${index}`}>
                                         {hoverIndex==index?(
                                         <AiOutlinePlayCircle className="text-white text-2xl"/>
                                         ):(<h1 className="font-bold text-red-600 text-2xl">{index+1}</h1>)}
                                         </span> */}
                                        
                                         <AiOutlinePlayCircle className="absolute text-white text-2xl mb-28"  id={`icon${index}`} />

                                       <h1 className="absolute font-bold text-white text-2xl "  id={`index${index}`}>{index+1}</h1>
                                       
                                         

                                        </div></section>
                                      </div>
                                      
          
                                      <div className=" mx-6 mt-8 xl:mt-2">
                                         
                                      <h1
                                      className={
                                        edu.wc_title.length> 15?
                                        `font-extrabold text-xl  px-4 lg:py-8  text-gray-600 text-center`: 
                                        `font-extrabold text-xl  px-4 lg:p-8 text-gray-600 text-center`
                                  }
                                     // style={{color:"#69696D"}}
                                      >{edu.wc_title.toUpperCase() }</h1>
                                      </div>
                                      <p className="mx-8 my-10 mt-4 leading-5 text-gray-500 ">
                                     
                                     <div className="hidden lg:block">{edu.wc_body.substring(0,250)}...</div> 
                                     <div className="lg:hidden">{edu.wc_body}</div> 
                                  <br />
                                  <div className="know-more  mt-4 py-2 inline-block cursor-pointer"
                                  onClick={
                                      ()=>{
                                          window.open(edu.wc_link, '_blank')
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
                             
                              
                          ))
                      } 
                      
                     
                     
                      </section>


{
    videoLink!=null && videoLink.length>5?(<VideoModal
        link={videoLink}
        onClose={() =>setVideoLink(null)}
        />):(
        <></>
    )
}

           
        </div>
    );
}
 
export default Education;