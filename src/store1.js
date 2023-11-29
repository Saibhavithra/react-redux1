import { createStore } from "redux";
const initialState ={
    balance: 0,
    loan: 0,
    loanPurpose:""
}


function reducer(state=initialState, action) {
    alert('hello');
    switch (action.type){
    case "DEPOSIT":
        return {...state, balance: state.balance+action.payload}
    
    case "WITHDRAW":
        return {...state, balance: state.balance-action.payload}

        case "REQUEST_LOAN":
            if(state.loan>0)return state;
        return {...state, loan:action.payload.amount,loanpurpose:"",balance: state.balance-state.loan}

        case "PAY_LOAN":
            return {...state, loan:0,loanpurpose:"",balance: state.balance-state.loan}
    
    default:
        return state;

    }
}

const store = createStore (reducer)
store.dispatch({
    type:'DEPOSIT',
    payload: 500

})
console.log(store.getState());

store.dispatch({
    type:'WITHDRAW',
    payload: 500

})

store.dispatch({
    type:'WITHDRAW',
    payload: 500

})

store.dispatch({
    type:'REQUEST_LOAN',
    payload: {AMOUNT:1000,PURPOSE:'bUY A CHEAP CAR'}

})

store.dispatch({
    type:'PAY_LOAN',
   

})


console.log(store.getState());

