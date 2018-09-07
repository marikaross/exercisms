# Isogram

Determine if a word or phrase is an isogram.

An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.

Examples of isograms:

* lumberjacks
* background
* downstream
* six-year-old

The word isograms, however, is not an isogram, because the `s` repeats.

## Running the Test Suite
The provided test suite uses Jasmine. You can install it by opening a terminal window and running the following command:

```bash
npm install -g jasmine
```

Run the test suite from the exercise directory with:

```bash
jasmine isogram.spec.js
```

In many test suites all but the first test have been marked "pending". Once you get a test passing, activate the next one by changing `xit` to `it`.