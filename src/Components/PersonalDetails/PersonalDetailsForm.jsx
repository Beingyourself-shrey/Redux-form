import InputBox from '../Controls/InputBox'
import { Field, reduxForm } from "redux-form";
import {css} from 'aphrodite'
import Style from '../Component'
import validate from './Validate'
let submittingFn=(e)=>{
    console.log('values',e);
}
let  PersonalDetailsForm=(props)=> {
    const { handleSubmit } = props;
    return ( 
        <div>
           { console.log(props)}
            <form onSubmit={handleSubmit(submittingFn)}>
                <Field 
                name="name"
                label='Enter Name'
                component={InputBox}
                type="text"
                className={css(Style.input)}
                />
                <Field 
                name="password"
                label="Enter Password"
                component={InputBox}
                className={css(Style.input)}
                type="password"
                />
                <Field 
                name='email'
                label="Enter Email"
                component={InputBox}
                className={css(Style.input)}
                type="email"
                />
                <button style={{border:'none',background:'rbg(144,244,24)'}} type="submit">Submit</button>

            </form>
        </div>
     );
}

PersonalDetailsForm = reduxForm({
    form:'MY_PERSONAL_FORM',
    validate
})(PersonalDetailsForm)

export default PersonalDetailsForm;