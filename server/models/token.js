const tokenSchema = new Schema({ 
    userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true,
    }, 
    token: { type: String, required: true },
    createdAt: {typel: Date, default: Date.now(), expires: 3600} // 1 Hour
});
module.exports=mongoose.model("token",tokenSchema);
