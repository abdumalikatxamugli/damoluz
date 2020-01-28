import React from 'react';
import './DachaListItem.css'
import DachaPhoto from '../../assets/dacha.jpg'

const DachaListItem = (props) => {
  const qulayliklar=props.qulayliklar.map((entry, index)=><span className="qulayliklar" key={index}>{entry}</span>)
  return (
    <div className="col-md-4">
      <div className="DachaListItem">
      	<div>
      		<img src={DachaPhoto} alt="dalahovli rasmi"/>
      	</div>
        <div className="DachaDescription">
        	<div>{props.name}</div>
        	<div>kuniga {props.price} so'm</div>
        	<div>{qulayliklar}</div>
        </div>  
      </div>  
    </div>
  )
}

export default DachaListItem;