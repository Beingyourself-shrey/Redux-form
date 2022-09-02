import React from 'react'
import {connect} from 'react-redux'
import {BorrowingFunction,DepositingFunction } from '../Redux/Actions/Bank'
import { Store } from "../Redux/Store";
import PersonalDetailsForm from "../Components/PersonalDetails/PersonalDetailsForm";
import AsynValidateForm from './MAILFORM/AsynValidateForm';

class Home extends React.Component {
    decrementHandler=()=>{
     this.props.dispatch(BorrowingFunction())   
    }
    incrementHandler=()=>{
        this.props.dispatch(DepositingFunction())   
       }
    handle=(e)=>{
        e.preventDefault();
        console.log("Submitting",e);
    }
    render(){
        return ( 
        <div>
            {JSON.stringify(Store.getState())}
            <div>Home</div>
            <PersonalDetailsForm />
            <AsynValidateForm/>
            <button onClick={this.incrementHandler}>+</button>  {this.props.money}<button onClick={this.decrementHandler}>-</button>
        </div> 
        );

    }
}
const mapStToProp=(state)=>{
    return {
        counter: state.counter.count,
        money: state.bank.money
    }
}


export default connect(mapStToProp)(Home);