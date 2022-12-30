module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Aquí creamos las tareas

    uglify: {
      build: {
        src: ['src/*.js', 'src/validations/*.js'],
        dest: 'js/scripts.min.js'
      }
    },

    watch: {
      js: {
        files: ['src/*.js','src/validations/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};