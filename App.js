import "./App.css";
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
  <>
    <Header />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Cart/>}/>
</Routes>
</>
  );
}

export default App;