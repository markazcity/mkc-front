const CC = () => {
    const cc = 
    {"title":"Cultural Centre", 
    "text":"It is one of the biggest cultural centres in India. The amenities included a spiritual enclave, library and research centre, and heritage centre. The unique architectural format of the Cultural Centre has been inspired by the classical Indo, Persian, Ottoman, and colonial traditions. This rotunda model complex represents Markaz Knowledge City’s values and vision for a world of tomorrow. ", 
    "img":"cc.jpg"};
    return (
        <section className="lg:w-5/12 p-10  lg:mx-64 bg-transparent xl:mt-40 ">
    <div
    className="w-full flex justify-center m-6 order-2 lg:order-1"
    > 
<div>
<h1
    className="font-extrabold text-xl xl:text-3xl text-white"
data-aos="fade-up"
data-aos-delay="800"

    >{cc.title.toUpperCase()}</h1>
    <p className="text-white"
    data-aos="fade-up"
    data-aos-delay="1000"
    >{cc.text}</p>
</div>

    </div>
    
</section>
    );
}
 
export default CC;