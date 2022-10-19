import mongoose from 'mongoose';


const movieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
        }
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.path;
                delete ret.__v;
            }
        }
    }
);


export const Movie = mongoose.model('Movie', movieSchema);
