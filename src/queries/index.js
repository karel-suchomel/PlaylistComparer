import { gql } from 'apollo-boost';

const GET_PLAYLISTS = gql`
   query($id1: String, $id2: String) {
      playlists(ids: [$id1, $id2]) {
         name
      }
   }
`;

export { GET_PLAYLISTS };
