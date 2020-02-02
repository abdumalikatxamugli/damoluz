import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {MainPage, Dachalar, Dacha} from '../containers'


const primaryLanguage="/uz"

const routes=(
				<Switch>
					{/*root routes*/}
					<Route path="/:lang" component={MainPage} exact/>
					<Redirect from="/" to={primaryLanguage} exact/>
					
					{/*dachalar*/}
					<Route path="/:lang/dachalar" component={Dachalar} exact/>
					<Route path="/:lang/dachalar/:id" component={Dacha} exact/>
					
				</Switch>
			
)
export default routes