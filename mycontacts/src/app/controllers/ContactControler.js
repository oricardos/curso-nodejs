const ContactsRepository = require('../repositories/ContactsRepository');

class ContactControler {
  async index(request, response) {
    // lista todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  show() {
    // obter um registro
  }

  store() {
    // criar um registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactControler();
