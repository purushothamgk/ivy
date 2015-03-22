'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Teachers, app, auth, database) {

  app.get('/teachers/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/teachers/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/teachers/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/teachers/example/render', function(req, res, next) {
    Teachers.render('index', {
      package: 'teachers'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
