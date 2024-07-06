import { Schema } from "mongoose";
import { IAddress, IImage, IName, IUser } from "../../@types/user";
import { nameSchema } from "./name-schema";
import { addressSchema } from "./address-schema";
import { imageSchema } from "./img-schema";

const userSchema = new Schema<IUser>({
  name: nameSchema,
  image: {
    type: imageSchema,
    required: false,
    default: {
      url: "https://www.floranese.co.il/wp-content/uploads/IMG_1385.jpghttps://flowersandmore.co.il/wp-content/uploads/2015/01/IMG_8726-1-e1428956394357-400x400.jpg", 
      alt: "difault profile",
    },
  },
  address: addressSchema,
  phone: {
    required: true,
    type: String,
    minlength: 9,
    maxlength: 15,
  },
  email: {
    unique: true,
    required: true,
    type: String,
    minlength: 7,
    maxlength: 20,
  },
  password: {
    required: true,
    type: String,
    minlength: 7,
    maxlength: 100,
  },
  isAdmin: {
    required: false,
    type: Boolean,
  },
  isBusiness: {
    required: true,
    type: Boolean,
  },
  createdAt: {
    required: false,
    type: Date,
    default: new Date(),
  },
});

export { userSchema };
