import { UserRepository } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    res.render('users.ejs', {
        users: UserRepository.getAllUsers(),
    })
};

export const getUserById = async (req, res) => {
    
};

export const addUser = async (req, res) => {
    let username=req.body.username;
    console.log(username);
    UserRepository.addUser(new UserRepository(username) );
    res.redirect('/api/users');
}