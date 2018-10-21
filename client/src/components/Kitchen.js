import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ShoppingList from './ShoppingList';

 class Kitchen extends Component {

  componentDidMount() {
    this.props.getItems();
  };
  onDeleteClick = id => {
    this.props.deleteItem(id);
  };
   render() {
    const { items } = this.props.item;
    return (
      <Container>
         <ShoppingList item={items}></ShoppingList>
      </Container>
    );
  }
}

Kitchen.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  item: state.item
})
 export default connect(mapStateToProps,{ getItems, deleteItem  })(Kitchen);