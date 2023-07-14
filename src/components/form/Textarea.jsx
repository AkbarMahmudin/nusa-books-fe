const Textarea = ({
  placeholder = "Placeholder",
  label = "Label",
  name = label.toLowerCase() ?? "",
  defaultValue = "",
  onChange = () => {},
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
};

export default Textarea;
