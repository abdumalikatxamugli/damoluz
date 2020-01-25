import React from 'react';

const Filter =(props)=> {
  
    return (
      <div className="col-md-12">
        <div>
          <span>Filter</span>
          <div><span>Nomi:</span>
            <input type="text" onChange={props.searchNameChange} placeholder="Nomi bo'yicha izlash"/>
          </div>  
          <div><span>Narxi:</span>
            <input type="number" onChange={props.minPriceHandler} value={props.minPrice} placeholder="minimum narx"/> dan
            <input type="number" onChange={props.maxPriceHandler} value={props.maxPrice} placeholder="maximum narx"/> gacha
         </div> 
         
        </div>
      </div>
    );
  
}


export default Filter
