import { gql } from "@apollo/client";
export const GET_CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        id
        status
        species
        type
        gender
        image
      }
    }
  }
`;
