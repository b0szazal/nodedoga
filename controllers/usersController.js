import { UserRepository } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    res.render('users.ejs', {
        users: UserRepository.getAllUsers(),
    })
};

export const getUserById = async (req, res) => {
    let url=window.location.href;
    let id = url.substring(url.lastIndexOf('/') + 1);
    res.render("user.ejs", {
        user: UserRepository.getUserById(id)
    });
};

export const deleteUser = async (req, res) => {
    let url=window.location.href;
    let id = url.substring(url.lastIndexOf('/') + 1);
    UserRepository.deleteUser(id);
    res.redirect('/api/users');
}

export const addUser = async (req, res) => {
    let username=req.body.username;
    UserRepository.addUser(new UserRepository(username) );
    res.redirect('/api/users');
}