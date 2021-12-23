import {gql} from 'apollo-server-micro';
export const typeDefs = gql`
    type Laptop {
        id: ID
        name: String
        color: String
    }

    type Query {
        getLaptops: [Laptop]
    }
`;