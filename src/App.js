import { Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import "./index.scss";


export default function App() {
    const location = useLocation();

    return (
        <div className="app">
            <header>
                <Link to="/">
                    <div className="logo"></div>
                </Link>
            </header>
            <main>
                <Routes location={location} key={location.pathname}>
                    <Route path='*' element={<NotFound title="FFL - 404 Page Not Found" />} />

                    <Route path="/" element={<Home title="FFL - Home" />} />
                    <Route path="test" element={<Test title="FFL - Test" />} />
                    <Route path="results" element={<Results title="FFL - Results" />} />
                </Routes>
            </main>
            <footer>
                <span className="pale-text">French Foreign Legion Eligibility Test App<br />All Rights Reserved 2022</span>
            </footer>
        </div>
    );
}