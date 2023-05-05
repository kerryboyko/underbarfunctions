# UnderbarFunctions

This is a library re-implementing some common tools used by programmers to make programming easier. In this excercise, you're going to be 're-inventing the wheel' somewhat, as many of these functions are now built into the core Javascript library, and others are available via third party libraries, specifically, underscore and lodash.

But, by re-implementing these functions, you get a better understanding of how to use functions, functions-inside-of-functions, functions-returned-from-functions, concepts such as closure... so, by the end of it, you can better understand how higher-order-functions work, and why they make Javascript such a powerful language.

There are many, MANY ways to solve the problems. I have a solutions branch which
has -one particular- answer as to how it could be solved - but how you solve it
is entirely up to you.

If you get stuck, reach out first to a friend also studying javascript, then to a mentor, then if all else fails, look up the answer and try to understand what is going
on in that answer.

## Instructions

### Before Installing

Before you run this program, you should have node.js installed on your computer. Head to [NodeJs.org](https://nodejs.org/en) and follow the instructions for installing the latest LTS version of node on your computer. You should also have git set up on your computer, whether that's through git bash or some other solution.

It is also recommended that you install an IDE editor, such as [Visual Studio Code](https://code.visualstudio.com/) to edit the files.

Once you have those set up, you can either clone this repository, or better still, [fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to your own github account. (That creates a copy of this codebase on your account where you can edit it to your heart's content.) Then [clone your fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) to your own computer (to create a copy on your own computer that you can work on.)

You will want to do your work inside the 'main' branch of this project. Normally you would create a branch called 'develop' and do your work there in the real world, but since no one has to approve your code and this is just an excercise, you can just edit it there.

### To install

To install this program, go to the root directory of the project. It's the directory both this README.md file is in and the very important "package.json". You'll learn more about node and package managers later, but for right now? All you need to do is type some simple commands into the command line.

First, type `npm install`. This will download all the third-party files from the internet that this program needs to run, most notably, a program called 'jest', which is used for testing.

When this is done, you can type `npm run test`. This will execute the jest program, and throw out a whole bunch of errors. Don't worry, this is normal! You'll learn by fixing the errors, one by one. Leave that program running - it will re-run every time you save a change to the code. If for some reason it stops re-running, 'kill' the program (that's a real term!) by hitting control + C in the terminal window, and then run the `npm run test` command again.

### Solving the puzzles

First, you are _only_ going to be editing files located in the `./src` directory. Anything else you should leave as is, especially the "test" folder.

Well - there's one exception. If you want to run ONLY one of the tests (because there are too many error messages from all of the failing tests), you can add '.only' to a test you want to isolate. It will skip all other tests. Just remember to remove .only when you're done with that test.

so, for example, to ONLY run the identity test, go to:

```javascript
  describe('Part 1', () => {
    describe('_.identity', () => {
      it('should return whatever value is passed into it', () => {
        const uniqueObject = {};
        expect(_.identity(1)).toBe(1);
        expect(_.identity('string')).toBe('string');
        expect(_.identity(false)).toBe(false);
        expect(_.identity(uniqueObject)).toBe(uniqueObject);
      });
    });
```

and change the second line to

```javascript
    describe.only('_.identity', () => {
```

Feel free to _look_ at the test folder to get an idea of what exactly we're testing for, and how the functions should operate.

**Read the comments carefully.** They'll provide hints to you as you go along. There are many ways to solve the problems, and while some answers are better than others, we're really looking for any answer that solves the problem.

As the problems are solved, you may be able to -- heck, are encouraged to! -- use the functions you solved earlier inside the functions later to solve the puzzles.

When the jest program finds no errors - congratulations, you've solved the puzzles.

### After you solve the puzzles.

Most of these functions have been built into the javascript language itself on the prototypes of objects and arrays - don't worry if you don't know what a prototype is.

After you solve the puzzles, if you wish, you can go back and see if you can solve
the puzzles in a better way - maybe with fewer loops, or with better variables, or even
just some cleaner syntax that you learned along the way.

Good Luck!
