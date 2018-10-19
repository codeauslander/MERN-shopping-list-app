import React, { Component } from 'react';

class Item extends Component {
  // methods
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
    }
    
  }
  componentDidMount() {
    this.setState({id: this.props.id, name: this.props.name});
  }

  render() {
    const  {id, name} = this.state;
    console.log(this.state);
    return (
      <div>
        
        <h6>hey: {id} - {name}</h6>
        
        
      </div>
    )

  }
}

export default Item;