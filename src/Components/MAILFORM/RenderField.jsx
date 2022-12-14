const renderField = (
    { input, label, type, meta: { asyncValidating, touched, error } },
  ) => (
    <div>
      <label>{label}</label>
      <div >
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
export default renderField;