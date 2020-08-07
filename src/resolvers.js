import User from "./models/User"
import Task from "./models/Task"

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World from resolvers'
        },
        greet: (root, args, ctx) => {
            console.log(ctx)
            return args.name
        },
        async Users(){
            return await User.find()
           
        },
        async Tasks(){
            return await Task.find()
           
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const newUser = new User(input)
            await newUser.save();
            console.log(newUser)
            return newUser
        },
        
        async deleteUser(_,{_id}){
            return await User.findByIdAndDelete(_id)
        }
    }
}