import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './RenderField';

const AsyncValidationForm = props => {
    const { handleSubmit} = props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
      
      </form>
    );
  };
  
  export default reduxForm({
    form: 'asyncValidation', // a unique identifier for this form
    validate
  })(AsyncValidationForm);