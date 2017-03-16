(function() {

    'use strict';

    var express = require('express');
    var router = express.Router();
    var mongojs = require('mongojs');
    var db = mongojs('todo', ['todos']);

    /* GET Home page */
    router.get('/', function(req, res) {
        res.render('index', { title: 'Pulsatio' });
    });

    /* GET Registration page */
    router.get('/register', function(req, res) {
        res.render('access/register', { title: 'Registro' });
    });

    /* GET Login page */
    router.get('/login', function(req, res) {
        res.render('access/login', { title: 'Login' });
    });

    /* GET Show profile page */
    router.get('/profile/show_profile', function(req, res) {
        res.render('profile/show_profile', { title: 'Perfil' });
    });

    /* GET Edit profile page */
    router.get('/profile/edit_profile', function(req, res) {
        res.render('profile/edit_profile', { title: 'Editar perfil' });
    });

    /* GET Dashboard page  */
    router.get('/dashboard', function(req, res) {
        res.render('dashboard/home', { title: 'Dashboard' });
    });

    /* GET Patients page */
    router.get('/patients', function(req, res) {
        res.render('dashboard/patients', {  title: 'Pacientes' });
    });

    /* GET Locations page */
    router.get('/locations', function(req, res) {
        res.render('dashboard/locations', { title: 'Editar perfil' });
    });

    router.get('/api/todos', function(req, res) {
        db.todos.find(function(err, data) {
            res.json(data);
        });
    });

    router.post('/api/todos', function(req, res) {
        db.todos.insert(req.body, function(err, data) {
            res.json(data);
        });
    });

    router.put('/api/todos', function(req, res) {
        db.todos.update({
            _id: mongojs.ObjectId(req.body._id)
        }, {
            isCompleted: req.body.isCompleted,
            todo: req.body.todo
        }, {}, function(err, data) {
            res.json(data);
        });
    });

    router.delete('/api/todos/:_id', function(req, res) {
        db.todos.remove({
            _id: mongojs.ObjectId(req.params._id)
        }, '', function(err, data) {
            res.json(data);
        });
    });
    
    module.exports = router;

}());