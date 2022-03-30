const RightButton = ({onClick, text}) => {
    return (
        <div className="flex justify-end px-1 py-3">
<button
className="bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded text-white"
onClick={onClick}
>{text??'Update'}</button>
</div>
    );
}
 
export default RightButton;