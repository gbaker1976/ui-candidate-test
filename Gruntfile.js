module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require("time-grunt")(grunt);

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
          'app/assets/javascripts/{,*/}*.js',
          '!app/assets/javascripts/app.min.js',
          '!app/assets/javascripts/_tmp/app.js'
        ],
        dest: 'app/assets/javascripts/_tmp/app.js'
        // files: {
        //   'app/assets/javascripts/app.min.js': [
        //     'app/bower_components/jquery/dist/jquery.js',
        //     'app/bower_components/jquery-ui/ui/core.js',
        //     'app/bower_components/jquery-ui/ui/widget.js',
        //     'app/bower_components/jquery-ui/ui/mouse.js',
        //     'app/bower_components/jquery-ui/ui/draggable.js',
        //     'app/assets/javascripts/{,*/}*.js',
        //     '!app/assets/javascripts/app.min.js',
        //     '!app/assets/javascripts/_tmp/app.js'
        //   ],
        //   'app/tests/all-tests.js': [
        //     'app/assets/javascripts/app.min.js',
        //     'app/tests/test.js'
        //   ]
        // }
      }
    },

    uglify: {
      dist: {
        options: {
          compress: false,
          mangle: false
        },
        // files: {
        //   'app/assets/javascripts/app.min.js': [
        //     'app/bower_components/jquery/dist/jquery.js',
        //     'app/bower_components/jquery-ui/ui/core.js',
        //     'app/bower_components/jquery-ui/ui/widget.js',
        //     'app/bower_components/jquery-ui/ui/mouse.js',
        //     'app/bower_components/jquery-ui/ui/draggable.js',
        //     'app/assets/javascripts/{,*/}*.js',
        //     '!app/assets/javascripts/app.min.js',
        //     '!app/assets/javascripts/_tmp/app.js'
        //   ],
        //   'app/tests/all-tests.js': [
        //     'app/assets/javascripts/app.min.js',
        //     'app/tests/test.js'
        //   ]
        // }
        src: 'app/assets/javascripts/_tmp/app.js',
        dest: 'app/assets/javascripts/app.min.js'
      }
    },

    // qunit: {
    //   files: ['tests/**/*.html'],
    // },

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
      js: {
        files: ['app/assets/javascripts/{,*/}*.js'],
        tasks: [
          'concat',
          'uglify',
          'jshint',
          'notify:js'
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

    // useminPrepare: {
    //   html: 'app/index.html',
    //   options: {
    //     dest: 'dist',
    //     root: 'app'
    //   }
    // },

    // usemin: {
    //   html: 'dist/index.html',
    //   options: {
    //     assetsDirs: 'dist/'
    //   }
    // },

    notify: {
      scss: {
        options: {
          title: 'Sass compiled',
          message: 'Grunt successfully compiled your Sass files'
        }
      },
      js: {
        options: {
          title: 'JavaScript',
          message: 'Grunt successfully concatenated and uglified your JS files'
        }
      }
    }
  });

  grunt.registerTask("default", [
    "sass",
    "jshint",
    // "qunit",
    "concat",
    "uglify",
    "watch"
  ]);

  // grunt.registerTask("test", [
  //   "jshint",
  //   "qunit"
  // ]);

  grunt.registerTask("build", [

  ]);
};
