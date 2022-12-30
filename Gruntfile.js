module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['src/*.js', 'src/validations/*.js', 'data/*.js'],
        dest: 'js/scripts.min.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};