import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Bike from "./models/Bike.js";
import Review from "./models/Review.js";
import Blog from "./models/Blog.js";

// connect express and define port
const app = express();
const port = process.env.PORT || 5000;

// middlewere
app.use(cors());
app.use(express.json());
dotenv.config();

// mongodb uri
const uri = process.env.URI;

// connect mongoose
const run = async () => {
    try {

        // connect with uri
        mongoose.connect(uri);

        // all api endpoints

        // get all bikes
        app.get("/api/bikes", async (req, res) => {
            try {
                // query 
                const { brand, sortBy } = req.query;
                const query = {};
                if (brand) {
                    query["frameSpecifications.brand"] = brand;
                }

                // sort 
                let sortOption = null;
                if (sortBy === "high_to_low") {
                    sortOption = { price: -1 };
                } else if (sortBy === "low_to_high") {
                    sortOption = { price: 1 };
                }

                // get bikes
                const bikes = await Bike.find(query).sort(sortOption);

                if (!bikes) {
                    res.status(404).send({
                        error: true,
                        message: 'Bikes not found!',
                    })
                }

                // return bikes
                res.send(bikes);

            } catch (error) {
                res.status(500).send({
                    error: true,
                    message: 'Error retrieving bikes!',
                });
            }
        })

        // get all reviews
        app.get("/api/reviews", async (req, res) => {
            try {
                // get reviews
                const reviews = await Review.find();
                if (!reviews) {
                    res.status(404).send({
                        error: true,
                        message: 'Reviews not found!',
                    })
                }

                // return reviews
                res.send(reviews);

            } catch (error) {
                res.status(500).send({
                    error: true,
                    message: 'Error retrieving reviews!',
                });
            }
        })

        // get all blogs
        app.get("/api/blogs", async (req, res) => {
            try {
                // get blogs
                const blogs = await Blog.find();
                if (!blogs) {
                    res.status(404).send({
                        error: true,
                        message: 'Blogs not found!',
                    })
                }

                // return blogs
                res.send(blogs);

            } catch (error) {
                res.status(500).send({
                    error: true,
                    message: 'Error retrieving blogs!',
                });
            }
        })

        // get single blog
        app.get("/api/blogs/:id", async (req, res) => {
            try {
                // get id
                const id = req.params.id;
                // get single blogs
                const blog = await Blog.findById(id);
                if (!blog) {
                    res.status(404).send({
                        error: true,
                        message: 'Blog not found!',
                    })
                }

                // return blogs
                res.send(blog);

            } catch (error) {
                res.status(500).send({
                    error: true,
                    message: 'Error retrieving blog!',
                });
            }
        })

        // check connection
        console.log("mongoose connected!");

    } catch (error) {
        console.log(error.message);
    }
}

// invoke run function
run();

// root directory
app.get("/", (req, res) => {
    res.send(`Bike Hub Server Is Running`);
})

// listen server
app.listen(port, () => {
    console.log(`Bike Hub Server Is Running On Port: ${port}`);
})
