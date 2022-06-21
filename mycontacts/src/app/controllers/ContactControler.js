class ContactControler {
  index(request, response) {
    // lista todos os registros
    response.send('Send from Contact Controller');
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
