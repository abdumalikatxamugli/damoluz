import React, { Component , Fragment} from 'react';
import {Link} from 'react-router-dom'
import classes from './MainPage.module.css'
import {FullCont} from '../../HOCs'

export class MainPage extends Component {
	render() {
		return (
			<Fragment>
			 <section className={classes.mainSlider}>
			 	<FullCont>
			 		<div className="col-md-12">
			 			
			 		</div>
			 	</FullCont>
			 </section>
			 </Fragment>
		);
	}
}

export default MainPage