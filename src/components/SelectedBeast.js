import React from "react";
import  Modal from "react-bootstrap/Modal";
import  Button  from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.url}
            alt={this.props.title}
            style={{ width: "18rem" }}
          />
          <p>{this.props.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;