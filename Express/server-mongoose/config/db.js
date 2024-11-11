
const mongoose = require('mongoose'); 
    // useNewUrlParser: true,
    // useUnifiedTopology: true
   

    mongoose.connect("mongodb+srv://ubingi:umesh143@in-aws.jx1yt.mongodb.net/?retryWrites=true&w=majority&appName=In-AWS")
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.error('MongoDB connection error:', error));

