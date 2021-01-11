import * as mongoose from 'mongoose';

export class UserModel extends mongoose.Document {
    id: string;
    username: string;
    email: string;
    password: string;
   
}



export const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});