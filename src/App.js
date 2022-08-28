import { Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Results from "./pages/Results";
import "./index.css";
import logo from "./images/logo.svg";


export default function App() {
    const location = useLocation();

    return (
        <div className="app">
            <Link to="/"><img id="logo" src={logo} alt="french foreign legion eligibility test app" /></Link>
            <div className="container">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="test" element={<Test />} />
                    <Route path="results" element={<Results />} />
                </Routes>
            </div>
            <div className="footer">Footer</div>
        </div>
    );
}