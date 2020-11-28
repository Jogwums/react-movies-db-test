import React, {useRef, useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Add, Watched, WatchList } from './components/Header'
import GlobalProvider from './context/GlobalState'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';


import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  // useOnClickOutside(node, () => setOpen(false));

  return (
    <GlobalProvider>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div ref={node}>
          
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          
          </div>
      </ThemeProvider>
      <Switch>
        <Route exact path="/">
          <WatchList />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
