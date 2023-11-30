import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";

export const useGetWordpressMemberSettings = (location: string) => useQuery(query, { context: { clientName: 'wordpress' }, variables: { location: location } });

const query = gql`
query GetMenus ($location : MenuLocationEnum!){
  menuItems(where: {location: $location}) {
    edges {
      node {
        id
        url
        label
      }
    }
  }
}
`
