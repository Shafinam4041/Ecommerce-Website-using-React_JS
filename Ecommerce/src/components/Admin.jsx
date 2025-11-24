import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  margin: 'auto',
  marginTop: '50px',
};

const inputStyle = {
  marginBottom: '20px',
  width: '100%',
};

const buttonStyle = {
  width: '100%',
};

export default function LocalStorage() {
  let initialValue;
  if (localStorage.getItem('User') === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem('User'));
  }

  const [Data, setData] = useState({});
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const user_id = value.length === 0 ? 1 : value[value.length - 1].id + 1;

    const allData = {
      id: user_id,
      ...Data,
    };

    const details = [...value, allData];
    localStorage.setItem('User', JSON.stringify(details));
  };

  return (
    <div style={formStyle}>
      <h1 align="center">Registration Form</h1>
      <br></br>
      <br></br>
      <br></br>
      <TextField
        id="outlined-basic"
        label="Username"
        name="name"
        variant="outlined"
        onChange={handleChange}
        style={inputStyle}
      />
      <TextField
        id="outlined-basic"
        label="Enter the Password"
        name="password"
        variant="outlined"
        type="password"
        onChange={handleChange}
        style={inputStyle}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={buttonStyle}
      >
        <Link to='/AddProduct'>Submit</Link>
      </Button>
<br></br>
      <h4>
        Don't have an account? <Link to="/SignUp">SignUp</Link>
      </h4>
    </div>
  );
}

