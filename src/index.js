/* DO NOT CHANGE ANYTHING BETWEEN THIS LINE AND THE ONE BELOW */
const _ = {};
/* DO NOT CHANGE ANYTHING ABOVE THIS LINE. */

/* #### PART ONE #### */

/**
 * This test is solved for you.
 *
 * identity
 * Returns whatever value is passed as the argument. This function doesn't
 * seem very useful, but remember it--if a function needs to provide an
 * iterator when the user does not pass one in, this will be handy.
 * @param {any} val
 * @returns {any}
 *
 */
_.identity = function (val) {
  return val;
};

/**
 * first
 * Returns the first element of an array.
 * If n is passed in as a second parameter, it returns the first
 * n elements of that array in a new array.
 * If n is 0, return an empty array.
 * If n is larger than the length of the array, return all the array's elements.
 * @param {Array<any>} array
 * @param {number} n
 * @returns {any | Array<any>} (returns either a single element of the array or a subset of elements)
 */
_.first = function (array, n) {
  if (n === undefined) {
    return array[0];
  }
  const output = [];
  for (let i = 0; i < n; i++) {
    output.push(array[i]);
  }
  return output;
};

/**
 * last
 * The counterpart of first, it returns the *last* elements of the array.
 * If n is passed in as a second parameter, it returns the last
 * n elements of that array in a new array.
 * If n is 0, return an empty array.
 * If n is larger than the length of the array, return all the array's elements.
 * @param {Array<any>} array
 * @param {number} n
 * @returns {any | Array<any>} (returns either a single element of the array or a subset of elements)
 */
_.last = function (array, n) {
  const l = array.length;
  if (n === undefined) {
    return array[l - 1];
  } else if (n >= l) {
    return array;
  } else if (n === 0) {
    return [];
  } else {
    const output = [];
    for (let i = l - n; i < l; i++) {
      output.push(array[i]);
    }
    return output;
  }
};

/**
 * each
 * This is where things get tricky.
 * What we want to do is take a collection and a function.
 * If the collection is an array, we want to:
 * run that function on each element in the array, specifically passing in:
 * * the element as the first parameter
 * * the index in the array as the second parameter
 * * the entire array in the third parameter.
 * If the collection is an object, we want to take:
 * * the value of an entry in the object as a first parameter,
 * * the key of the entry as the second parameter.
 * * the entire object as the third parameter.
 * @param {Array<any> | Object<any>} collection - Array or Object
 * @param {Function} fn
 *   @function fn will have
 *     @param {any} element
 *     @param {number | string} indexOrKey - optional
 *     @param {Array<any> | Object<string, any>} collection - optional
 *     @returns {void} -- the function doesn't return anythying.
 * @returns {void} -- the function doesn't return anything.
 *
 * Some things that might help you:
 *
 * Google 'for...in...'
 * Google 'Array.isArray()'
 *
 */
