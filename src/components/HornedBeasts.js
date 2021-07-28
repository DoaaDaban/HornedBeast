import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfLikes : 0,
    };
  }

  incrementNumOfLikes = () => {
    this.setState({
      numOfLikes : this.state.numOfLikes  + 1,
    });
    this.props.showModal();
  this.props.modalData(
    this.props.title,
    this.props.image_url,
    this.props.description
  );
  };

  
  render() {
    return (
      <Card
        style={{ width: "18rem", height: "35rem" }}
        onClick={this.incrementNumOfLikes}
      >
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary">  number of likes ❤️ : {this.state.numOfLikes }</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;