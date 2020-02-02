import React from 'react';
import {FullCont} from '../../HOCs'

const Footer = (props) => {
  return (
  	<footer>
  		<FullCont>
    		<div className="col-md-12">Footer is in {props.match.params.lang}</div>
  		</FullCont>
  	</footer>
  )
}

export default Footer;