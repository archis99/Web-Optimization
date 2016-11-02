
module.exports = function(grunt){
    //load 4 plugins that provides "responsive_images", "htmlmin", "uglify", "cssmin" tasks
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
    // for responsive_images
    	responsive_images: {
        dev: {
    		options: {
      			engine: 'gm', //Use of GraphicsMagick
      			sizes: [
            {
      				width: 100,
              height: 100,
      				upscale: true,
              quality: 60
      			}]
    		},
    		files: [{

      			expand: true,
      			src: ['Archisman.jpg'],
            cwd: 'img/',
      			dest: 'img/minified-img/'
    		}]
  		}
    },
    // for htmlmin
    htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        'index.html': 'src/index.html'     // 'destination': 'source'

      }
    },
    // dev: {
    //   files: {
    //     'index.html': 'src/index.html'
    //     // 'dist/contact.html': 'src/contact.html'
    //   }
    // }
  },
  //for uglify
  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'js/minified-js/perfmatters.min.js': ['js/perfmatters.js']
      }
    }
  },
  //for cssmin
  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css/',
      src: ['*.css', '!*.min.css'],
      dest: 'css/minified-css/',
      ext: '.min.css'
    }]
  }
}
});



  grunt.registerTask('default', ['responsive_images','htmlmin','uglify','cssmin']);

};
