const users = [
    { "id": "1",  "name": "John Doe" },
    { "id": "2", "name": "Jane Smith" },
    { "id": "3", "name": "Sam Johnson" },
  ];

export class UserRepository {
    constructor(name){
        this.id=Number(users[users.length-1].id)+1;
        this.name=name;
    }

    static getAllUsers() {
        return users;
    }

    static getUserById(id) {
        return users.find(user => user.id === id);
    }

    static addUser(user) {
        users.push({"id": user.id, "name": user.name});
    }

    static deleteUser(id) {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex!== -1) {
            users.splice(userIndex, 1);
        }
    }
}