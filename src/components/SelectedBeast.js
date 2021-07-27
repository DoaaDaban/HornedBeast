import React from 'react';
import Modal from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap';


class SelectedBeast extends  React.Component{
    
constructor(props){
    super(props);
    this.state ={
        SelectedBeastFun ()
    }
}

// this.props.SelectedBeastFun ();

    render(){
    return(
       <div>

{
    data.map((elements)=> {

    })
}
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>{this.state.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body >
    {this.state.imgUrl}
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">OK</Button>
  </Modal.Footer>
</Modal.Dialog>

            </div>
        )
    }
}

