import { gql } from 'apollo-boost';

const GET_PLAYLISTS = gql`
   query($id1: String, $id2: String) {
      playlists(ids: [$id1, $id2]) {
         name
         id
         description
         followers {
            total
         }
         images {
            url
         }
         owner {
            displayName
            id
         }
         tracks {
            total
         }
         duplicates
         playTime
         href
      }
   }
`;

const GET_SAME_TRACKS = gql`
   query($id1: String, $id2: String) {
      tracks(ids: [$id1, $id2]) {
         name
         href
         album {
            name
            images {
               url
            }
         }
         artists {
            name
         }
      }
   }
`;

export { GET_PLAYLISTS, GET_SAME_TRACKS };
