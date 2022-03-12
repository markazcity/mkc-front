
const CC = (props) => {

    const cc_off = 
    {"wc_title":"Cultural Centre", 
    "wc_body":"The unique architectural format of the Cultural Centre has been inspired by the classical Indo, Persian, Saracenic, and Colonial traditions. It is one of the biggest cultural centres in India. The amenities included a spiritual enclave, library and research centre, and heritage centre. This rotunda model complex represents Markaz Knowledge City’s values and vision for a world of tomorrow. Its includes a Spiritual Enclave, Library and Research Centre, Residential Scholars Dormitory and Souk.", 
    "img":"cc.jpg"};

    const cc = props.dataset!=null?props.dataset[0]:cc_off;
    return (
        <section className="lg:w-5/12 p-10  lg:mx-20 bg-transparent xl:my-28 ">
    <div
    className="w-full flex justify-center m-6 order-2 lg:order-1"
    > 
<div>
<h1
    className="font-extrabold text-xl xl:text-3xl text-black"
data-aos="fade-up"
data-aos-delay="800"

    >{cc.wc_title.toUpperCase()}</h1>
    <p className="text-black"
    data-aos="fade-up"
    data-aos-delay="1000"
    >{cc.wc_body}</p>
</div>

    </div>
    
</section>
    );
}
 
export default CC;