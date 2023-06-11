const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }
    // genre: {
    //   type: String,
    //   enum: ["fantastic", "love"],
    //   required: true,
    // },
    // date: {
    //   type: String,
    //   match: /^\d{2}-\d{2}-\d{4}$/,
    // },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError)


const Contact = model("contact", contactSchema);

module.exports = Contact;
