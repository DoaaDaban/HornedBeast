import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



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

    render(){
        return(

            <section>
                {/* <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} />
                <p>{this.props.description}</p> */}

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
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
            </section>
           
        )

        
    }
}

export default HornedBeasts;
