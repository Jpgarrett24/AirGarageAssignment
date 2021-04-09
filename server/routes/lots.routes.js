const lotsController = require('../controllers/lots.controller');

module.exports = (app) => {
    app.get('/api/lots/:_location', lotsController.getLots);
};