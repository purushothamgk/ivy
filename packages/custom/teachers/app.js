'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Teachers = new Module('teachers');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Teachers.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Teachers.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Teachers.menus.add({
    title: 'teachers example page',
    link: 'teachers example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Teachers.aggregateAsset('css', 'teachers.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Teachers.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Teachers.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Teachers.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Teachers;
});
