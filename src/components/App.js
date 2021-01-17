import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PLAYLISTS_NAME } from '../queries';

const App = () => {
   const { data, loading, error } = useQuery(GET_PLAYLISTS_NAME);
   console.log(data);
   if (loading) {
      return <div>Loading...</div>;
   }
   if (error) {
      return <div>Error: </div>;
   }
   console.log(error);
   return <div>app</div>;
};

export default App;
