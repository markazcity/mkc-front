import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import { useEffect, useState } from 'react';

SwiperCore.use([Pagination]);

const Education = () => {
    const cc = 
        {"title":"Cultural Centre", 
        "text":"It is one of the biggest cultural centres in India. The amenities included a spiritual enclave, library and research centre, and heritage centre. The unique architectural format of the Cultural Centre has been inspired by the classical Indo, Persian, Ottoman, and colonial traditions. This rotunda model complex represents Markaz Knowledge City’s values and vision for a world of tomorrow. ", 
        "img":"cc.jpg"};
    
    const educationList = [
        
        
        {"title":"World Institute for Research in Advanced Sciences (WIRAS)", 
        "text":"World Institute for Research in Advanced Sciences (WIRAS) is an institute for higher education in Islamic studies. WIRAS is committed to equipping young scholars in the field of Islamic law, theology, mysticism, medicine, and various other Islamic sciences. Along with promoting advanced studies in classical Islamic sciences, it also focuses on producing original researches in the larger domain of contemporary Islamic studies as well as on issues regarding Muslim societies in the modern world.", 
        "img":"wiras.jpg"},

        {"title":"Markaz Unani Medical College (MUMC)", 
        "text":"To ensure more secured habitual health culture, we started the first Unani medical college in Kerala. It aims to produce highly qualified medical professionals capable of strengthening the health infrastructure by providing more medical facilities. MUMC offers a well-crafted synthesis of theory-practice learning atmosphere with sophisticated infrastructure, technically advanced learning spaces, and practice-oriented curriculum for better educational experiences. ", 
        "img":"unani.jpg"},
        {"title":"Markaz Law College (MLC)", 
        "text":"Markaz Law College (MLC) is envisioned to prepare a legal generation committed to protect and revive the constitution of India. MLC provides 5-year integrated law course and 3-year LLB programme with various specializations at undergraduate level, and two LLM programmes are offered at post-graduate level. Rather than being a mere centre for legal learning, MLC also functions as a unique space for advanced research in legal studies. ", 
        "img":"law.jpg"},
        {"title":"Malaibar Foundation for Research and Development (MFRD)", 
        "text":"As part of its journey towards bringing innovation and development in the educational sector, Markaz Knowledge City formed Malaibar Foundation for Research and Development (MFRD) as a platform for clubbing experts in the proposed area for more creative dialogues and discussions. MFRD intends to fulfill the aim of advanced research followed by the production of new knowledge in the fields of arts, science, managements, technology, and literature.    ", 
        "img":"malaibar.jpg"},
        {"title":"Queensland", 
        "text":"Queensland is a multidisciplinary hub for women’s education, employment, and entrepreneurship. It consists of a wellness centre, studio for Quranic learning, an exclusive campus for Sharia studies, technical skill development academy, residence for professional students, digital library, and indoor sports stadium. Queensland offers higher secondary and undergraduate courses in integrated Islamic sciences under various steams of humanities, commerce, and science. ", 
        "img":"queensland.jpg"},
    {"title":"Alif Global School (AGS)",
        "text":"Alif Global School provides the K-12 education with international standards. By integrating local, national, and international curriculums together, AGS strives to draw a new map in the educational sector with more glocal advancements. Along with offering the finest curriculums of CBSE and IGCSE, it has ensured to set up a good habitus for better learning outcomes from the students. Thus AGS has technically full equipped smart classrooms, climate regulation facilities, creative circles, homely residences, and outdoor inventory spaces. ",
        "img":"alif.jpg"
    }   ,
    {"title":"Hillsinai",
        "text":"To produce more qualified leaders and skilled human resources, we set up a center of excellence named Hillsinai. Its curriculum is designed to equip higher secondary level students with many interdisciplinary programmes including communicative skill development programme, civil service coaching, martial arts, photography, social work, TED talks, study excursions, and media and journalism, along with providing higher secondary education in commerce and humanities. ",
        "img":"hillsinai.jpg"
    }   ,
    {"title":"MeeM",
        "text":"MeeM is the virtual platform of Markaz Knowledge City developed as part of its mission for global education. Through this, thousands of active learners from across the world are able to pursue primary to advanced level education in various disciplines. It is supported with highly qualified technical professionals and subject experts from all fields of study. MeeM is also moving ahead to achieve its unique goal of erasing the boundaries of nations for the universal dissemination of knowledge and shared human values.",
        "img":"meem.jpg"
    }   ,
    {"title":"Habitus: The Life School",
        "text":"To empower the youth with more advanced skills in their professions, Markaz Knowledge City started a finishing school under the tittle ‘Habitus’. Through providing different short-term and long-term courses, workshops, and consultations, Habitus looks to empower the youth who in turn can build their own career with individual growth and collective support. The facilitators in Habitus include experts in different industries and academics from different parts of the world. ",
        "img":"habitus.jpg"
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

    useEffect(()=>{
        var screenSize = window.matchMedia("(min-width: 768px)")
matchSlideCount(screenSize)
screenSize.addListener(matchSlideCount)
    }, []);  
    const colorChange = [0,3,4,7, 8]
    return (
        <div  style={{ backgroundColor: "#F8FAF8" }}  className="pb-8 py-5">

<section className="grid lg:grid-cols-2 mx-10 lg:mx-64 bg-white component-container">
    <div
    className="m-6 order-2 lg:order-1"
    > <h1
    className="font-extrabold text-xl text-gray-600"
    >{cc.title.toUpperCase()}</h1>
    <p>{cc.text}</p>
    </div>
    <div className="h-72 lg:ml-6 order-1 lg:order-2"
    style={{
        background:"url('/assets/img/components/cc.jpg')",
        backgroundPosition:"center",
        backgroundSize:"cover"
    }}
    >
       
    </div>
</section>





            <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center pt-10"
                style={{
                    color: "#69696D",
                }}
                data-aos="zoom-in"
                >EDUCATION</h1>
                {/* LISTS STARTS HERE */}<div className="flex mx-10 lg:mx-64">
                <Swiper
    //   spaceBetween={50}
    pagination={{
        "dynamicBullets": true
      }}
      slidesPerView={isPhone?1:2}
      className="flex items-stretch"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
                
            {
                educationList.map(edu=>(
                    <SwiperSlide className="mb-4">
                    <div className="my-4 pb-4 mx-3  bg-white component-container "
                        
                    key={educationList.indexOf(edu)}
                    data-aos="fade-up"
                    data-aos-delay={educationList.indexOf(edu)*50}
                    >
                        <div
                        className="relative   lg:mx-0 lg:my-0 h-64"
                        style={
                           {
                        backgroundImage:`url('/assets/img/components/${edu.img}')`,
                        backgroundSize:"cover",
                        }
                           }
                        >
                            </div>

                            <div className="flex items-center mx-6 mt-8 xl:mt-2">
                                <img src="/icon.png" width="80px" alt="" />
                            <h1
                            className={`font-extrabold text-xl  px-4 lg:p-8 text-gray-600`
                        }
                           // style={{color:"#69696D"}}
                            >{edu.title.toUpperCase() }</h1>
                            </div>
                            <p className="mx-8 my-10 mt-4 leading-5 text-gray-500">
                        {edu.text}
                        </p>
                       
                       
                        
                    </div></SwiperSlide>
                ))
            }  </Swiper></div>
        </div>
    );
}
 
export default Education;