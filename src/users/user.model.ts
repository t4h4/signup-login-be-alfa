import * as mongoose from 'mongoose';

export class UserModel extends mongoose.Document {
    id: string;
    username: string;
    email: string;
    password: string;
   
}



export const UserSchema = new mongoose.Schema({
    username: String,
    email: { type : String , unique : true, required : true, dropDups: true },
    password: String,
});