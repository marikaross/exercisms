# Pangram

Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

`The quick brown fox jumps over the lazy dog.`

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

## Running the Test Suite
The provided test suite uses Jasmine. You can install it by opening a terminal window and running the following command:

```bash
npm install -g jasmine
```

Run the test suite from the exercise directory with:

```bash
jasmine pangram.spec.js
```

In many test suites all but the first test have been marked "pending". Once you get a test passing, activate the next one by changing `xit` to `it`.