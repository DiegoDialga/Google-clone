import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import SecondPage from './pages/secondPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/search'>
            <SecondPage />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
