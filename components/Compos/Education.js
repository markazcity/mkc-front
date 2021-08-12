const Education = () => {
    const educationList = [
        {"year":"2010", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2011", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2012", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2013", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2014", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2015", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2016", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
        {"year":"2017", "text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut", "img":""},
    ];
    const colorChange = [0,3,4,7]
    return (
        <div  style={{ backgroundColor: "#F8FAF8" }}  className="pb-20">
            <h1 className="text-5xl font-extrabold mb-5 text-center pt-10"
                style={{
                    color: "#69696D",
                }}
                data-aos="zoom-in"
                >EDUCATION</h1>
                {/* LISTS STARTS HERE */}
                <div className="grid lg:grid-cols-2 lg:mx-64">
            {
                educationList.map(edu=>(
                    <div className="m-0" key={edu.year}
                    data-aos="fade-up"
                    data-aos-delay={educationList.indexOf(edu)*100}
                    >
                        <div
                        className="relative p-10"
                        style={
                            colorChange.includes(educationList.indexOf(edu))?
                            {backgroundColor:"#B6B8A7"}:
                            {backgroundColor:"#B8B992"}}
                        >
                            <h1
                            className="text-center text-white font-extrabold text-2xl"
                            style={{color:"#69696D"}}
                            >CULTURAL CENTRE</h1>
                            <p className="text-center m-6 leading-5 text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Fuga optio deleniti corrupti neque porro corporis, suscipit ipsam consectetur 
                         facilis esse natus eveniet quod hic ullam. Sapiente, reiciendis reprehenderit 
                         enim perferendis, corporis nostrum ducimus harum aliquid illum dolore 
                         accusantium officiis laudantium quidem quae nulla fugit ullam ut porro et 
                         cum deserunt inventore accusamus itaque? Inventore cupiditate temporibus 
                         veniam blanditiis officia cumque mollitia magni nesciunt.  
                        </p>
                        </div>
                        
                    </div>
                ))
            } </div>
        </div>
    );
}
 
export default Education;