import HomeParticle from '@/components/Utils/Particles';

const SecondSection = () => {
    return (
<div className="relative"
style={{background:"url('/assets/img/noise.png')",
}}
>
    <HomeParticle/>
    <div className="flex justify-center items-center px-10 lg:px-32 py-10 lg:py-32">
    <section className="text-center">
    <span className=" font-bold tracking-widest text-butter-600"
    data-aos="fade-right"
    data-aos-delay="400"
    >MARKAZ KNOWLEDGE CITY</span>
    <h2 className="font-semibold py-2 text-5xl text-white"
     data-aos="fade-right"
     data-aos-delay="550"
    >A CITY OF NEW DREAMS</h2>
    <p className="py-1 text-lg text-white mx-1 lg:mx-72"
     data-aos="fade-right"
     data-aos-delay="750"
    >
    Markaz Knowledge City is a vision of a new future. 
    It is a collective attempt of multiple actors - scholars, scientists, students, 
    and self-motivated representatives of new thoughts. Apart from being a distinctive space, 
    Markaz Knowledge City is also an idea of differences.
    </p>
    </section>
    </div>
    
</div>
    );
}
 
export default SecondSection;