import React from 'react';
import Modal from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import  Image  from 'react-bootstrap/Image';


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
   title : this.props.title ,
   description : this.props.description ,
   imgUrl : this.props.imgUrl ,
   
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
     <Image variant="top" src={this.state.imgUrl} alt={"test"} width={300} />

     {this.state.description}
   </Modal.Body>

   <Modal.Footer>
     <Button onClick={() => { this.setState({show : false })}} variant="secondary" >Close</Button>
    
   </Modal.Footer>
  </Modal.Dialog>

            </div>

        )
    }
}

export default SelectedBeast;
