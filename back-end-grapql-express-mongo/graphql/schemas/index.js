const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Food{
        _id: ID!
        name: String!
        isMainFood: Boolean!
        creator: User!
    }

    type User{
        _id: ID!
        email: String!
        password: String!
        foods: [Food!]!
    }

    type Auth{
        userId: ID!
        email: String!
        token: String!
        tokenExpiration: Int!
    }

    input UserInput{
    email: String!
    password: String!
    }

    input FoodInput{
        name: String!
        isMainFood: Boolean!
    }

    type RootQuery{
        foods: [Food!]!
        users: [User!]!
        login(email: String!, password: String!): Auth!
    }

    type RootMutation{
        createFood(foodInput: FoodInput!): Food!
        createUser(userInput: UserInput!): User
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`);

module.exports = schema;
