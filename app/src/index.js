import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';
import DetailCountry from './components/DetailCountry';
import { ThemeProvider } from './components/ChangeTheme/ThemeContext';
import store from './components/Store/Store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Provider store={store} >
    <Header />
      <Router>
       <Routes>
       <Route exact path="/" element={<Home />} />
        <Route  path="country" > 
         <Route path=":detailTitle" element={<DetailCountry />}/>
        </Route>
       </Routes>
     </Router>
    </Provider>
  </ThemeProvider>
  
);