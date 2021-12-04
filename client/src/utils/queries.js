import { gql } from '@apollo/client';

//use typeDefs as a guide to build gql
export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            password
            events {
                _id
                title
                name
                phoneNum
                date
                usernameEvent
                createdAt
            }
            # cards {
            #     _id
            #     cardRecipient
            #     cardText
            #     cardSender
            #     createdAt
            # }
        }
    }
`;

export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      _id
      title
      name
      phoneNum
      date
      usernameEvent
      createdAt
    }
  }
`;

