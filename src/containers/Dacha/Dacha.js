import React, {Fragment} from 'react'


const Dacha = (props) => {
  return (
  	<Fragment>
	    <div>dacha language is {props.match.params.lang}</div>
	    <div>dacha id is {props.match.params.id}</div>
	   
    </Fragment>
  )
}

export default Dacha;