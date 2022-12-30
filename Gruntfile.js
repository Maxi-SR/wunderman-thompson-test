module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['src/*.js', 'src/validations/*.js'],
        dest: 'dist/app.min.js'
      }
    },

    cssmin: {
      build: {
        src: ['assets/*.css'],
        dest: 'dist/app.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin')
};