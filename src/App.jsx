import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { SuperHeros } from "./Components/SuperHeros";
import { RqSuperHeros } from "./Components/RqSuperHeros";
import "./App.css";
import { QueryClientProvider,QueryClient } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import { RqSuperHero } from "./Components/RqSuperHero";
import { RqParallelFetching } from "./Components/RqParallelFetching";
import { DynamicParallelPage } from "./Components/DynamicParallelPage";
import { DependentQueriesPage } from "./Components/DependentQueriesPage";
const queryClient = new QueryClient();
const App = () => {
  return <QueryClientProvider client={queryClient}>

    <Router>
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
          <Route path="dependentqueriespage" element={<DependentQueriesPage email="vishwas@example.com"/>}/>
          <Route path="/dynamicparallelpage" element={<DynamicParallelPage heroIds={[1,2]}/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/rqparallelfetching" element={<RqParallelFetching/>}/>
          <Route path="/rqsuperheros/:id" element={<RqSuperHero/>}/>          
          <Route path="superheros" element={<SuperHeros/>}/>
          <Route path="rqsuperheros" element={<RqSuperHeros/>}/>
            
          </Routes>
        </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
  </QueryClientProvider>
};
export default App;
