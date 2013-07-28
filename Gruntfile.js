module.exports = function( grunt ) {
  var pkg = grunt.file.readJSON('package.json'),
      files = {}, uglyFiles = {}, jshFiles = { before: [], after: [] };

  pkg.languages.forEach(function (lang, index) {
    var name = 'text-countdown-' + pkg.version + '-' + lang;

    files['js/' + name + '.js'] = jshFiles.before = ['src/license.js', 'src/core.js', 'src/' + lang + '.js'];
    uglyFiles['js/' + name + '.min.js'] = jshFiles.after  = ['js/' + name + '.js'];
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: '\n',
      },
      basic_and_extras: {
        files: files
      }
    },

    uglify: {
      my_target: {
        files: uglyFiles
      }
    },

    jshint: {
      beforeconcat: jshFiles.before,
      afterconcat: jshFiles.after
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['concat', 'uglify', 'jshint']);

};
