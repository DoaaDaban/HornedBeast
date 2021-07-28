import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import SelectedBeast from './SelectedBeast';


class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            numOfLikes : 0
        }
    }
    
    incrementNumOfLikes = () => {
        this.setState({
            numOfLikes: this.state.numOfLikes + 1
        })
    }

    clickFunc = () => {
        this.setState({
            click: this.state.click + 1
        })
    }
    cancelFunc = () =>{
        this.setState({
            click: this.state.click - 1
        })
    }

    render(){
        return(

            <section>
               
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img onClick={this.incrementNumOfLikes} variant="top" src={this.props.imgUrl} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    number of likes ❤️ : {this.state.numOfLikes}
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text>
   
    <SelectedBeast title={this.props.title} 
    imgUrl={this.props.imgUrl} 
    description={this.props.description} 
    selectFunc={this.clickFunc}
    cancleFunc={this.cancleFunc}
    />
  </Card.Body>
</Card>
</Col>

            </section>
           
        )

        
    }
}

export default HornedBeasts;
