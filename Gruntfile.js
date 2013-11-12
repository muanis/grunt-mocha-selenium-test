'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    mochaSelenium: {
      	options: {
		// usePromises: true,
		// useChaining: true,
		// useChrome: true
      },
	all: {
	       src: ['test/functional2.js'],
	       options: {
	         browserName: 'chrome',
	         usePromises: true,
	         useChaining: true
	       }
	     }
    },

  });

   grunt.loadNpmTasks("grunt-mocha-selenium");
   grunt.registerTask('test', 'mochaSelenium');
   grunt.registerTask('default', [ 'test']);
};
