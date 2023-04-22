const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');
const Post = require('../models/post');
const User = require('../models/user');

exports.getPosts = (req, res, next) => {
  const currPage = +req.query.page || 1;
  const perPage = 2;
  let totalItems;
  Post.find()
    .countDocuments()
    .then((total) => {
      totalItems = total;
      return Post.find()
        .skip((currPage - 1) * perPage)
        .limit(perPage);
    })
    .then((posts) => {
      res
        .status(200)
        .json({ message: 'fetched posts', posts: posts, totalItems });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error('post validation failed');
    err.statusCode = 422;
    throw err;
  }
  console.log(req.body);
  if (!req.file) {
    const err = new Error('No Image Provided');
    err.statusCode = 422;
    throw err;
  }
  const title = req.body.title;
  const content = req.body.content;
  const imageUrl = req.file.path.replace('\\', '/');
  let creator;
  const post = new Post({
    title,
    content,
    imageUrl: imageUrl,
    creator: req.userId,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      return User.findById(req.userId);
    })
    .then((user) => {
      creator = user;
      user.posts.push(post);
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: 'Post Created Successfully!',
        post: post,
        creator: { _id: creator._id, name: creator.name },
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      // if error is thrown in then -> will trigger catch -> which will trigger next
      if (!post) {
        const err = new Error('post not found');
        err.statusCode = 404;
        throw err;
      }
      res.status(200).json({ message: 'Post Fetched', post: post });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updatePost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error('post validation failed');
    err.statusCode = 422;
    throw err;
  }

  const postId = req.params.postId;
  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;

  if (req.file) {
    imageUrl = req.file.path.replace('\\', '/');
  }

  if (!imageUrl) {
    const err = new Error('No Image Provided');
    err.statusCode = 422;
    throw err;
  }
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error('post not found');
        err.statusCode = 404;
        throw err;
      }

      if (post.creator.toString() !== req.userId) {
        const err = new Error('Not Authorized');
        err.statusCode = 403;
        throw err;
      }

      if (imageUrl !== post.imageUrl) {
        clearImage(post.imageUrl);
      }
      post.title = title;
      post.imageUrl = imageUrl;
      post.content = content;
      return post.save();
    })
    .then((result) => {
      res.status(200).json({ message: 'Post Updated', post: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error('post not found');
        err.statusCode = 404;
        throw err;
      }

      if (post.creator.toString() !== req.userId) {
        const err = new Error('Not Authorized');
        err.statusCode = 403;
        throw err;
      }
      // Check logged in user
      clearImage(post.imageUrl);
      return Post.findByIdAndRemove(postId);
    })
    .then((result) => User.findById(req.userId))
    .then((user) => {
      // clearing user relations when post deleted
      user.posts.pull(postId);
      return user.save();
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'Deleted Post' });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
const clearImage = (filepath) => {
  filepath = path.join(__dirname, '..', filepath);
  fs.unlink(filepath, (err) => console.log(err));
};
