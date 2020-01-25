import React, {Component} from 'react';
import './DachaList.css';
import {DachaListItem, Filter} from '../../components'
import dachalist from './DachaListStore'

class DachaList extends Component {

  state={
  	searchName:"",
  	minPrice:0,
  	maxPrice:10000000
  }
  searchNameChangeHandler=(event)=>{
  	this.setState({searchName:event.target.value});
  	
  }
  minPriceHandler=(event)=>{
  	this.setState({minPrice:event.target.value});
  	
  }
  maxPriceHandler=(event)=>{
  	this.setState({maxPrice:event.target.value});
  	
  }
  render(){
  	const filtered=dachalist.filter(entry=>(entry.name.search(this.state.searchName)>=0
  											&& entry.price>this.state.minPrice	
  											&& entry.price<this.state.maxPrice)
  									)
  
  	const list=filtered.map(entry=><DachaListItem key={entry.id} 
  												   name={entry.name} 
  												   price={entry.price} 
  												   qulayliklar={entry.qulayliklar}/>)
  
  	
	return (
		<div className="DachaList container">
			
			<div className="row">
				<Filter searchNameChange={this.searchNameChangeHandler}
						minPriceHandler={this.minPriceHandler}
						maxPriceHandler={this.maxPriceHandler}
						maxPrice={this.state.maxPrice}
						minPrice={this.state.minPrice}
				/>
			</div>	
			<div className="row">
				{list}	
			</div>	
		</div>
	);
  }	
  
}

export default DachaList;
