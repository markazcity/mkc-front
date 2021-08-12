const Commerce = () => {
    const commerceItems = [
        {"text":""},
        {"text":""},
        {"text":""},
        {"text":""},
    ];
    return (
        
        <div  data-aos="fade-up-right"
        className="py-10"
        style={{
            backgroundColor:"#F8F9E9"
        }}
      >
             <h1 className="text-5xl font-extrabold mb-5 text-center"
                style={{
                    color: "#B279B4",
                }}
                data-aos="zoom-in"
                >COMMERCE</h1>
                <br />
                <p className="mx-10 lg:mx-80 text-justify lg:text-center mb-10"
                data-aos="fade-right">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
laoreet dolore magna aliquam erat volutpat.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
laoreet dolore magna aliquam erat volutpat.    </p>
<div className="grid lg:grid-cols-4 lg:gap-x-1 lg:mx-64 mx-10">
{
    commerceItems.map(commerce=>(
        <div 
        key={commerce.text}
        className="h-80 my-4"
        style={
            commerceItems.indexOf(commerce)%2==0?
            {background:"#BCC61E"}:
            {background:"#A0A57C"}
            }
            data-aos="fade-up-right"
            data-aos-delay={commerceItems.indexOf(commerce)*50}
            >
            
        </div>
    ))
}
</div>
        </div>
    );
}
 
export default Commerce;