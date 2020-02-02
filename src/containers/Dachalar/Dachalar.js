import React from 'react';
import {Link} from 'react-router-dom'

const Dachalar = (props) => {

  return (
    <div>Dachalar is in {props.match.params.lang}
    	 <Link to={"/"+props.match.params.lang}>Go to main page</Link>
    </div>
  )
}

export default Dachalar;