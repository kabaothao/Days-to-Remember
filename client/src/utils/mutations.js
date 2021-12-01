import { gql } from '@apollo/client';

//use resolvers.js file as a guide to build mutations.

//TODO:LOGIN_USER will execute the loginUser mutation set up using Apollo Server
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//TODO:ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//TODO:ADD_EVENT will execute the ADD_EVENT mutation.

export const ADD_EVENT = gql`
  mutation addEvent($title: String!) {
    addEvent(title: $title) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//TODO:REMOVE_EVENT will execute the ADD_EVENT mutation.
