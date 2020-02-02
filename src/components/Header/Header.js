import React from 'react';
import {Link} from 'react-router-dom'
import {FullCont} from '../../HOCs'
import logo from '../../assets/logo.svg'
import classes from './Header.module.css'

const Header = (props) => {

  const anotherLang=props.match.params.lang==="uz"?"ru":"uz";
 	
  return (
  	<header className={classes.header}>
  		<FullCont>
				<div className="col-md-6">
					<div className={classes.logo}>
						<img src={logo} alt="logo"/>
						<span>Damol</span>	
					</div>
				</div>
				<div className="col-md-6">
					<div className={classes.langChanger}>
						<Link to={"/"+anotherLang}>{anotherLang}</Link>
					</div>
				</div>
	    </FullCont>
    </header>
  )
}

export default Header;