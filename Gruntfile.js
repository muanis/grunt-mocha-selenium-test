'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    mochaSelenium: {
      options: {
	usePromises: true,
	useChrome: true
      },
      all: ['test/functional2.js']
    },

  });

   grunt.loadNpmTasks("grunt-mocha-selenium");
   grunt.registerTask('test', 'mochaSelenium');
   grunt.registerTask('default', [ 'test']);
};
