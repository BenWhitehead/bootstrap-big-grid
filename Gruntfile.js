'use strict';

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    less: {
      options: {
        report: 'gzip'
      },
      bigGrid: {
        src: ['less/big-grid.less'],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      min: {
        options: {
          cleancss: true
        },
        src: ['less/big-grid.less'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    watch: {
      less: {
        files: 'less/*.less',
        tasks: ['less']
      }
    },

    connect: {
      server: {
        options: {
          port: 8787,
          // Change this to '0.0.0.0' to access the server from outside.
          hostname: 'localhost',
          middleware: function (connect) {
            return [
              mountFolder(connect, "./")
            ];
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['less']);

  grunt.registerTask('server', ['less', 'connect', 'watch']);

};
