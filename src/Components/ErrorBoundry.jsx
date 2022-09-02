import React from "react";

class ErrorBoundry extends React.Component {
    state = {  
        hasError:false,
    } 
    componentDidCatch(error){
        this.setState({hasError:true})
    }
    render() { 
       if(this.state.hasError){
           return <div>Something Went Wrong!</div>
       }
       else{
           return this.props.children
       }
    }
}
 
export default ErrorBoundry;