const MenuItem = ({ name, index, onClick }) => {
  return (
    <h2
      className="px-8 font-bold my-2 rounded text-white cursor-pointer menu-item"
      data-aos="zoom-in-right"
      data-aos-delay={(index + 1) * 150}
      onClick={onClick}
    >
      {name.toUpperCase()}
    </h2>
  );
};

export default MenuItem;
