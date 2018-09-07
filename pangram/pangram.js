class pangram {
  constructor(words) {
    this.words = words
  }

  isPangram() {
    let letters = [...this.words]
    for (i = 0; i < letters.length; i++) {
      if ([i] == letter.toUpperCase()) {
        return false
      }
    }
  
   }

}

module.exports = pangram;