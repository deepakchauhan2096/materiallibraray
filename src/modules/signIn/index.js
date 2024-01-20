import React from "react";
import BaseComponent from "../baseComponent";
import FormDialog from "./Dialogue"
import SignIn from "./signIn";

class SignInComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      openPasswordPopup:false,
    };
  }

  componentDidMount() {}


  togglePasswordPopup = () => {
    this.setState((prevState) => ({openPasswordPopup : !prevState.openPasswordPopup}));
  }

  render() {
    return (
      <>
      <SignIn state={this.state}
      togglePasswordPopup={this.togglePasswordPopup}
      />
      {this.state.openPasswordPopup ? <FormDialog state={this.state}
      closePasswordPopup={this.togglePasswordPopup}/> : ""}
      </>
    );
  }
}

export default SignInComponent;
