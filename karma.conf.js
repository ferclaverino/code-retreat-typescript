module.exports = function(config){
  config.set({
    preprocessors: {
      'src/**/*.js': ['sourcemap'],
      'test/**/*.js': ['sourcemap']
    },

    files :[
      'src/*.js',
      'test/*.js'
    ],

    exclude: [],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    reporters: ['progress'],

    logLevel: config.LOG_INFO,

    plugins : [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader'
    ]

  });
};
