import React from 'react';

const FullCont = (props) => {

  return (
    <div className="container">
    	<div className="row">
    		{props.children}
    	</div>
    </div>
  )
}

export default FullCont;