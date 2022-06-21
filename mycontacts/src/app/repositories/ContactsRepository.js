const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Ricardo',
    email: 'ricardo@mail.com',
    phone: '1112341234',
    category: v4(),
  },
  {
    id: v4(),
    name: 'teste',
    email: 'teste@mail.com',
    phone: '1112343214',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
