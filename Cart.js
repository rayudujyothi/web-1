// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const Cart = () => {
//   const state=useSelector((state)=> state.addItems)
//   return (
//     <div>
//         <NavLink to="/" className="btn btn-outline-primary ms-2">
//             <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
//         </NavLink>
//     </div>
//   )
// }

// export default Cart

// Remove this line, it's not needed
// const addItem = [];

// Update your reducer function and export it as the default


// In your Cart component, use useSelector correctly
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { createRoot } from 'react-dom/client';


// const Cart = () => {
//   const state = useSelector((state) => state); // Use the entire state
//   const cartItems = state.addItems; // Access the specific slice of state

//   return (
//     <div>
//       <NavLink to="/" className="btn btn-outline-primary ms-2">
//         <span className="fa fa-shopping-cart me-1"></span> Cart ({cartItems.length})
//       </NavLink>
//     </div>
//   );
// };

// export default Cart;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//   // Access the specific slice of state using useSelector
//   const cartItems = useSelector((state) => state.addItems);

//   return (
//     <div>
//       <NavLink to="/" className="btn btn-outline-primary ms-2">
//         <span className="fa fa-shopping-cart me-1"></span> Cart ({cartItems.length})
//       </NavLink>
//     </div>
//   );
// };

// export default Cart;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//   // Access the specific slice of state using useSelector
//   const cartItems = useSelector((state) => {
//     console.log('Redux state:', state); // Log the Redux state for debugging
//     return state.addItems;
//   });

//   return (
//     <div>
//       <NavLink to="/" className="btn btn-outline-primary ms-2">
//         <span className="fa fa-shopping-cart me-1"></span> Cart ({cartItems ? cartItems.length : 0})
//       </NavLink>
//     </div>
//   );
// };

// export default Cart;

//  import React from 'react';
//  import { NavLink } from 'react-router-dom';
//  import { useSelector } from 'react-redux';

//  const Cart = () => {
//     {/*const cartItems = useSelector((state) => state.cartItems); */}
//     const state=useSelector((state)=> state.handleCart)
//    {/*   const state=useSelector((state)=> state.handleCart || [])*/}

//    return (
//      <div>
//        <NavLink to="/cart" className="btn btn-outline-primary ms-2">
//       {/*  <span className="fa fa-shopping-cart me-1"></span> Cart ({cartItems ? cartItems.length : 0}) */}
//         <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
//       </NavLink>
//        {/* Render cart items here */}
//      </div>
//    );
//  };

//  export default Cart;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
 {/*} const cartItems = useSelector((state) => state.cartItems || []); // Use the correct selector */}
 const state=useSelector((state)=>state.handleCart)

  return (
    <div>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})
      </NavLink>
      {/* Render cart items here */}
    </div>
  );
};

export default Cart;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';

// const Cart = () => {
//   const cartItems = useSelector((state) => state); // Update this to match your store structure

//   return (
//     <div>
//       <NavLink to="/cart" className="btn btn-outline-primary ms-2">
//         <i className="fa fa-shopping-cart me-1"></i> Cart ({cartItems.length})
//       </NavLink>
//       {/* Render cart items here */}
//     </div>
//   );
// };

// export default Cart;

