class pangram {
  constructor(words) {
    this.words = words
  }

  isPangram() {
    if(!this.words) {
      return false
    }
    let cleaned = this.words.toLowerCase()
    return true
   }

}

module.exports = pangram;