import { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
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

  return (
    <></>
  )
}

export default App
