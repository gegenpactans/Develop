/**
 * wrapper function
 */
module.exports = function(grunt) {
    pkg: grunt.file.readJSON('package.json'),
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
}
