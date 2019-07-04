import React from "react";

class Form extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.passState(this.state);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.status]: false
    });
  };

  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // };
  render() {
    return (
      <div>
        <h2 style={{ marginTop: "1rem" }}>Login to your account</h2>

        <form style={formMargin} onSubmit={this.onSubmit}>
          <input
            style={inputStyle}
            type="text"
            name="email"
            placeholder="User e-mail"
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            style={inputStyle}
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input
            style={myButton}
            onClick={this.handleSubmit}
            type="submit"
            value="Sign in"
          />
        </form>
      </div>
    );
  }
}


const formMargin = {
    marginTop: "2rem"
  };
  
  const inputStyle = {
    boxSizing: "border-box",
    outline: "none",
    display: "block",
    width: "100%",
    padding: "7px",
    border: "none",
    borderBottom: "1px solid #ddd",
    background: "transparent",
    marginBottom: "10px",
    font: "16px Arial, Helvetica, sans-serif",
    height: "45px"
  };
  
  const myButton = {
    width: "100%",
    boxShadow: "inset 0px 0px 15px 3px #222222",
    backgroundColor: "#00d8ff",
    borderRadius: "17px",
    border: "1px solid #1f2f47",
    display: "inline-block",
    cursor: "pointer",
    color: "#ffffff",
    // font-family:Arial;
    fontSize: "16px",
    padding: "8px 13px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #263666",
    marginTop: "1rem",
    marginBottom: "2rem",
  
    "&:hover": {
      backgroundColor: "transparent"
    },
  
    "&:active": {
      position: "relative",
      top: "1px"
    }
  };

export default Form;