_.each = function (collection, fn) {
  if (Array.isArray(collection)) {
    for (let i = 0, l = collection.length; i < l; i++) {
      fn(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      fn(collection[key], key, collection);
    }
  }
};

/**
 * indexOf
 * given an array and an testElement, returns the index of the *FIRST* element
 * in the array that matches (=== equals) the testElement.
 * If no element matches the test element in the entire array,
 * return -1;
 * @param {Array<any>} collection
 * @param {any} testElement
 * @returns {number}
 */
_.indexOf = function (collection, testElement) {
  for (let i = 0, l = collection.length; i < l; i++) {
    if (collection[i] === testElement) {
      return i;
    }
  }
  return -1;
};

/**
 * filter
 * given an array and a function that returns a boolean,
 * return an array of all elements in the original array that,
 * if passed into the function, return true.
 * @param {Array<any>} collection
 * @param {Function<any>} test
 *   @function test will have
 *     @param {any} element;
 *     @returns {boolean}
 * @returns {Array<any>}
 *
 * HINT: You don't have to, but you can re-use _.each here!
 */
_.filter = function (collection, test) {
  let passed = [];
  _.each(collection, (element) => {
    if (test(element)) {
      passed.push(element);
    }
  });
  return passed;
};

/**
 * reject
 * given an array and a function that returns a boolean,
 * return an array of all elements in the original array that,
 * if passed into the function, return *false*.
 * Very much the exact opposite of filter.
 * @param {Array<any>} collection
 * @param {Function<any>} test
 *   @function test will have
 *     @param {any} element;
 *     @returns {boolean}
 * @returns {Array<any>}
 *
 * HINT: You don't have to, but you can re-use _.filter here!
 */
_.reject = function (collection, test) {
  return _.filter(collection, (element) => !test(element));
};

/**
 * uniq
 * given an array, returns only unique values of the array.
 * That is - the first time an element appears in an array,
 * that element should remain in the output, but any times
 * after that, it should be omitted.
 * i.e., _.uniq([1, 3, 5, 1, 3, 4])
 * should return [1, 3, 5, 4];
 * @param {Array<any>} collection
 * @returns {Array<any>}
 *
 * The simplest way to solve this may be to use an object, but there's
 * another way using a part of Javascript using Sets.
 *
 * You can also re-use _.filter here if you're clever.
 */
_.uniq = function (collection) {
  const store = {};
  return _.filter(collection, (element) => {
    if (store[element] === undefined) {
      store[element] = element;
      return true;
    }
    return false;
  });
};

/**
 * map
 * given an array and a function, map returns a new array
 * that is a one-to-one map of the output of the function
 * when provided each element.
 *
 * In other words,
 *
 *  _.map([1, 2, 3], function(num) {
 *   return num * num;
 * })
 *
 * should return
 *
 * [1, 4, 9]
 *
 * Like forEach, the function should also have access to the index and
 * full collection.
 *
 * @param {Array<any>} collection
 * @param {Function} fn
 *   @function fn will have
 *     @param {any} element
 *     @param {number} index - optional
 *     @param {Array<any>} collection - optional
 *     @returns {any} -- the function must return *something* even if it's 'undefined'
 * @returns {Array<any>}
 *
 */
_.map = function (collection, fn) {
  const output = [];
  for (let i = 0, l = collection.length; i < l; i++) {
    output.push(fn(collection[i], i, collection));
  }
  return output;
};

/**
 * pluck
 * given an array of similar objects, returns an array of the values
 * of the key property in the objects.
 * 
 * In other words,
 *
 * const people = [
     { name: 'moe', age: 30 },
     { name: 'curly', age: 50 },
   ];

   _.pluck(people, 'name')

   should return 
   ['moe', 'curly']
 *
 * @param {Array<Object>} collection
 * @param {string} key
 * @returns {Array<any>}
 *
 * Hint: You don't have to, but you can re-use _.map() here.
 */
_.pluck = function (collection, key) {
  return _.map(collection, (element) => element[key]);
};

/**
 * reduce
 * Another tricky one.
 * Reduces an array or object to a single value by repetitively calling
 * iterator(accumulator, item) for each item. accumulator should be
 * the return value of the previous iterator call.
 *
 * You can pass in a starting value for the accumulator as the third argument
 * to reduce. If no starting value is passed, the first element is used as
 * the accumulator, and is never passed to the iterator. In other words, in
 * the case where a starting value is not passed, the iterator is not invoked
 * until the second element, with the first element as it's second argument.
 *
 * Example:
 *   let numbers = [1,2,3];
 *   let sum = _.reduce(numbers, function(total, number){
 *     return total + number;
 *   }, 0); // should be 6
 *
 *   let justFive = _.reduce([5], function(total, number){
 *     return total + number * number;
 *   }); // should be 5, regardless of the iterator function passed in
 *          No accumulator is given so the first element is used.
 *
 * @param {Array<any>} collection
 * @param {Function} fn
 *   @function fn will have
 *      @param {any} previousValue
 *      @param {any} currentValue
 *      @param {number} index - optional
 *      @param {Array<any>} collection - optional
 * @param {any} initialValue - optional
 * @returns {any}
 */
_.reduce = function (collection, fn, initialValue) {
  let accum = initialValue === undefined ? collection.shift() : initialValue;
  _.each(collection, (elem, i, coll) => {
    accum = fn(accum, elem, i, coll);
  });
  return accum;
};

/* #### PART TWO #### */

/* Part 2 is not necessarily trickier than part one, but you can use the tools
of Part 1 to solve part 2.  There's going to be a little less hinting this time
around.  Good luck! */

/**
 * contains
 * Returns true if the element is contained anywhere in the array
 * or object,false if the element isn't contained in the array or
 * object.
 *
 * @param {Array<any> | Object} collection - Array or Object
 * @param {any} elem
 * @returns {boolean}
 *
 * Hint: Hey, what happens if you do a for(let...in...) loop on an array
 * instead of an object?
 *
 */
_.contains = function (collection, elem) {
  for (let key in collection) {
    if (elem === collection[key]) {
      return true;
    }
  }
  return false;
};

/**
 * Determine whether all of the elements match a truth test.
 * if no iterator is passed in, it should return
 * 'true' if every element in the array is 'truthy'
 * 'false' if any element in the array is 'falsey'
 * @param {Array<any>} collection
 * @param {function} testFn - optional
 *   @function testFn will have
 *     @param {any} elem
 *     @returns {boolean} -- or something that can cast to Boolean;
 * @returns {boolean}
 *
 * Hint: You *can* re-use _.reduce here, but it's not the most
 * efficient way to solve the problem.
 */
_.every = function (collection, testFn) {
  testFn = testFn || _.identity;
  for (let i = 0, l = collection.length; i < l; i++) {
    if (!testFn(collection[i])) {
      return false;
    }
  }
  return true;
};

/**
 * Like _.every, but we want it to return true if *any* of the
 * items return true on a truth test.
 * @param {Array<any>} collection
 * @param {function} testFn - optional
 *   @function testFn will have
 *     @param {any} elem
 *     @returns {boolean} -- or something that can cast to Boolean;
 * @returns {boolean}
 *
 * Hint: You can re-use _.every here.
 */
_.some = function (collection, testFn) {
  testFn = testFn || _.identity;
  return !_.every(collection, (element) => !testFn(element));
};

/**
 * extend
 *
 * Javascript is weird in that you can call a function with
 * *fewer* than the number of argument - the ones left over will
 * just be undefined
 *
 * But you can *also* call a function with *more* than the
 * number of arguments defined, too.
 *
 * In earlier versions of javascript, you could use the
 * 'arguments' keyword to access an array-like list of
 * all the arguments.
 *
 * For example:
 * function listArguments = () {
 *   var args = Array.from(arguments);
 *   return args;
 * }
 *
 * listArguments(1, 2, 3); // => [1, 2, 3]
 * listArguments('bacon'); // => ['bacon'];
 * listArguments(); // => [];
 *
 * When you get more advanced, you'll learn more about 'spread operators'
 * which have replaced this syntax, but it's still valid, still used,
 * and it's probably best to solve it that way.
 *
 * Here, we want to:
 * Extend a given object with all the properties of the passed in
 * object(s).
 *    * Example:
 *   let obj1 = {key1: "something"};
 *   _.extend(obj1, {
 *     key2: "something new",
 *     key3: "something else new"
 *   }, {
 *     bla: "even more stuff"
 *   }); // obj1 now contains key1, key2, key3 and bla
 *
 * @param {Object} obj - the root object we want to modify
 * @additionalParams {Object(s)} - optional additional objects to merge.
 * @returns {Object obj} We will be returning the EXACT
 *   same object we pass as first param.
 */
_.extend = function (obj) {
  const args = Array.from(arguments);

  // note we skip over the first argument - obj.
  for (let i = 1, l = args.length; i < l; i++) {
    for (let key in args[i]) {
      obj[key] = args[i][key];
    }
  }
  return obj;
};

/**
 * defaults
 * It works exactly like extend, except we *don't* overwrite a key
 * that already exists in the first object.
 * @param {Object} obj
 * @additionalParams {Object(s)} - optional additional objects to merge.
 * @returns {Object obj} We will be returning the EXACT
 *   same object we pass as first param.
 */
_.defaults = function (obj) {
  const args = Array.from(arguments);

  // note we skip over the first argument - obj.
  for (let i = 1, l = args.length; i < l; i++) {
    for (let key in args[i]) {
      if (obj[key] === undefined) {
        obj[key] = args[i][key];
      }
    }
  }
  return obj;
};

/**
 * once
 * This function should return a function that only runs -once-.
 * That is, no matter how many times it is called, it will only
 * run one and exactly one time.
 * @param {Function} fn
 * @returns {Function}
 */
_.once = function (fn) {
  let flag = false;
  return (...args) => {
    if (!flag) {
      fn(...args);
      flag = true;
    }
  };
};

/**
 * memoize
 * This function is extremely useful when you have a function that
 * takes a long time to calculate.
 *
 * Memorize an expensive function's results by storing them.
 * memoize could be renamed to oncePerUniqueArgumentList; memoize does the
 * same thing as once, but based on many sets of unique arguments.
 *
 * _.memoize should return a function that, when called, will check if it has
 * already computed the result for the given argument and return that value
 * instead if possible.
 *
 * Something that might be helpful here is that you can turn almost anything
 * (unless it has a circular reference) into a string with JSON.stringify();
 * @param {Function} fn
 *   @function fn will have
 *   @params {...any}
 *   @returns {any}
 * @returns {Function}
 *   @function returned will have
 *   @params {...any}
 *   @returns {any}
 */
_.memoize = function (fn) {
  const store = {};
  return (...args) => {
    const stringArgs = JSON.stringify(args);
    if (!store[stringArgs]) {
      store[stringArgs] = fn(...args);
    }
    return store[stringArgs];
  };
};

/**
 * delay
 * Delay delays the execution of a function until after a set period of time
 * (in milliseconds) is passed.
 *
 * @param {function} fn
 *   @function fn will have
 *     @param {...any} ...rest - optional
 *     @returns {void} -- no return value.
 * @param {number} waitTime - time in milliseconds to delay execution
 * @param {...any} ...rest - optional. Additional params will be passed the function fn
 * @returns {void} -- no return value.
 * @sideEffect - the param will execute fn(...rest) after the delay time.
 */
_.delay = function (fn, waitTime, ...args) {
  setTimeout(() => {
    fn(...args);
  }, waitTime);
};

/**
 * shuffle
 * shuffle takes an array, *does not modify* the original array,
 * and returns an array with the value shuffled (like a deck of cards)
 *
 * Try to come up with a solution on your own.
 *
 * Two useful functions may be:
 *   Math.random() - returns a random number from 0 to 1 (like 0.38138740)
 *   Math.floor() - rounds *DOWN* a decimal to the nearest integer.
 *
 * After you come up with your solution (or if you get stuck)
 * look at this wikipedia page for more information and try
 * to impliment a "Fisher-Yates shuffle".
 *
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * Note that the Fisher-Yates shuffler *will* modify an array in place,
 * so you'll have to do a slight modification.
 * @param {Array<any>} unshuffled - Do Not Change/Mutate!
 * @returns {Array<any>}
 */
_.shuffle = function (unshuffled) {
  const clone = [...unshuffled]; // unshuffled.slice() also works!
  const l = clone.length;
  for (let i = 0; i < l; i++) {
    let r = Math.floor(Math.random() * l);
    let temp = clone[i];
    clone[i] = clone[r];
    clone[r] = temp;
  }
  return clone;
};

/* #### PART THREE #### */

/* Part three *is* trickier than parts one and two, but by now, you should
   be getting the hang of this.  
   If you have difficulty with this - try to find someone else learning
   JS and collaborate on it.  
*/

/**
 * This function should sort an array based on an iterator
 * that will return the property that the array should be sorted by,
 * then returns the sorted array.
 *
 * The iterator can be a function, as below:
 *
 * const people = [
 *   {name: 'curly', age: 50},
 *   {name: 'moe', age: 30}
 * ]
 * const resultFromFunction = _.sortBy(people, function(person){
 *   return person.age;
 * })
 * // result should be [{name: 'moe': age 30}, {name: 'curly': age 50}]
 *
 * Or it can be a string:
 * const resultFromFunction = _.sortBy(people, 'age')
 *
 * You can use Array.prototype.sort here, but you will need to read up on it.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *
 * @param {Array<any>} collection
 * @param {Function | string} sortCriteria
 *   @if sortCriteria is a {Function}
 *   @function sortCriteria will have
 *     @param {any} item
 *     @returns {any}
 * @returns {Array<any>}
 */
_.sortBy = function (collection, sortCriteria) {
  if (typeof sortCriteria === 'function') {
    return [...collection].sort((a, b) =>
      sortCriteria(a) < sortCriteria(b) ? -1 : 1
    );
  } else {
    return [...collection].sort((a, b) =>
      a[sortCriteria] < b[sortCriteria] ? -1 : 1
    );
  }
};

/**
 * flatten
 * This function should flatten a nested array. For example:
 *
 *  _.flatten([1, [2], [3, [[[4]]]]]); // => [1, 2, 3, 4]
 *
 * Check out Array.isArray()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 *
 * You do not have to do it this way - but this is one problem that may be
 * useful to look up the idea of recursion in computer programming.
 *
 * It's a really neat trick where a function can call *itself* in the middle
 * of it's own execution.
 *
 * See https://users.cs.utah.edu/~germain/PPS/Topics/recursion.html
 *
 * @param {Array<any>} nestedArray
 * @returns {Array<any>}
 */
_.flatten = function (nestedArray) {
  const output = [];
  const clone = [...nestedArray];
  while (clone.length) {
    const element = clone.shift();
    if (Array.isArray(element)) {
      output.push(..._.flatten(element));
    } else {
      output.push(element);
    }
  }
  return output;
};

/**
 * zip
 * This function should zip together arrays into an array of arrays,
 * such that each array index is paired with the other values of that index.
 *
 * For example,
 * const names = ['moe', 'larry', 'curly'];
 * const ages = [30, 40, 50]
 * const leaders = [true];
 *
 *  _.zip(names, ages, leaders);
 *
 * // should return [
 * //  ['moe', 30, true],
 * //  ['larry', 40, undefined],
 * //  ['curly', 50, undefined],
 * // ]
 *
 * Notice that we'll be using the spread notation here to handle
 * the arguments.
 *
 * Look up Spread Syntax:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 * In practice, what this means is that if you list your function as:
 * function example (...params) {
 *   console.log(params);
 * }
 *
 * then the parameters passed in will be treated as an array of parameters.  So:
 *
 * example(1) => // logs [1];
 * example('bill', 'ted') // => logs ['bill', 'ted'];
 * example('moe', 'larry', 'curly') => logs ['moe', 'larry', 'curly'];
 *
 * Like any array, this can be iterated over.
 *
 * @param {...Array<any>} arrays -- Arrays to zip - can be any number of arrays.
 * @returns {Array<Array<any>>}
 */

_.zip = function (...arrays) {
  const maxLength = Math.max(..._.map(arrays, (array) => array.length));
  const output = [];
  for (let i = 0; i < maxLength; i++) {
    const temp = [];
    for (let arr of arrays) {
      temp.push(arr[i]);
    }
    output.push(temp);
  }
  return output;
};

/**
 * intersection
 * This function takes two or more arrays, and only returns those elements
 * that are common to all the arrays passed in as parameters.
 * @param  {...Array<any>} arrays
 * @returns {Array<any>}
 */
_.intersection = function (...arrays) {
  if (arrays.length === 0) {
    return [];
  } else if (arrays.length === 1) {
    return arrays[0];
  }
  return _.filter(arrays[0], (element) =>
    _.every(arrays.slice(1), (restArray) => restArray.includes(element))
  );
};

/**
 * difference
 * This function takes two or more arrays, and only returns those elements
 * of the first array that are NOT found in the other arrays.
 *
 * For example,
 *
 * _.difference([1, 2, 3, 4], [2, 30, 40], [1, 11, 111]);
 * // should return
 * [3, 4]
 *
 * @param {Array<any>} sourceArray
 * @param {...Array<any>} differenceArrays
 * @returns {Array<any>}
 */
_.difference = function (sourceArray, ...differenceArrays) {
  if (differenceArrays.length === 0) {
    return sourceArray;
  }
  return _.filter(sourceArray, (elem) => {
    return _.every(differenceArrays, (diffArray) => !diffArray.includes(elem));
  });
};

/**
 * throttle
 * This function takes a callback function, and a number, throttleTime.
 * It and returns a function that willcall the callback function - but ONLY once per every
 * throttle time.
 *
 * For example, if this is the callback:
 *
 * let count = 0;
 * function increment(){
 *   count++
 * }
 *
 * const throttledIncrement _.throttle(increment, 1000);
 *
 * // then calling throttledIncrement() will only execute every 1000 seconds.
 * So if you tied throttledIncrement to a button on a webpage:
 *
 * [initial press]
 *   throttledIncrement(); // count = 1;
 * [pressed again after 1/2 second]
 *   throttledIncrement(); // count = 1;
 * [pressed again 1/2 second after that]
 *   throttledIncrement(); // count = 2;
 * [pressed three times 1/4 second after that];
 *   throttledIncrement(); // count = 2;
 *   throttledIncrement(); // count = 2;
 *   throttledIncrement(); // count = 2;
 * [pressed again 1 second after that]
 *   throttledIncrement(); // count = 3;
 *
 * @param {Function} callback
 *   @function callback will have
 *     @param {...any} -- any parameters
 *     @returns {void} -- no return.
 * @param {number} throttleTime - time in milliseconds to throttle.
 * @returns {Function}
 */
_.throttle = function (callback, throttleTime) {
  let timeout = null;
  let flag = false;
  return (...params) => {
    if (!timeout || !flag) {
      flag = true;
      timeout = setTimeout(() => {
        flag = false;
      }, throttleTime);
      return callback(...params);
    }
  };
};

/* DO NOT CHANGE ANYTHING BETWEEN THIS LINE AND THE ONE BELOW */
module.exports = _;
/* DO NOT CHANGE ANYTHING ABOVE THIS LINE. */
