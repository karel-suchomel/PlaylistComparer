import { gql } from 'apollo-boost';

const GET_PLAYLISTS_NAME = gql`
   {
      playlists(ids: ["5KYJqvahaLoffrR9ZuDdVQ", "38w5V8Ke2vsoSCBoTQUblP"]) {
         name
      }
   }
`;

export { GET_PLAYLISTS_NAME };
