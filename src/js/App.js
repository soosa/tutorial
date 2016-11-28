import React from 'react';
import ReactDOM from 'react-dom'; 

class App extends React.Component { 
	constructor(){
		super();
		this.state = {
			red: 0,
			blue: 0,
			green: 0
		}
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value,
			green: ReactDOM.findDOMNode(this.refs.green).value
		})
	}
  	render(){ 
	    return (
	    	<div>
	    		<Slider ref="green" update={this.update} />	
	    		{this.state.green} <br />
	    		<Slider ref="blue" update={this.update} />
	    		{this.state.blue} <br />
	    		<Slider ref="red" update={this.update} />  
	    		{this.state.red}
	    	</div>
      	); 
  	} 
}

class Slider extends React.Component {
	render(){
		return (
	    	<input type="range"
	    		min="0"
	    		max="255" 
	    		onChange={this.props.update} />

		);
	}	
}

export default App
