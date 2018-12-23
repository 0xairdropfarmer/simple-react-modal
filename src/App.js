import React from "react";
import Modal from "./Component/Modal";
import "./styles.css";
class App extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };
  render() {
    return (
      <div className="App">
        <button
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          show Modal{" "}
        </button>

        <Modal show={this.state.show}>Message in Modal</Modal>
      </div>
    );
  }
}

export default App;
