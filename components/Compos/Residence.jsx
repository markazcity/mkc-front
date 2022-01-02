const Residence = () => {
    return (<div
    className="flex justify-center items-center"
    style={{
    minHeight: '400px',
background:"url(/assets/img/residence.jpg)",
    backgroundPosition:"center",
    backgroundSize:"cover"
}}
    >
      <div>
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 text-center pt-10"
                style={{
                    color: "#FFF",
                }}
                data-aos="zoom-in"
                >LIVING</h1>
                <p className="text-white px-12 pb-10 lg:px-72 text-justify lg:text-center"
                 data-aos="fade-left"
                >
                Taiba Garden is a twenty acres residence space of lush greenery and joyous leisure. 
                Of the large eco-friendly space, less is occupied by residential apartments and the rest of the whole area 
                stand green with beauty. The beautiful and serene interiors can make the residents feel at home. 
                Spacious living space, balconies that are open to the bosom of Mother Nature, and passages that ease 
                our day-to-day activities all make the residents spellbound. The luxurious amenities like club house,
                 swimming pool, multi-gym, library, conference hall, and playgrounds make the place much accessible to
                  people from all walks of life.
                </p>
      </div>
    </div>);
}
 
export default Residence;