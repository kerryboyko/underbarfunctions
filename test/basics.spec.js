const _ = require('../src/index');

describe('UnderbarFunctions', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  // Tests begin here!

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

    describe('_.first', function () {
      it('should be able to pull out the first element of an array', function () {
        expect(_.first([1, 2, 3])).toBe(1);
      });

      it('should accept an index argument', function () {
        expect(_.first([1, 2, 3], 2)).toEqual([1, 2]);
      });

      it('should return empty array if zero is passed in as the index', function () {
        expect(_.first([1, 2, 3], 0)).toEqual([]);
      });

      it("should return all the array's elements if the index argument is larger than the length of the array", function () {
        expect(_.first([1, 2, 3], 5)).toEqual([1, 2, 3]);
      });
    });

    describe('_.last', function () {
      it('should pull the last element from an array', function () {
        expect(_.last([1, 2, 3])).toBe(3);
      });

      it('should accept an index argument', function () {
        expect(_.last([1, 2, 3], 2)).toEqual([2, 3]);
      });

      it('should return empty array if zero is passed in as the index', function () {
        expect(_.last([1, 2, 3], 0)).toEqual([]);
      });

      it("should return all the array's elements if the index argument is larger than the length of the array", function () {
        expect(_.last([1, 2, 3], 5)).toEqual([1, 2, 3]);
      });
    });

    describe('_.each', function () {
      it('should iterate over arrays, providing access to the element, index, and array itself', function () {
        const animals = ['ant', 'bat', 'cat'];
        const iterationInputs = [];

        _.each(animals, function (animal, index, list) {
          iterationInputs.push([animal, index, list]);
        });

        expect(iterationInputs).toEqual([
          ['ant', 0, animals],
          ['bat', 1, animals],
          ['cat', 2, animals],
        ]);
      });

      it('should only iterate over the array elements, not properties of the array', function () {
        const animals = ['ant', 'bat', 'cat'];
        const iterationInputs = [];

        animals.shouldBeIgnored = 'Ignore me!';

        _.each(animals, function (animal, index, list) {
          iterationInputs.push([animal, index, list]);
        });

        expect(iterationInputs).toEqual([
          ['ant', 0, animals],
          ['bat', 1, animals],
          ['cat', 2, animals],
        ]);
      });

      it('should iterate over objects, providing access to the element, index, and object itself', function () {
        const animals = { a: 'ant', b: 'bat', c: 'cat' };
        const iterationInputs = [];

        _.each(animals, function (animal, key, object) {
          iterationInputs.push([animal, key, object]);
        });

        expect(iterationInputs).toEqual([
          ['ant', 'a', animals],
          ['bat', 'b', animals],
          ['cat', 'c', animals],
        ]);
      });
    });

    describe('_.indexOf', function () {
      it('should find 40 in the list', function () {
        const numbers = [10, 20, 30, 40, 50];

        expect(_.indexOf(numbers, 40)).toBe(3);
      });

      it('should be able to compute indexOf even when the native function is undefined', function () {
        const numbers = [10, 20, 30];

        expect(_.indexOf(numbers, 20)).toBe(1);
      });

      it('returns -1 when the target cannot be found not in the list', function () {
        const numbers = [10, 20, 30, 40, 50];

        expect(_.indexOf(numbers, 35)).toBe(-1);
      });

      it('returns the first index that the target can be found at when there are multiple matches', function () {
        const numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];

        expect(_.indexOf(numbers, 40)).toBe(1);
      });
    });

    describe('_.filter', function () {
      it('should return all even numbers in an array', function () {
        const isEven = function (num) {
          return num % 2 === 0;
        };
        const evens = _.filter([1, 2, 3, 4, 5, 6], isEven);

        expect(evens).toEqual([2, 4, 6]);
      });

      it('should return all odd numbers in an array', function () {
        const isOdd = function (num) {
          return num % 2 !== 0;
        };
        const odds = _.filter([1, 2, 3, 4, 5, 6], isOdd);

        expect(odds).toEqual([1, 3, 5]);
      });

      it('should produce a brand new array instead of modifying the input array', function () {
        const isOdd = function (num) {
          return num % 2 !== 0;
        };
        const numbers = [1, 2, 3, 4, 5, 6];
        const evens = _.filter(numbers, isOdd);

        expect(evens).not.toEqual(numbers);
      });
    });

    describe('_.reject', function () {
      it('should reject all even numbers', function () {
        const isEven = function (num) {
          return num % 2 === 0;
        };
        const odds = _.reject([1, 2, 3, 4, 5, 6], isEven);

        expect(odds).toEqual([1, 3, 5]);
      });

      it('should reject all odd numbers', function () {
        const isOdd = function (num) {
          return num % 2 !== 0;
        };
        const evens = _.reject([1, 2, 3, 4, 5, 6], isOdd);

        expect(evens).toEqual([2, 4, 6]);
      });

      it('should produce a brand new array instead of modifying the input array', function () {
        const isOdd = function (num) {
          return num % 2 !== 0;
        };
        const numbers = [1, 2, 3, 4, 5, 6];
        const evens = _.reject(numbers, isOdd);

        expect(evens).not.toEqual(numbers);
      });
    });
    describe('_.uniq', function () {
      it('should return all unique values contained in an unsorted array', function () {
        const numbers = [1, 2, 1, 3, 1, 4];

        expect(_.uniq(numbers)).toEqual([1, 2, 3, 4]);
      });

      it('should handle iterators that work with a sorted array', function () {
        const iterator = function (value) {
          return value + 1;
        };
        const numbers = [1, 2, 2, 3, 4, 4];

        expect(_.uniq(numbers, true, iterator)).toEqual([1, 2, 3, 4]);
      });

      it('should produce a brand new array instead of modifying the input array', function () {
        const numbers = [1, 2, 1, 3, 1, 4];
        const uniqueNumbers = _.uniq(numbers);

        expect(uniqueNumbers).not.toEqual(numbers);
      });
    });
    describe('_.map', function () {
      it('should apply a function to every value in an array', function () {
        const doubledNumbers = _.map([1, 2, 3], function (num) {
          return num * 2;
        });

        expect(doubledNumbers).toEqual([2, 4, 6]);
      });

      it('should produce a brand new array instead of modifying the input array', function () {
        const numbers = [1, 2, 3];
        const mappedNumbers = _.map(numbers, function (num) {
          return num;
        });
        expect(mappedNumbers).toEqual(numbers);
        expect(mappedNumbers).not.toBe(numbers);
      });

      it('has access to index and collection', function () {
        const names = ['harry', 'barry', 'penny'];
        const mappedNames = _.map(names, function (num, index, coll) {
          return `${num}-${index}-${coll.length}`;
        });
        expect(mappedNames).toEqual(['harry-0-3', 'barry-1-3', 'penny-2-3']);
      });
    });
    describe('_.pluck', function () {
      it('should return values contained at a user-defined property', function () {
        const people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 },
        ];

        expect(_.pluck(people, 'name')).toEqual(['moe', 'curly']);
      });

      it('should not modify the original array', function () {
        const people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 },
        ];

        _.pluck(people, 'name');

        expect(people).toEqual([
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 },
        ]);
      });
    });
    describe('_.reduce', function () {
      it('should be able to sum up an array', function () {
        const add = function (tally, item) {
          return tally + item;
        };
        const total = _.reduce([1, 2, 3], add, 0);

        expect(total).toBe(6);
      });

      it('should use the first element as an accumulator when none is given', function () {
        const add = function (tally, item) {
          return tally + item;
        };
        const total = _.reduce([1, 2, 3], add);

        expect(total).toBe(6);
      });

      it('should invoke the iterator on the first element when given an accumulator', function () {
        const sumSquares = function (tally, item) {
          return tally + item * item;
        };
        const total = _.reduce([2, 3], sumSquares, 0);

        expect(total).toBe(13);
      });

      it('should not invoke the iterator on the first element when using it as an accumulator', function () {
        const sumSquares = function (tally, item) {
          return tally + item * item;
        };
        const total = _.reduce([2, 3], sumSquares);

        expect(total).toBe(11);
      });
    });
  });

  describe('Part 2', function () {
    describe('_.contains', function () {
      it('should return false if a collection does not contain a user-specified value', function () {
        expect(_.contains([4, 5, 6], 2)).toBe(false);
      });

      it('should return true if a collection contains a user-specified value', function () {
        expect(_.contains([4, 5, 6], 5)).toBe(true);
      });

      it('should work on objects', function () {
        expect(_.contains({ a: 4, b: 5, c: 6 }, 5)).toBe(true);
      });
    });

    describe('_.every', function () {
      const isEven = function (num) {
        return num % 2 === 0;
      };

      it('passes by default for an empty collection', function () {
        expect(_.every([], _.identity)).toBe(true);
      });

      it('passes for a collection of all-truthy results', function () {
        expect(_.every([true, {}, 1], _.identity)).toBe(true);
      });

      it('fails for a collection of all-falsy results', function () {
        expect(_.every([null, 0, undefined], _.identity)).toBe(false);
      });

      it('fails for a collection containing mixed falsy and truthy results', function () {
        expect(_.every([true, false, 1], _.identity)).toBe(false);
        expect(_.every([1, undefined, true], _.identity)).toBe(false);
      });

      it('should work when provided a collection containing undefined values', function () {
        expect(_.every([undefined, undefined, undefined], _.identity)).toBe(
          false
        );
      });

      it('should cast the result to a boolean', function () {
        expect(_.every([1], _.identity)).toBe(true);
        expect(_.every([0], _.identity)).toBe(false);
      });

      it('should handle callbacks that manipulate the input', function () {
        expect(_.every([0, 10, 28], isEven)).toBe(true);
        expect(_.every([0, 11, 28], isEven)).toBe(false);
      });

      it('should work when no callback is provided', function () {
        expect(_.every([true, true, true])).toBe(true);
        expect(_.every([true, true, false])).toBe(false);
        expect(_.every([false, false, false])).toBe(false);
      });
    });

    describe('_.some', function () {
      const isEven = function (number) {
        return number % 2 === 0;
      };

      it('should fail by default for an empty collection', function () {
        expect(_.some([])).toBe(false);
      });

      it('should pass for a collection of all-truthy results', function () {
        expect(_.some([true, {}, 1], _.identity)).toBe(true);
      });

      it('should fail for a collection of all-falsy results', function () {
        expect(_.some([null, 0, undefined], _.identity)).toBe(false);
      });

      it('should pass for a collection containing mixed falsy and truthy results', function () {
        expect(_.some([true, false, 1], _.identity)).toBe(true);
      });

      it('should pass for a set containing one truthy value that is a string', function () {
        expect(_.some([null, 0, 'yes', false], _.identity)).toBe(true);
      });

      it('should fail for a set containing no matching values', function () {
        expect(_.some([1, 11, 29], isEven)).toBe(false);
      });

      it('should pass for a collection containing one matching value', function () {
        expect(_.some([1, 10, 29], isEven)).toBe(true);
      });

      it('should cast the result to a boolean', function () {
        expect(_.some([1], _.identity)).toBe(true);
        expect(_.some([0], _.identity)).toBe(false);
      });

      it('should work when no callback is provided', function () {
        expect(_.some([true, true, true])).toBe(true);
        expect(_.some([true, true, false])).toBe(true);
        expect(_.some([false, false, false])).toBe(false);
      });
    });

    describe('_.extend', function () {
      it('returns the first argument', function () {
        const to = {};
        const from = {};
        const extended = _.extend(to, from);

        expect(extended).toBe(to);
      });

      it('should extend an object with the attributes of another', function () {
        const to = {};
        const from = { a: 'b' };
        const extended = _.extend(to, from);

        expect(extended.a).toBe('b');
        expect(to.a).toBe('b');
      });

      it('should override properties found on the destination', function () {
        const to = { a: 'x' };
        const from = { a: 'b' };
        const extended = _.extend(to, from);

        expect(extended.a).toBe('b');
      });

      it('should not override properties not found in the source', function () {
        const to = { x: 'x' };
        const from = { a: 'b' };
        const extended = _.extend(to, from);

        expect(extended.x).toBe('x');
      });

      it('should extend from multiple source objects', function () {
        const extended = _.extend({ x: 1 }, { a: 2 }, { b: 3 });

        expect(extended).toEqual({ x: 1, a: 2, b: 3 });
      });

      it("in the case of a conflict, it should use the last property's values when extending from multiple source objects", function () {
        const extended = _.extend({ x: 'x' }, { a: 'a', x: 2 }, { a: 1 });

        expect(extended).toEqual({ x: 2, a: 1 });
      });
    });

    describe('_.defaults', function () {
      it('returns the first argument', function () {
        const to = {};
        const from = {};
        const defaulted = _.defaults(to, from);

        expect(defaulted).toBe(to);
      });

      it('should copy a property if that key is already set on the target', function () {
        var to = {};
        var from = { a: 1 };
        var defaulted = _.defaults(to, from);

        expect(defaulted.a).toBe(1);
      });

      it('should not copy a property if that key is already set on the target', function () {
        var to = { a: 10 };
        var from = { a: 1 };
        var defaulted = _.defaults(to, from);

        expect(defaulted.a).toBe(10);
      });

      it('should not copy a property if that key is already set on the target, even if the value for that key is falsy', function () {
        var to = { a: '', b: NaN };
        var from = { a: 1, b: 2 };
        var defaulted = _.defaults(to, from);

        expect(defaulted.a).toBe('');
        expect(isNaN(defaulted.b)).toBe(true);
      });

      it('prefers the first value found when two objects are provided with properties at the same key', function () {
        var to = {};
        var from = { a: 1 };
        var alsoFrom = { a: 2 };
        var defaulted = _.defaults(to, from, alsoFrom);

        expect(defaulted.a).toBe(1);
      });
    });

    describe.only('_.once', function () {
      it("should only run a user-defined function if it hasn't been run before", function () {
        var num = 0;
        var increment = _.once(function () {
          num += 1;
        });

        increment();
        increment();

        expect(num).toBe(1);
      });
    });

    describe('memoize', function () {
      var add, memoAdd;

      beforeEach(function () {
        add = function (a, b) {
          return a + b;
        };

        memoAdd = _.memoize(add);
      });

      it('should produce the same result as the non-memoized version', function () {
        expect(add(1, 2)).toBe(3);
        expect(memoAdd(1, 2)).toBe(3);
      });

      it('should give different results for different arguments', function () {
        expect(memoAdd(1, 2)).toBe(3);
        expect(memoAdd(3, 4)).toBe(7);
      });

      it('should not run the memoized function twice for any given set of arguments', function () {
        // Here, we wrap a dummy function in a spy. A spy is a wrapper function (much like _.memoize
        // or _.once) that keeps track of interesting information about the function it's spying on;
        // e.g. whether or not the function has been called.
        var spy = jest.fn(() => 'Dummy output');
        var memoSpy = _.memoize(spy);

        expect(memoSpy(10)).toBe('Dummy output');
        expect(spy).toHaveBeenCalledTimes(1);
        expect(memoSpy(10)).toBe('Dummy output');
        expect(memoSpy(10)).toBe('Dummy output');
        expect(memoSpy(10)).toBe('Dummy output');
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });

    describe('_.delay', function () {
      it('should only execute the function after the specified wait time', function () {
        const callback = jest.fn();

        _.delay(callback, 100);

        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(99);
        expect(callback).not.toHaveBeenCalled();
        jest.advanceTimersByTime(1);
        expect(callback).toHaveBeenCalledTimes(1);
      });

      it('should have successfully passed function arguments in', function () {
        const callback = jest.fn();

        _.delay(callback, 100, 1, 2);
        jest.advanceTimersByTime(100);

        expect(callback.mock.calls[0]).toEqual([1, 2]);
      });
    });

    describe('_.shuffle', function () {
      it('should not modify the original object', function () {
        const numbers = [4, 5, 6, 7, 8, 9, 10];
        const shuffled = _.shuffle(numbers).sort();

        expect(shuffled).not.toEqual(numbers);
        expect(numbers).toEqual([4, 5, 6, 7, 8, 9, 10]);
      });
      it('should have the same elements as the original object', function () {
        const numbers = [4, 5, 6, 7, 8, 9, 10];
        const shuffled = _.shuffle(numbers).sort();

        expect(shuffled).toEqual([4, 5, 6, 7, 8, 9, 10]);
      });
      it('should not be in the same order as the original object', function () {
        const numbers = [4, 5, 6, 7, 8, 9, 10];
        const shuffled = _.shuffle(numbers);

        expect(shuffled).to.not.eql([4, 5, 6, 7, 8, 9, 10]);
      });
    });
  });

  describe('Part 3', function () {
    describe('_.invoke, when provided a function reference', function () {
      it('runs the input function on each item in the array, and returns a list of results', function () {
        const reverse = function () {
          return this.split('').reverse().join('');
        };

        const reversedStrings = _.invoke(['dog', 'cat'], reverse);

        expect(reversedStrings).toEqual(['god', 'tac']);
      });
    });

    describe('_.invoke, when provided a method name', function () {
      it('runs the specified method on each item in the array, and returns a list of results', function () {
        const upperCasedStrings = _.invoke(['dog', 'cat'], 'toUpperCase');

        expect(upperCasedStrings).toEqual(['DOG', 'CAT']);
      });
    });

    describe('_.sortBy', function () {
      it('should sort by age', function () {
        const people = [
          { name: 'curly', age: 50 },
          { name: 'moe', age: 30 },
        ];
        people = _.sortBy(people, function (person) {
          return person.age;
        });

        expect(_.pluck(people, 'name')).toEqual(['moe', 'curly']);
      });

      it('should handle undefined values', function () {
        const list = [undefined, 4, 1, undefined, 3, 2];
        const result = _.sortBy(list, function (i) {
          return i;
        });

        expect(result).toEqual([1, 2, 3, 4, undefined, undefined]);
      });

      it('should sort by length', function () {
        const list = ['one', 'two', 'three', 'four', 'five'];
        const sorted = _.sortBy(list, 'length');

        expect(sorted).toEqual(['one', 'two', 'four', 'five', 'three']);
      });

      it('should produce results that change the order of the list as little as possible', function () {
        function Pair(x, y) {
          this.x = x;
          this.y = y;
          return this;
        }

        const collection = [
          new Pair(1, 1),
          new Pair(1, 2),
          new Pair(1, 3),
          new Pair(1, 4),
          new Pair(1, 5),
          new Pair(1, 6),
          new Pair(2, 1),
          new Pair(2, 2),
          new Pair(2, 3),
          new Pair(2, 4),
          new Pair(2, 5),
          new Pair(2, 6),
          new Pair(undefined, 1),
          new Pair(undefined, 2),
          new Pair(undefined, 3),
          new Pair(undefined, 4),
          new Pair(undefined, 5),
          new Pair(undefined, 6),
        ];

        const actual = _.sortBy(collection, function (pair) {
          return pair.x;
        });

        expect(actual).toEqual(collection);
      });
    });

    describe('_.flatten', function () {
      it('can flatten nested arrays', function () {
        const nestedArray = [1, [2], [3, [[[4]]]]];

        expect(_.flatten(nestedArray)).toEqual([1, 2, 3, 4]);
      });
    });

    describe('_.zip', function () {
      it('should zip together arrays of different lengths', function () {
        const names = ['moe', 'larry', 'curly'],
          ages = [30, 40, 50],
          leaders = [true];

        expect(_.zip(names, ages, leaders)).toEqual([
          ['moe', 30, true],
          ['larry', 40, undefined],
          ['curly', 50, undefined],
        ]);
      });
    });

    describe('_.intersection', function () {
      it('should take the set intersection of two arrays', function () {
        const stooges = ['moe', 'curly', 'larry'];
        const leaders = ['moe', 'groucho'];

        expect(_.intersection(stooges, leaders)).toEqual(['moe']);
      });
    });

    describe('_.difference', function () {
      it('should return the difference between two arrays', function () {
        const diff = _.difference([1, 2, 3], [2, 30, 40]);

        expect(diff).toEqual([1, 3]);
      });

      it('should return the difference between three arrays', function () {
        const result = _.difference([1, 2, 3, 4], [2, 30, 40], [1, 11, 111]);

        expect(result).toEqual([3, 4]);
      });
    });

    describe('_.throttle, when given a wait of 100ms', function () {
      it('should return a function callable twice in the first 200ms', function () {
        const callback = jest.fn();
        const fn = _.throttle(callback, 100);
        fn(); // called
        setTimeout(fn, 50); // should not call.
        setTimeout(fn, 100); // should call again.
        setTimeout(fn, 150); // should not call
        setTimeout(fn, 199); // should not call
        jest.advanceTimersByTime(200);

        expect(callback).toHaveBeenCalledTimes(2);
      });
    });
  });
});
