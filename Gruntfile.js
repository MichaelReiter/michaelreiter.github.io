module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/style.css' : 'css/style.scss',
					'css/apps.css' : 'css/apps.scss'
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