import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ahadbek",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "ahadbek2",
      });
    }, 2000);
  }
  render() {
    console.log("parent component");
    return (
      <div>
        ParentComp <br />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
