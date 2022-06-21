const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Ricardo',
    email: 'ricardo@mail.com',
    phone: '1112341234',
    category: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
