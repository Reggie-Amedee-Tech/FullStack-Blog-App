const PostController = require('../model/post.modal');

module.exports.createPost = (req,res) => {
    const {title, subTitle, body} = req.body;
    PostController.create({
        title,
        subTitle,
        body
    })
    .then(post => res.json(post))
    .catch(err => res.status(400).send(err))
} 

module.exports.getPosts = (request,response) => {
    PostController.find({})
    .then(res => response.json(res))
    .catch(err => response.status(500).json({message: err}))
}