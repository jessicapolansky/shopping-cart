import React, { Component } from 'react';
import { connect } from 'react-redux';

class Inventory extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (<ul>
      {this.props.groceries.map((c, i) => {
        return (<li 
		key={i}>{c.name} {c.price} {c.description}</li>);
      })}
	</ul>);
  }
}

function mapStateToProps (state) {
  return {
    grocerycart: state.grocerycart
  };
}

var ConnectedGrocery = connect(mapStateToProps)(Inventory);

export default ConnectedGrocery;