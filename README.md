# inquirer-select-directory

A directory prompt for [Inquirer.js](https://github.com/SBoudrias/Inquirer.js).

This project is a fork of [Inquirer-directory](https://github.com/nicksrandall/inquirer-directory) which does not limit the navigation to the current folder.

<!--[![Issue Count](https://codeclimate.com/github/KamiKillertO/inquirer-select-directory/badges/issue_count.svg)](https://codeclimate.com/github/KamiKillertO/inquirer-select-directory)!-->
![](https://img.shields.io/badge/license-MIT-blue.svg)
[![](https://img.shields.io/badge/release-v1.0.2-blue.svg)](https://github.com/KamiKillertO/inquirer-select-directory/releases/tag/v1.0.2)
[![Build Status](https://travis-ci.org/KamiKillertO/inquirer-select-directory.svg)](https://travis-ci.org/KamiKillertO/inquirer-select-directory)
[![Build status](https://ci.appveyor.com/api/projects/status/fdyk5g3y56381742?svg=true)](https://ci.appveyor.com/project/KamiKillertO/inquirer-select-directory)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e6a963539c4440b69356649c0048ea30)](https://www.codacy.com/app/kamikillerto/inquirer-select-directory?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=KamiKillertO/inquirer-select-directory&amp;utm_campaign=Badge_Grade)
<!--
## Installation

```bash
npm install --save inquirer-select-directory
```
-->
## Features

-   Support for symlinked files
-   Vim style navigation
-   Search for file with "/" key

### Key Maps

-   Press "/" key to enter search mode.
-   Press "-" key to go up (back) a directory.
-   Press "." key to select the current directory.

## Usage


This prompt is anonymous, meaning you can register this prompt with the type name you please:

```javascript
inquirer.registerPrompt('directory', require('inquirer-directory'));
inquirer.prompt({
  type: 'directory',
  ...
})
```

Change `directory` to whatever you might prefer.

### Options

Takes `type`, `name`, `message`, `basePath` properties.

See [inquirer](https://github.com/SBoudrias/Inquirer.js) readme for meaning of all except **basePath**.

**basePath** is the relative path from your current working directory

#### Example

```javascript
inquirer.registerPrompt('directory', require('inquirer-directory'));
inquirer.prompt([{
  type: 'directory',
  name: 'from',
  message: 'Where you like to put this component?',
  basePath: './src'
}], function(answers) {
  //etc
});
```
<!--
[![asciicast](https://asciinema.org/a/31651.png)](https://asciinema.org/a/31651)
-->
<!--
See also [example.js](https://github.com/nicksrandall/inquierer-directory/blob/master/example.js) for a working example
-->
## License

MIT