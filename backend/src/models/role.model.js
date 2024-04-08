import mongoose, { Schema } from 'mongoose'
import mongooseAggregatePaginate  from 'mongoose-aggregate-paginate-v2' 

const roleSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        }
    },
    { 
        timestamps:true
    }
)

export const Role = mongoose.model("Role", roleSchema)