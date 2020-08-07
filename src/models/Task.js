import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    hour: Number
})

export default model('Task',taskSchema)