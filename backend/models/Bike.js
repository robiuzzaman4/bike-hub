import mongoose, { Schema } from "mongoose";

// Step 1: Define subdocuments as nested schemas
const frameSpecificationsSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, required: true },
});

const otherBikeSpecsSchema = new Schema({
    type_of_brakes: { type: String, required: true },
    wheel_size: { type: Number, required: true },
    frame_material: { type: String, required: true },
});

const componentDetailsSchema = new Schema({
    fork: { type: String, required: true },
    saddle: { type: String, required: true },
    brakes: { type: String, required: true },
    stem: { type: String, required: true },
    cassette: { type: String, required: true },
    seatpost: { type: String, required: true },
    leviers: { type: String, required: true },
    handlebar: { type: String, required: true },
    rear_tire: { type: String, required: true },
    crank_arms: { type: String, required: true },
    front_tire: { type: String, required: true },
    wheelset: { type: String, required: true },
    crank_arms_length: { type: String, required: true },
    front_derailleur: { type: String, required: true },
    suspension: { type: String, required: true },
    chainring_range_gearing: { type: Number, required: true },
    suspension_travel: { type: String, required: true },
    cassette_range_gearing: { type: String, required: true },
});

// Step 2: Create the main Bike schema
const bikeSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imgSrc: { type: String, required: true },
    frameSpecifications: { type: frameSpecificationsSchema, required: true },
    otherBikeSpecs: { type: otherBikeSpecsSchema, required: true },
    componentDetails: { type: componentDetailsSchema, required: true },
});

// Step 3: Create the Bike model
const Bike = mongoose.models.Bike || mongoose.model('Bike', bikeSchema);

export default Bike;
