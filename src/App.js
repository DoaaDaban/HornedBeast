import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import "./App.css";
import data from "./data.json";
import SelectedBeast from "./components/SelectedBeast";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: null,
      url: null,
      description: null,
      data1 : data
     
    };
  }

  dataHandle = (submittedData) => {
    //eslint-disable-next-line
    let newDataArray = data.filter((item) => {
      if (item.horns === Number(submittedData)) {
        return item;
      } else if (submittedData === "all") {
        return item;
      }
    });
    this.setState({ data1: newDataArray });
  };

  modalData = (title, url, desc) => {
    this.setState({
      title: title,
      url: url,
      description: desc,
    });
  };

  stateHandleShow = () => {
    this.setState({
      show: true,
    });
  };

  stateHandleHide = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
       <div>
      <Container fluid align="center">
            <Header />
          
        <Row>
          
          <Main
            data={data}
            stateUpdate={this.stateHandleShow}
            modalData={this.modalData}
          />

         <SelectedBeast
            show={this.state.show}
            hide={this.stateHandleHide}
            title={this.state.title}
            url={this.state.url}
            desc={this.state.description}
          />
        </Row>
       
            <Footer />
      </Container>
            </div>
    );
  }
}

export default App;