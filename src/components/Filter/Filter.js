import React from 'react';
import "./Filter.css"
const Filter =(props)=> {
  
    return (
      <div className="col-md-12">
        <div className="Filter">
          <span>Filter</span>
          <div><span>Nomi:</span>
            <input type="text" onChange={props.searchNameChange} placeholder="Nomi bo'yicha izlash"/>
          </div>  
          <div><span>Narxi:</span>
            <button onClick={props.lowerMinPrice}>lower</button>{props.minPrice} dan <button onClick={props.higherMinPrice}>heigher</button>
            <button onClick={props.lowerMaxPrice}>lower</button>{props.maxPrice} gacha<button onClick={props.higherMaxPrice}>higher</button>           
          </div> 
         
        </div>
      </div>
    );
  
}


export default Filter
