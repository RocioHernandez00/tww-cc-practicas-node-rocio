const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")
const TrackScheme = new mongoose.Schema(
{
 name:{
    type:String
 },
 album:{
    type:String
 },
 cover:{
    type:String,
    validate:{
     validator: (req) => {
        return true;
     },
     message: "ERROR_URL",
    },
 },   
 artistw: {
    name: {
        type:String,
    },
    nickname: {
        type:String,
    },
    nationality: {
        type:String,
    },
 },
 duration: {
    start:{
        type: Number,
    },
    end: {
        type: Number,
    },
 },
 mediaId: {
    type: mongoose.Types.ObjectId,
 },
},
 {
   versionKey: false,
   timestamps: true,
 }
);

TrackScheme.plugin(mongooseDelete, {overrideMethods: "all"});
module.exports = mongoose.model("tracks", TrackScheme)