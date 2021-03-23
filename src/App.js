import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/home'

function App() {

  return (
      <BrowserRouter>
        <div> 
            <Switch>
              <Route path ="/" component = {Home} exact/>
              <Route exact path="/yeet">
						    <h1>yeet</h1>
					    </Route>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
