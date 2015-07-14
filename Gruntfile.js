module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    sass: {
      options: {
        outFile: 'app/assets/stylesheets',
        outputStyle: 'compressed',
        sourceMap: true
      },
      dist: {
        files: {
          'app/assets/stylesheets/styles.css': 'app/assets/stylesheets/styles.scss'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'app/bower_components/jquery/dist/jquery.js',
          'app/bower_components/jquery-ui/ui/core.js',
          'app/bower_components/jquery-ui/ui/widget.js',
          'app/bower_components/jquery-ui/ui/mouse.js',
          'app/bower_components/jquery-ui/ui/draggable.js',
          'app/bower_components/jquery-ui/ui/droppable.js',
          'app/assets/javascripts/{,*/}*.js',
          '!app/assets/javascripts/app.min.js',
          '!app/assets/javascripts/_tmp/app.js'
        ],
        dest: 'app/assets/javascripts/_tmp/app.js'
      }
    },

    uglify: {
      dist: {
        options: {
          compress: false,
          mangle: false
        },
        src: 'app/assets/javascripts/_tmp/app.js',
        dest: 'app/assets/javascripts/app.min.js'
      }
    },

    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:8000/tests/'
          ]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'app/'
        }
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
        ignores: [
          'app/assets/javascripts/app.min.js',
          'app/assets/javascripts/_tmp/*.js'
        ]
      },
      all: [
        'Gruntfile.js',
        'app/assets/javascripts/**/*.js',
        'tests/**/*.js'
      ]
    },

    watch: {
      scss: {
        options: {
          spawn: false
        },
        files: ['app/assets/stylesheets/{,*/}*.scss'],
        tasks: [
          'sass',
          'notify:scss'
        ]
      },
      livereload: {
        options: {
          livereload: true,
          spawn: false
        },
        files: [
          'app/assets/stylesheets/{,*/}*.css',
          'app/assets/javascripts/{,*/}*.js'
        ]
      }
    },

    notify: {
      scss: {
        options: {
          title: 'Sass compiled',
          message: 'Grunt successfully compiled your Sass files'
        }
      },
      build: {
        options: {
          title: 'Build',
          message: 'Build complete'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'sass',
    'jshint',
    'watch'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'concat',
    'uglify',
    'connect',
    'qunit'
  ]);

  grunt.registerTask('build', [
    'sass',
    'concat',
    'uglify',
    'notify:build'
  ]);
};
