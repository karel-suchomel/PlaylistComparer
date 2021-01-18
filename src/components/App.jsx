import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Layout from '../layout';
import HomePage from '../pages/HomePage';
import ShufflePage from '../pages/ShufflePage';
import LoginPage from '../pages/LoginPage';
import ComparePage from '../pages/ComparePage';

const App = () => {
   
   // console.log(data);
   // if (loading) {
   //    return <div>Loading...</div>;
   // }
   // if (error) {
   //    return <div>Error: </div>;
   // }
   // console.log(data);

 
   return (
      
         <Switch>
            <Layout>      
               <Route path="/" exact render={() => <HomePage />} ></Route>
               <Route path="/shuffle" render={() => <ShufflePage />} ></Route>
               <Route path="/login" render={() => <LoginPage />} ></Route>
               <Route path="/compare" render={() => <ComparePage />} ></Route>
            </Layout>
         </Switch>
   );
};

export default App;