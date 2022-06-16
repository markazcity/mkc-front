const LifeOfMKC = () => {
  const items = [
    {
      title: <div>Education </div>,
      img: "education.jpg",
    },
    {
      title: <div>Health</div>,
      img: "environment.jpg",
    },
    {
      title: <div> Living</div>,
      img: "entrepreneurship.jpg",
    },
    {
      title: <div>Commerce</div>,
      img: "traditional.jpg",
    },
    {
      title: <div>Agriculture</div>,
      img: "environment.jpg",
    },
  ];
  return (
    <div
      //style={{backgroundColor: "#F8F9E9"}}
      className=""
    >
      <div className="px-10 xl:px-96">
        {/* <h2 className="font-semibold py-2 text-3xl text-gray-600">THE LIFE OF MKC</h2> */}
      </div>
      <div className="grid md:grid-cols-6 xl:grid-cols-10 ">
        {items.map((item) => (
          <div
            className="lifeHover lifeItem w-full col-span-2 "
            style={{
              background: `url(/assets/img/life/${item.img})`,
              backgroundSize: "cover",
            }}
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={(items.indexOf(item) + 1) * 200}
          >
            <div className="h-full w-full px-16 py-20  bg-black bg-opacity-70 hover:bg-opacity-40 transition-all duration-300">
              <span className="lifeText text-white font-extrabold lg:text-3xl text-2xl ">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeOfMKC;
