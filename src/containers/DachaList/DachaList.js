import React, {Component} from 'react';
import './DachaList.css';
import {DachaListItem, Filter} from '../../components'
import dachalist from './DachaListStore'

class DachaList extends Component {

  state={
  	searchName:"",
  	minPrice:0,
  	maxPrice:1000000
  }
  searchNameChangeHandler=(event)=>{
  	this.setState({searchName:event.target.value});
  	
  }
  lowerMinPrice=()=>{
  	this.setState({minPrice:this.state.minPrice-50000})
  }
  higherMinPrice=()=>{
  	this.setState({minPrice:this.state.minPrice+50000})
  }
  lowerMaxPrice=()=>{
  	this.setState({maxPrice:this.state.maxPrice-50000})
  }
  higherMaxPrice=()=>{
  	this.setState({maxPrice:this.state.maxPrice+50000})
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
						maxPrice={this.state.maxPrice}
						minPrice={this.state.minPrice}
						lowerMinPrice={this.lowerMinPrice}
						higherMinPrice={this.higherMinPrice}
						lowerMaxPrice={this.lowerMaxPrice}
						higherMaxPrice={this.higherMaxPrice}
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
