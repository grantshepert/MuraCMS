module.exports = function(grunt) {

  grunt.initConfig({
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [
          //'external/polyfill.js',
          'external/handlebars-v3.0.3.js',
          'src/mura.js',
          'src/mura.loader.js',
          'src/mura.core.js',
          'src/mura.cache.js',
          'src/mura.domselection.js',
          'src/mura.entity.js',
          'src/mura.entitycollection.js',
          'src/mura.feed.js',
          'src/mura.templates.js',
          'src/mura.ui.js',
          'src/mura.init.js'
          ],
          dest: 'dist/mura.js',
        },
    },
    uglify: {
      my_target: {
        files: {
          'global.min.js': ['global.js'],
          'dist/mura.min.js': ['dist/mura.js']
        }
      }
    },
    /*
    handlebars: {
        all: {
            files: {
                'src/mura.templates.js': 'src/templates/*.hbs'
            },
            options: {
                 namespace: 'mura.templates',
            }
        }
    }
    */
  });

  //grunt.loadNpmTasks('grunt-handlebars-compiler');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['concat','uglify']);


};
