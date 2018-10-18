import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem} from '../actions/itemActions';
import uuid from 'uuid';

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal});
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: this.state.name
    }
    // Add item via addItem action
    this.props.addItem(newItem); 
    // close modal
    this.toggle();
  }
  render(){
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >
          Add item
        </Button>
        <ModalHeader toggle={this.toggle} >Add to shopping list</ModalHeader>
        <ModalBody> 
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input 
                type="text" 
                name="name" 
                id="item" 
                placeholder="Add a shopping item"
                onChange={this.onChange}
              />
              <Button
                color="dark"
                style={{marginTop: "2rem"}}
                block
                onClick={this.onSubmit}
              >
                Add item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);