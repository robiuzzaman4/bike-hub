import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    reviewer_name: { type: String, required: true },
    designation: { type: String, required: true },
    photo_url: { type: String, required: true },
    review: { type: String, required: true },
})

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

export default Review;