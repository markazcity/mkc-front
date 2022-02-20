const Blob = ({color}) => {
    return (
        <div
        >
            <div className="blob">vv</div>
            <svg 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            >
  <path fill={color??"#6D7975"} 
  d="M26.5,-19C30.2,-8.9,26.2,2,20.5,5.5C14.8,9.1,7.4,5.3,-3.3,7.2C-14,9.1,-28,16.7,-38.1,10.6C-48.2,4.5,-54.3,-15.2,-47.3,-27.2C-40.3,-39.2,-20.2,-43.4,-4.4,-40.9C11.4,-38.4,22.8,-29,26.5,-19Z" 
  transform="translate(100 100)" />
</svg>

        </div>
    );
}
 
export default Blob;