
import React from "react";
import HornedBeasts from "./HornedBeasts";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";


class Main extends React.Component {

  handleSub = (event) => {
    event.preventDefault();
    let submittedData = event.target.select.value;
    this.props.handleSubmission(submittedData);
  };

  render(){
    return (
      <>
    <Form  onSubmit={this.handleSub}>

    
 <Form.Select aria-label="choose number of honors">
  <option>choose number of honors</option>
  <option value="all">all</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">WOW!</option>
</Form.Select>

<Button variant="primary" type="submit">
          Submit
        </Button>

</Form>

        {this.props.data.map((element) => {
          return (
            <Col lg={3}>
              <HornedBeasts
                className="card"
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                showModal={this.props.stateUpdate}
                modalData={this.props.modalData}
              />
            </Col>

          );
        })}

      </>
    );
  }
}

export default Main;