const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  index(request, response) {
    try {
      const { orderBy } = request.query;
      // const categories = await CategoriesRepository.findAll(orderBy);
      response.json(categories);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({
      name,
    });

    response.json(category);
  }
}

module.exports = new CategoryController();
