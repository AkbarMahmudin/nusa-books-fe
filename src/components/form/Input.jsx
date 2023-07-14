const Input = ({
  type = "text",
  placeholder = "placeholder",
  label = "label",
  value = "",
  name = label.toLowerCase() ?? "",
  onChange = () => {},
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered"
        defaultValue={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
