const users = [
    { id: "1",  name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Johnson" },
  ];

export class UserRepository {

    getAllUsers() {
        return users;
    }

    getUserById(id) {
        return users.find(user => user.id === id);
    }

    addUser(user) {
        users.push(user);
    }

    deleteUser(id) {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex!== -1) {
            users.splice(userIndex, 1);
        }
    }
}