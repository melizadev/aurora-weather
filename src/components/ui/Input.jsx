const Input = ({ ...props }) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className="p-3 rounded-xl w-full bg-white/80 text-neutral-800 
      font-medium shadow focus:ring-2 focus:ring-blue-400 outline-none"
    />
  );
};

export default Input;
