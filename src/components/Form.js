import React, { useState, useContext } from "react";
import AuthContext from '../context/authentiaction/authContext';

const Form = () => {
  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    authContext.compareUserState(email, password);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <h2 style={{ marginTop: "1rem" }}>Login to your account</h2>

      <form style={formMargin} onSubmit={onSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="email"
          placeholder="User e-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          style={inputStyle}
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input style={myButton} type="submit" value="Sign in" />
      </form>
    </div>
  );
};

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
