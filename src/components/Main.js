
import React from "react";
import HornedBeasts from "./HornedBeasts";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
//   getData(){
//     let dataArr = this.props.data;
//     return dataArr;
//   }

  render(){
    return (
      <>
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