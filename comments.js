// create web server
// create a file comments.js
// 1. create a web server
// 2. create a file comments.js
// 3. create a page that shows all the comments
// 4. create a page that adds a comment
// 5. create a page that deletes a comment
// 6. create a page that updates a comment

var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

var server = http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);
    var query = querystring.parse(url_parts.query);

    if (url_parts.pathname == '/add') {
        if (query.comment) {
            comments.push(query.comment);
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<a href="/comments">Comments</a>');
    } else if (url_parts.pathname == '/delete') {
        if (query.id) {
            comments.splice(query.id, 1);
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<a href="/comments">Comments</a>');
    } else if (url_parts.pathname == '/update') {
        if (query.id && query.comment) {
            comments[query.id] = query.comment;
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<a href="/comments">Comments</a>');
    } else if (url_parts.pathname == '/comments') {
        var html = '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<title>Comments</title>' +
            '</head>' +
            '<body>';

        for (var i in comments) {
            html += '<p>' + comments[i] + ' <a href="/update?id=' + i + '">Update</a> <a href="/delete?id=' + i + '">Delete</a></p>';
        }

        html += '<form action="/add" method="get">' +
            '<input type="text" name="comment">' +
            '<input type="submit" value="Add Comment">' +
            '</form>' +
            '</body>' +
            '</html>';


