const PostController = require('../controller/post.controller');

module.exports = function(app) {
    app.post('/api/createPost', PostController.createPost)
    app.get('/api/Posts', PostController.getPosts)
}

