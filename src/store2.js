// import { createStore } from "redux";
// const initialState ={
    // balance: 0,
   /* loan: 0,
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
        return {...state, loan:action.payload.amount,loanpurpose:action.payload.purpose,balance: state.balance+action.payload.amount}

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
console.log('After Loan:',store.getState())
store.dispatch({
    type:'PAY_LOAN',
   

})
console.log('Loan Paid:',store.getState());


console.log(store.getState());

function deposit(amount){
    return({
        type:'DEPOSIT',
        payload: amount
    
    })

}

store.dispatch(deposit(800))
console.log('After Deposit:', store.getState())


function withdraw(amount){
    return({
        type:'WITHDRAW',
        payload: amount
    
    })

}
case "REQUEST_LOAN":
    if(state.loan>0)return state;
return {...state, loan:action.payload.amount,loanpurpose:action.payload.purpose,balance: state.balance+action.payload.amount}
store.dispatch(withdraw(500))
console.log('After withdraw:', store.getState())


function payloan(amount){
    return({
        type:'PAY_LOAN',
        loan:0,
        loanpurpose:"",
        balance: state.balance-state.loan,
    
    })

}

case "PAY_LOAN":
    return {...state, loan:0,loanpurpose:"",balance: state.balance-state.loan}
store.dispatch({
    type:'REQUEST_LOAN',
    payload: {AMOUNT:1000,PURPOSE:'bUY A CHEAP CAR'}

})
store.dispatch(requestloan(1000,'bUY A CHEAP CAR' ))
console.log('After withdraw:', store.getState())*/