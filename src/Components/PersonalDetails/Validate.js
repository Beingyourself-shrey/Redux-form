// const Validate=(values) =>{
//     const errors={};
//         if(!values.name)
//             errors.name="Enter Name Please"
//         if(!values.password)
//             errors.password="Enter Password Please"
//          if(!values.email)
//             errors.password="Enter Email Please"
        
//     return (      
//     errors
//      );
// }

// export default Validate;
const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    if(!values.email)
        errors.email="Enter Email Please"
            
    return errors
  }
  
  export default validate