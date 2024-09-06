import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new Schema({
    videoFile:{
        type:String, //cloudinary
        required:true,
    },
    thumbnail:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
     type:Number,
     require:true,
    },
    view:{
        type:Number,
        default:0,
    },
    isPublics:{
        type:Boolean,
        default: true,
    },
    owner:{
     type:Schema.Types.ObjectId,
     ref:"User"
    },

},{timeseries :true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",videoSchema)
