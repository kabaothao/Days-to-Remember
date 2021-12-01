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
                from
                createdAt
            }
            cards {
                _id
                cardRecipient
                cardText
                cardSender
                createdAt
            }
        }
    }
`;