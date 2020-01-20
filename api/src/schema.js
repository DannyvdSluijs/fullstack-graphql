const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }
    
    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        img: String!
    }
    
    input PetId {
        id: ID!
    }
    
    input PetCollectionFilter {
        name: String,
        type: String
    }
    
    input NewPetInput {
        name: String!
        type: String!
    }
    
    type Query {
        me: User!
        pets(input: PetCollectionFilter): [Pet]!
        pet(input: PetId): Pet
    }
    
    type Mutation {
        newPet(input: NewPetInput!): Pet!
    }
`;

module.exports = typeDefs;
