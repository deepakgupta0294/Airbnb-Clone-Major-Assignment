import mongoose from 'mongoose';



// Defining Schema----registration
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique:true},
    password: { type: String, required: true, trim: true },
    join: { type: Date, default: Date.now }
   })
   
   // Compiling Schema
   const UserModel = mongoose.model('user', userSchema)


//    const cardSchema = new mongoose.Schema({
//     "name": {"type": "string", required: true},
//     "country": {"type": "String", required: true},
//     "price": {"type": "Number", required: true},
//     "summary": {"type": "String"},
//     "bedroom": {"type": "integer", required: true},
//     "bathroom": {"type": "integer", required: true},
//     "address": {"type": "String", required: true},
//     "ratings": {"type": "Number"},
//     "images": {
//         "type": "Array",
//         "items": {"type": "String", required: true}
//     }
// })



  


  const airApiSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    bedroom: {
      type: Number,
      required: true
    },
    bathroom: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    ratings: {
      type: Number,
      required: true
    },
    images: {
      type: [String],
   
      required: true
    }
  });
  
  const Card = mongoose.model('Card', airApiSchema);
  

  




export { UserModel,Card}
// module.exports = { UserModel, CardModel };

