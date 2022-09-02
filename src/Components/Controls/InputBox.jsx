const InputBox=(props)=> {
   console.log(props);
   const {input,type,label,name,meta} = props
    return ( 
        <div>
            <label id={name}>{label}</label>
            <input type={type}  placeholder={label}  id={name}  className={props.className} {...input}/>
            {meta.touched && meta.error && <div>There is an Error</div>}
        </div>
     );
}

export default InputBox;