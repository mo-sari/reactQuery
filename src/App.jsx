import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { SuperHeros } from "./Components/SuperHeros";
import { RqSuperHeros } from "./Components/RqSuperHeros";
import "./App.css";
const App = () => {
  return <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='superheros'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='rqsuperheros'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="superheros" element={<SuperHeros/>}/>
        <Route path="rqsuperheros" element={<RqSuperHeros/>}/>
          
        </Routes>
      </div>
  </Router>
};
export default App;
