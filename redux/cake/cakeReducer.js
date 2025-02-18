import {Buy_Cake} from './cakeType';
const cakeState={
    numOfCake:10
}
const cakeReducer=(state=cakeState , action)=>{
    switch (action.type) {
        case Buy_Cake:
            return{
                numOfCake:state.numOfCake-1
            }
            break;
        default:return state
            break;
    }
}
export default cakeReducer;