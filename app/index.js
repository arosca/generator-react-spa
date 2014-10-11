'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ReactSpaGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the incredible React SPA generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'confirmation',
      message: 'Make sure you are in the folder you want to scaffold! \n Continue?'
      // default: true
    }];

    this.prompt(prompts, function (props) {
      this.confirmation = props.confirmation;
      if (this.confirmation) {
        done();
      } else {
        return false;
      }
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');

      this.directory('scripts', 'app/scripts');
      this.directory('styles', 'app/styles');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_gitignore', '.gitignore');
      this.src.copy('index.html', 'app/index.html');
      this.src.copy('README.md', 'README.md');
    },

    gulp: function() {
      this.src.copy('gulpfile.js', 'gulpfile.js');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies({bower: false});
  }
});

module.exports = ReactSpaGenerator;
