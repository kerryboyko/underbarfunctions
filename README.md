# UnderbarFunctions

This is a library re-implementing some common tools used by programmers to make programming easier. In this excercise, you're going to be 're-inventing the wheel' somewhat, as many of these functions are now built into the core Javascript library, and others are available via third party libraries, specifically, underscore and lodash. By re-implementing these functions, you get a better understanding of how to use functions, functions-inside-of-functions, functions-returned-from-functions... by the end of it, you can better understand how higher-order-functions work, and why they make Javascript such a powerful language.

## Instructions

### Before Installing

Before you run this program, you should have node.js installed on your computer. Head to [NodeJs.org](https://nodejs.org/en) and follow the instructions for installing the latest LTS version of node on your computer.

It is also recommended that you install an IDE editor, such as [Visual Studio Code](https://code.visualstudio.com/) to edit the files.

Once you have those set up, you can either clone this repository, or better still, [fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to your own github account. (That creates a copy of this codebase on your account where you can edit it to your heart's content.) Then [clone your fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) to your own computer (to create a copy on your own computer that you can work on.)

### To install

To install this program, go to the root directory of the project. It's the directory both this README.md file is in and the very important "package.json". You'll learn more about node and package managers later, but for right now? All you need to do is type some simple commands into the command line.

First, type `npm install`. This will download all the third-party files from the internet that this program needs to run, most notably, a program called 'jest', which is used for testing.

When this is done, you can type `npm run test`. This will execute the jest program, and throw out a whole bunch of errors. Don't worry, this is normal! You'll learn by fixing the errors, one by one. Leave that program running - it will re-run every time you save a change to the code. If for some reason it stops re-running, 'kill' the program (that's a real term!) by hitting control + C in the terminal window, and then run the `npm run test` command again.

### Solving the puzzles

First, you are _only_ going to be editing files located in the `./src` directory. Anything else you should leave as is, especially the "test" folder.

However, you may feel free to look at the test folder to get an idea of what exactly we're testing for, and how the functions should operate.

Read the comments carefully. They'll provide hints to you as you go along. There are many ways to solve the problems, and while some answers are better than others, we're really looking for any answer that solves the problem.

As the problems are solved, you may be able to -- heck, are encouraged to! -- use the functions you solved earlier inside the functions later to solve the puzzles.

When the jest program finds no errors - congratulations, you've solved the puzzles.

### After you solve the puzzles.

Most of these functions have been built into the javascript language itself on the prototypes of objects and arrays - don't worry if you don't know what a prototype is.

In our test suite, we have specifically disabled those prototypes (so you can't, for example, just use the prototypes to solve the problems.) But knowing what's going on behind the scenes of those prototypes will help you solve those problems.
