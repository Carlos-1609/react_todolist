const InputText = (props) => {
  return (
    <div className="">
      <input
        className="rounded  shadow-lg px-3 py-1 border border-gray-500"
        type="text"
        placeholder="Enter a Task Here"
        onChange={(e) => props.textInputHandler(e.target.value)}
      />
    </div>
  );
};
export default InputText;
