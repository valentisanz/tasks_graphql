import { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers.js"

const typeDefs = `
    type Query{
        hello: String
        greet(name: String!): String
        Users: [User]
        Tasks: [Task]
    }
    type Task{
        _id:ID,
        title: String!,
        description: String!,
        hour: Int
    }
    type User{
        _id:ID
        firstName:String!
        lastName:String!
        age:Int!
        tasks:[Task]
    }
    type Mutation{
        createUser(input: UserInput): User
        createTask(input: TaskInput): Task
        deleteUser(_id:ID):User
    }
    input TaskInput{
        title: String!
        description: String!
        hour: Int
    }
    input UserInput{
        firstName:String!
        lastName:String!
        age:Int!
        tasks:ID
    }
`
export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers: resolvers
})