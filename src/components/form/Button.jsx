const Button = ({
  type = "submit",
  text = "Submit",
}) => {
  return (
    <div className="form-control mt-6">
      <button
        type={type}
        className="btn btn-primary"
        >
        {text}
      </button>
    </div>
  );
};

export default Button;
