import { UserRepository } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    res.render('users.ejs', {
        users: UserRepository.getAllUsers(),
    })
};

export const getUserById = async (req, res) => {
    
};