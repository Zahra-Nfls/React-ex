// import React from "react";


// export default function Counter() {
// const [count, setCount] = React.useState(0);

// const btn = {
//     backgroundColor: 'pink',
//     color: 'black',
//     fontSize: 20,
//     padding: 10,
//     borderRadius: 5,
//     cursor: 'pointer',
//     boxShadow: '0 0 5px rgba(0,0,0,0.2)',
//     transition: 'background-color 0.3s ease',
//     float: 'right',
//     marginBottom: 20,
//     textTransform: 'capitalize'
// }
// const p = {
//     fontSize: 80,
//     color: 'pink',
//     margin: 0,
//     padding: 0,
//     textAlign: 'center'
// }

// const increment = () => {
//     // in i wanted to increment count by 2 :
// //Uses the current state to calculate the next state;
// //set functions do not trigger un updated state changes.
// //React batches together state updates for performance reasons.
// //NEXT state becomes the CURRENT state after an update cycle.
// // can use c or prevCount.
//     setCount(c => c + 1);
//     setCount(c => c + 1);
//     // update use it instead of (count + 1) good practice for more complex updates.
//     //we take the Pending state (c) and use it to calculate the next state.
//     //React put your update function in a queue (waiting in line) and then applies them in the next render cycle.
//     //during next render cycle, it will call them in the same order.
// }

// const decrement = () => {
//     // setCount(count - 1)
//     setCount(c => c - 1);
//     setCount(c => c - 1);
//     setCount(c => c - 1);
// }

// const reset = () => {
//     setCount(0)
// }



//     return (
//         <>
//         <div className="counterContainer">
//             <p style={p}>{count}</p>
//             <button style={btn} onClick={increment}>increment</button>
//             <button style={btn} onClick={reset}>reset</button>
//             <button style={btn} onClick={decrement}>decrement</button>
//         </div>
//         </>
//     );
// }



// // TEORIA
// // React hook = Special function that allows functional components
// //                         to use React features without writing class components 
// //                         (useState, useEffect, useContext, useReducer, and more...)                

// // useState() = A React hook that allows the creation of a stateful variable
// //                       AND a setter function to update its value in the Virtual DOM.
// //                       [name, setName]


// // updater function = A function passed as an argument to setState() usually
// //                      ex setYear(arrow function = y => y + 1)
// //                                  Allow for safe updates based on the previous state
// //                                  Used with multiple state updates and asynchronous functions
// //                                  Good practice to use updater functions
