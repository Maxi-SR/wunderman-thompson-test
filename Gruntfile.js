const sass = require('node-sass'); 

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['src/*.js', 'src/validations/*.js'],
        dest: 'dist/app.min.js'
      }
    },

    concat: {
      dist: {
        src: [
          'assets/*.scss',
        ],
        dest: 'assets/build.scss',
      }
    },

    sass: {

      options: {
        outputStyle: 'compressed',
        implementation: sass 
      },

      build: {
        files: [{
          src: ['assets/build.scss'],
          dest: 'dist/styles.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['uglify', 'concat', 'sass']);

};