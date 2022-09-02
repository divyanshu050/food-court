// react arrow function component with exports --> rafce


// import React from 'react'

// import React from 'react'

// const App = () => {
//   return (
//     <>
//       < MyName />
//       < MyName />
//       < MyName />


//       <h1 className='myClass'>Hello World !! Welcome to Vidhyamay Education</h1>
//       <p>Awesome</p>

//     </>
//   );
// };
// const MyName = () => {
//   return <h1>Vidhyamay Education Foundation</h1>;
// };

// export default App





// or

// import react from "react"  // import

// function App(){
//   return <h1>Hello World!! </h1>;  // one function
// }
// export default App;  // return jsx


// how react  actully works

/*import React from "react"

const App = ()=>{                                              // if want to add one div in this format 
  return React.createElement(
    "div",
    {},
    React.createElement("h1",{}, "Hellloooo")
  )
}
export default App; */


import React from 'react';
import Resturant from "./components/basics/res"

const App = () => {
  return <Resturant/>
     
}
export default App;

