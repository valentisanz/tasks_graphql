import mongoose from 'mongoose'

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/appdb', {
            useNewUrlParser: true
        })
        console.log(">>>DB IS CONNECTED<<<")
    } catch (e) {
        console.log(">>>SOMETHING WENT WRONG<<<")
        console.log(e)
    }
}
