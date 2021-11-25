import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import user from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element = {<Homepage/>}/>
        <Route path="/posts" element = {<Homepage/>}/>
        <Route path="/register"  element = {<Register />}/>
        <Route path="/login" element= {user ? <Login /> : <Homepage/>}/>
        <Route path="/post/:id" element ={<Single/>} />
        <Route path="/write" element ={user ? <Write /> : <Login/>}/>
        <Route path="/settings" element = {user ? <Settings /> : <Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
