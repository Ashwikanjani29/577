// import React from 'react'
// import {buyCake} from './cakeAction'
// import {connect} from 'react-redux';

// const CakeContainer = (props) => {
//     console.log(props)
//   return (
//     <div>CakeContainer</div>
//   )
// }
// const mapStateToProps=state=>{
//     return{
//         totalCakes:state.numOfCake
//     }
// }
// const mapDispatchToProps=dispatch=>{
//     return{
//         xyz:()=>dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)


import React from 'react'
import { buyCake } from '../redux/cake/cakeAction';
import{useDispatch,useSelector} from 'react-redux';

export const CakeContainer = () => {
    let numOfCake = useSelector(state=>state.numOfCake);
    // console.log(numOfCake);

    let dispatch=useDispatch();

  return (
    <div>
        <h1>num of cakes in bakery:{numOfCake}</h1>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>

    </div>
  )
}
export default CakeContainer;