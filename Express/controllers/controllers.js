const User = require("../models/User");

const readUser = async (req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(error){
        res.status(400).json({error : error.message});
    }
};

const createUser = async (req,res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(200).json({
            message : "User Created Successfully",
            user
        });
    }catch(error){
        res.status(400).json({error : error.message});
    }
}

const updateUser = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, body, {new : true});

        if(!updatedUser)
            return res.status(404).json({error : "User not found"});
        res.status(200).json({message :"User updated successfully", data : updatedUser});
    }
    catch(error){
        res.status(400).json({error : error.message});
    }
};

const getUserById = async (req,res) => {
    try{
        id = req.params.id;
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({message : "User is not found"});  //Adding a return statemnt will exit the function if user is not found
        }
        res.status(200).json(user);
    }
    catch(error)
    {
        res.json({error : error.message});
    }
};

const deleteUser = async (req,res) => {
    try{
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message : "User Not Found"}); //Adding a return statemnt will exit the function if user is not found
        }
        res.status(200).json({message : "User Deleted Successfully", data : user});
    }
    catch(error){
        res.json({error : error.message});
    }
}

module.exports = { readUser, createUser, updateUser, getUserById, deleteUser };