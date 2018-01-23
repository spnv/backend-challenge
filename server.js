"use strict"
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))

var data = [{
        catagory: 'Food',
        item: 'Salad'
    },
    {
        catagory: 'Food',
        item: 'Cake'
    },
    {
        catagory: 'Drink',
        item: 'Water'
    },
    {
        catagory: 'Drink',
        item: 'Beer'
    }
]

app.get('/products/:catagory', function (req, res) {

    var result = {
        lists: [],
        count: 0
    }

    result.lists = data.filter(element =>
        element.catagory == req.params.catagory
    );

    result.count = result.lists.length;

    if (result.count == 0) {
        result.message = 'Not match'
        res.status(500).json(result);

    } else {
        result.message = 'success'
        res.json(result);
    }
})

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.listen(3000, function () {
    console.log('app is listening on port 3000');
})