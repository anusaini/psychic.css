module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    'include css': true
                },
                files: {
                    'psychic.css': 'src/psychic.styl',
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'psychic-min.css': ['psychic.css']
                }
            }
        },
        pug: {
            release: {
                options: {
                    pretty: true
                },
                files: {
                    'examples/index.html': 'examples/index.pug'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/**/*.jade', '**/**/*.pug', '**/**/*.styl'],
                tasks: ['default'],
                options: {
                    livereload: true,
                }
            }
        },
        connect: {
           server: {
             options: {
               port: 8000,
               base: 'examples'
             }
           }
         }
    });

    grunt.registerTask('start', ['connect', 'watch']);
    grunt.registerTask('default', ['stylus', 'cssmin', 'pug']);

};
