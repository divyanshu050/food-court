import React, { useState } from 'react';
import "./res.css";
import Menu from "./menuApi"; 
import MenuCard from './menuCard';

const Resturant = () => {
  
  const[menuData, setMenuData] = useState(Menu);

const filterItem = (category)=> {
  const updatedList = Menu.filter((curElem)=>{
  return curElem.category === category;
  });
  setMenuData(updatedList);
}

  return (
    <>
    <div>
      <h2 className='main'>
        Vidhyamay Food Court
      </h2>
    </div>
    <nav className="navbar">
      <div className="btn-group">
        <button className='btn-group__item' onClick={ () => filterItem("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={ () => filterItem("lunch")}>lunch</button>
        <button className='btn-group__item' onClick={ () => filterItem("evening")}>Evening</button>
        <button className='btn-group__item' onClick={ () => filterItem("dinner")}>Dinner</button>
        <button className='btn-group__item' onClick={ () => setMenuData(Menu)}>All</button>
      </div>
    </nav>
   
      <MenuCard menuData = {menuData}/>

      <footer>
      <div>
        <p className="footer"> <b>
        &#169; Divyanshu. All rigths reserved </b>
        </p>
      </div>
    </footer>
    </>
  )
}

export default Resturant;
