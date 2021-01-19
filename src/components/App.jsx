import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Layout from '../layout';
import HomePage from '../pages/HomePage';
import ShufflePage from '../pages/ShufflePage';
import LoginPage from '../pages/LoginPage';
import ComparePage from '../pages/ComparePage';

const App = () => {
 
   return (      
         <Switch>
               <Layout>
                  <Route path="/" exact render={() => <HomePage />} ></Route>
                  <Route path="/shuffle" render={() => <ShufflePage />} ></Route>
                  <Route path="/login" render={() => <LoginPage />} ></Route>
                  <Route path="/compare" render={(props) => <ComparePage {...props} />} ></Route>
               </Layout>
         </Switch>
   );
};

export default App;
