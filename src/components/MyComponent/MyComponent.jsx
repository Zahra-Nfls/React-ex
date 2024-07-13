// // import React, { useState } from 'react';

// // export default function MyComponent() {
// //     // State variables
// // const [name, setName] = useState('');
// // const [quantity, setQuantity] = useState(1);
// // const [comment, setComment] = useState('');
// // const [payment, setPayment] = useState('Visa');
// // const [shipping, setShipping] = useState("Delivery");

// // const order = {
// //     border: "1px solid hsla(0, 0%,80%)",
// //     borderRadius:10,
// //     boxShadow:"5px 5px 5px  hsla(0, 0%,0%, 0.1)", 
// //     padding:20,
// //     margin:20,
// //     textAlign: 'center',
// //     display: 'inline-block',
// // }

// // const summary = {
// //     border: "1px solid hsla(0, 0%,80%)",
// //     borderRadius:10,
// //     boxShadow:"5px 5px 5px  hsla(0, 0%,0%, 0.1)", 
// //     padding:20,
// //     margin:20,
// //     textAlign: 'center',
// //     display: 'inline-block',
// // }

// // const orderContainer = {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     flexDirection: 'column',

// // }


// // //behavior

// // const nameChange = (e) => {
// //     setName(e.target.value);
// // }


// // const handleQuantityChange = (e) => {
// //     setQuantity(e.target.value);
// // }



// // const handleCommentChange = (e) => {
// //     setComment(e.target.value);
// // }


// // const handlePaymentChange = (e) => {
// //     setPayment(e.target.value);
// // }


// // const handleShippingChange = (e) => {
// //     setShipping(e.target.value);
// // }


// // //render
// //     return(
// //         <>
// //         <div style={orderContainer}>
// //         <section style={order}>
// //         <h2>Yummyyyy 🉐</h2>
// //         <p>Please enter a name for the order: <br /> <input value={name} onChange={nameChange}/></p>
        
        
// //         <p>Quantity: <br /> <input type="number" value={quantity} onChange={handleQuantityChange} /></p>
        
        
// //         <p>Do you have any special requirement? <br /> <textarea value={comment} onChange={handleCommentChange} placeholder='✍️'></textarea> </p>
        
        
// //         <p>Choose Payment method:   <br />    <select value={payment} onChange={handlePaymentChange}>
// //             <option value="Visa">Visa</option>
// //             <option value="Cash">Cash</option>
// //             <option value="MasterCard">MasterCard</option>
// //         </select></p>

        

// //         <label>
// //             <input type="radio" value="Pick Up"
// //             checked={shipping == "Pick Up"}
// //             onChange={handleShippingChange}/>
// //             Pick Up
// //         </label>
// //         <label>
// //             <input type="radio" value="Delivery"
// //             checked={shipping == "Delivery"}
// //             onChange={handleShippingChange}/>
// //             Delivery
// //         </label>
// //         </section>
// //         <section style={summary}>
// //         <h2>Summary:</h2>
// //         <p>Welcome {name}!</p>
// //         <p>Total: :&nbsp; <br />{quantity}</p>
// //         <p>Comment: :&nbsp; <br />{comment}</p>
// //         <p>Payment choice: :&nbsp; <br />{payment}</p>
// //         <p>Shipping: :&nbsp; <br />{shipping}</p>
// //         </section>
// //         </div>
// //         </>

// //     );
// // }
// // // onChange = Event handler used primarily with form elements.
// // //                       Triggers a function every time the value of the input changes.


// //"You can put objects and arrays into state. In React, state is considered read-only, so you should replace it rather than mutate your existing objects. For example, if you have a form object in state, don’t mutate it:"
// //  Treat any JavaScript object that you put into state as read-only


// //ex
// import React, { useState } from'react';
// export default function MyComponent() {
// const  [ restaurant, setRestaurant ] = useState({
//                                     name: 'The Mediterranean',
//                                     cuisine: 'French',
//                                     food: 'Pasta, Risotto, Bolognese',
//                                     priceRange: '10/10',
//                                     customerRating: 4.5,
//                                     customerReviews: ['Great food', 'Ambiance was great', 'Service was good']
//                                     });

// function handleNameChange(e) {
//     setRestaurant(r => ({...r, name: e.target.value}));
// }

// function handleCuisineChange(e) {
//     setRestaurant(r => ({...r, cuisine: e.target.value}));
// }   

// function handleFoodChange(e) {
//     setRestaurant(r => ({...r, food: e.target.value}));
// }

// function handlePriceRangeChange(e) {
//     setRestaurant(r => ({...r, priceRange: e.target.value}));
// }   

// function handleCustomerRatingChange(e) {
//     setRestaurant(r => ({...r, customerRating:(e.target.value)}));
// }       

// function handleCustomerReviewChange(index, e) {
//     setRestaurant(r => ({...r, customerReviews: (e.target.value)}));
// }




// return(
//     <>
//     <h2>Your Favorite Restaurant: </h2><br />
//    <p> name:{restaurant.name} <br />  cuisine:{restaurant.cuisine} <br /> food:{restaurant.food} <br />  customerRating:{restaurant.customerRating} <br /> customerReviews:{restaurant.customerReviews}      
//         <br /> priceRange:{restaurant.priceRange}</p>
    

//     <input type="text" value={restaurant.name} onChange={handleNameChange} />
//     <input type="text" value={restaurant.cuisine} onChange={handleCuisineChange} />
//     <input type="text" value={restaurant.food} onChange={handleFoodChange} />
//     <input type="number" value={restaurant.priceRange} onChange={handlePriceRangeChange} />
//     <input type="number" value={restaurant.customerRating} onChange={handleCustomerRatingChange} />
//     <textarea type="text" value={restaurant.customerReviews} onChange={handleCustomerReviewChange} />
//     </>
// );
// }