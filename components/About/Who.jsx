const WhoAreWe = ({dataset}) => {

const data = dataset[0];

    return data!=null?( 
    <div id="who">
    <section className="flex flex-col justify-center lg:text-center pt-20 lg:pt-16">
        <h1
          className="text-3xl lg:text-5xl font-extrabold mb-5 text-center"
          style={{color: "#61696E",}}
          data-aos="zoom-in">
          {data.wc_title}
        </h1>
        <p className="mx-10 lg:mx-64 text-left lg:text-center mb-10" data-aos="fade-up-right">
<span dangerouslySetInnerHTML={{__html: data.wc_body}}></span>
</p>

      </section></div>):(
        <span></span>
      );
}
 
export default WhoAreWe;