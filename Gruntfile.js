module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css' : 'css/style.scss',
          'css/projects.css' : 'css/projects.scss',
          'css/resume.css' : 'css/resume.scss',
          'css/contact.css' : 'css/contact.scss',
          'css/about.css' : 'css/about.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['**/*.scss', '*.html', '**/*.js'],
        tasks: ['sass']
      },
      options: {
        livereload: true,
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);

};