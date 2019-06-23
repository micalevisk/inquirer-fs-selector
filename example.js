/**
 * filesystem prompt selector
 * example
 */

const inquirer = require("inquirer");

inquirer.registerPrompt("directory", require("./index"));

inquirer.prompt([{
  type: "directory",
  name: "fs",
  message: "Choose a file or directory",
  basePath: "./",
  //default: ".git",
  options: {
    displayHidden: true,
    displayFiles: true,
    // ------- features -------
    canSelectFile: true,
    icons: {
      currentDir: '\u{1F4C2}',
      // dir: '\u{1F4C1}',
      // file: '\u{1F4C4}',
    },
    // icons: false, // not show icons
  }
}]).then(function(answers) {
  console.log(answers.fs)
});
