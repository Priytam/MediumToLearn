/**
 * Created by pjpandey on 7/30/2017.
 */
const controller = require('./controller');

module.exports = route;

function route(app) {
    app.route('/like')
        .get(controller.getLike)
        .post(controller.like)
}

