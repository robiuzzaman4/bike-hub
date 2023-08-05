import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    blog_title: {
        type: String,
        required: true
    },
    blog_cover: {
        type: String,
        required: true
    },
    blog_read_time: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    points: [{
        point_title: {
            type: String,
            required: true
        },
        point_description: {
            type: String,
            required: true
        }
    }],
    conclusion: {
        type: String,
        required: true
    }
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
