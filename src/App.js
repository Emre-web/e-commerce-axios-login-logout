import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Login from "./components/Login";
import {useState} from "react";

function App() {

    const[token,setToken] = useState(localStorage.getItem('userToken') ?? null);


  return (
    <div className="App">
     <Navbar setToken={setToken} />
        {token ? <Products/> : <Login token={token} setToken={setToken}/>}
     <Footer/>
    </div>
  );
}

export default App;
