import { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import APIForm from './components/APIform';
import './App.css'

function App() {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "", 
    no_cookie_banners: "",
    width: "", 
    height:""
  });

  const submitForm = () => {
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };
    if (inputs.url == "" || inputs.url == " ") {
      alert("You forgot to submit an url!");
    } else{
      for (const [key, value] of Object.entries(inputs)) {
        if (value == ""){
          inputs[key] = defaultValues[key]
        }
      }
    }
  }
  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;
  }
  
  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      
      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />
      <br></br>

    </div>
  );
}

export default App
