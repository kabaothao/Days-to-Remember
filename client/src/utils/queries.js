import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      eventData {
        _id
        title
        name
        phoneNum
        date
        from
        createdAt
      }
    }
  }
`;
