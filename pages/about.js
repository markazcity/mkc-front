import Logo from "../components/Logo";

const About = () => {
    return (
       
        // data-aos="zoom-out-up"
        <div style={{backgroundColor:"#F8FAF8"}} >
        <Logo logo="logob" className="absolute z-9 mb-10"/> 
            <div className="flex flex-col justify-center lg:text-center mt-20 lg:mt-40"   data-aos-delay="250">
                <h1 className="text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#61696E",
                }}
                >WHO ARE WE?</h1>
                <p
                className="mx-10 lg:mx-60 text-justify lg:text-center mb-20">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem totam molestiae ex sapiente ducimus deleniti ullam aliquid?
                 Tenetur ratione accusamus accusantium ducimus sequi iusto cum necessitatibus at voluptatem. Dolorum eum quae et pariatur, 
                 nostrum eos esse magnam quidem in voluptatum, repellendus quis saepe eaque itaque deserunt at alias. <br />
                 Amet eos beatae, incidunt pariatur facilis, laborum molestias dolor, quibusdam repudiandae inventore perferendis dolores
                 dicta hic quidem consequuntur doloremque exercitationem deleniti. Officiis obcaecati officia cum beatae ducimus repellat
                 consequuntur vero pariatur minima consequatur voluptatem ipsum culpa, dolore laudantium, facere aspernatur! 
                 Explicabo blanditiis et rerum, natus aliquam tempore at eos.
                </p>
               
           
        </div>
    </div>);
}
 
export default About;