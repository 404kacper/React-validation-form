import React, { Component } from "react";
import logo from "../icons/react.svg";
import Form from "./Form";
// import PropTypes from "prop-types";
// import {withRouter} from 'react-router';

export class Window extends Component {

  passState = (userState) => {
    this.props.compareUserState(userState);
  }

  render() {
    
    return (
      <div style={WindowStyle}>
        <img src={logo} alt="" style={ImageStyle} />
        <Form passState={this.passState}/>
      </div>
    );
  }
}


const ImageStyle = {
  width: "100px",
  height: "100px",
  marginTop: "2rem",
  border: "4px solid #44f4f4",
  boxShadow: "1px 1px 25px rgba(0, 0, 0, 0.35)",
  borderRadius: "50%"
};

const WindowStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "10%",
  marginTop: "15%",
  textAlign: "center",
  width: "50%",
  border: "6px solid #305A72",
  boxShadow: "1px 1px 25px rgba(0, 0, 0, 0.35)",
  backgroundColor: "#fff"
};

// export default withRouter(Window);
export default Window;
