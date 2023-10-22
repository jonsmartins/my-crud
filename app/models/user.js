import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already Exists.'],
        required: [true, 'Email is required.']
    },
    nome: {
        type: String,
        required: [true, 'Username is required.'],
    },
    senha: {
        type: String,
        required: [true, 'Senha is required.'],
    }
});

const User = models.User || model('User', UserSchema);

export default User;