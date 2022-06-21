const { Router } = require('express');

const ContactControler = require('./app/controllers/ContactControler');

const router = Router();

router.get(
  '/contacts',
  (request, response, next) => {
    request.appId = 'MeuAppID';
    response.send('Intercepted');
    next();
  },
  ContactControler.index,
);
router.get('/contacts/:id', ContactControler.show);
router.delete('/contacts/:id', ContactControler.delete);

module.exports = router;
