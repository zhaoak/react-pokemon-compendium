import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Main from './components/Main/Main.js';
import DetailPage from './components/DetailPage/DetailPage.js';

// import components

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/detail/:id">
        <DetailPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
