import React from 'react';
import Modal from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';


class SelectedBeast extends React.Component{
    
constructor(props){
    super(props);
    this.state={
      show : false,
    }
}

handleSelectFun =() =>{
 this.setState({
   show : true,
   title : this.state.title ,
  //  description : this.state.description ,
  //  imgUrl : this.state.imgUrl ,
   
 })
}

    render(){
      //console.log(this.props.selctedImage)
    return(
        <div>

<Button onClick={() => this.handleSelectFun()} variant="primary" >show Modal</Button>

  <Modal.Dialog show= {this.state.show} >
   <Modal.Header closeButton>
     <Modal.Title>{this.state.title}</Modal.Title>
    
   </Modal.Header>

   <Modal.Body >
     {this.state.imgUrl}
   </Modal.Body>

   <Modal.Footer>
     <Button variant="secondary" >Close</Button>
     <Button variant="primary">OK</Button>
   </Modal.Footer>
  </Modal.Dialog>

            </div>

        )
    }
}

export default SelectedBeast;
