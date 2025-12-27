const Button = ({ ...props }) => {
  return (
    <button
      disabled={props.loading}
      className="bg-blue-600 hover:bg-blue-700 transition text-white 
      px-4 py-3 rounded-xl font-semibold shadow disabled:opacity-50"
    >
      {props.loading ? "Searching..." : "Search"}
    </button>
  );
};

export default Button;
