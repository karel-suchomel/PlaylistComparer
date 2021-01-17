import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PLAYLISTS_NAME } from '../queries';
import {Switch, Route } from 'react-router-dom';
import Layout from '../layout';
import HomePage from '../pages/HomePage';
import ShufflePage from '../pages/ShufflePage';
import LoginPage from '../pages/LoginPage';

const App = () => {
   //const { data, loading, error } = useQuery(GET_PLAYLISTS_NAME);
   // console.log(data);
   // if (loading) {
   //    return <div>Loading...</div>;
   // }
   // if (error) {
   //    return <div>Error: </div>;
   // }
   // console.log(error);
   return (
      
         <Switch>
              
            <Layout>      
               <Route path="/" exact render={() => <HomePage />} ></Route>
               <Route path="/shuffle" render={() => <ShufflePage />} ></Route>
               <Route path="/login" render={() => <LoginPage />} ></Route>
            </Layout>
         </Switch>
   );
};

export default App;
