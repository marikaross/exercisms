class pangram {
  constructor(words) {
    this.words = words
  }

  isPangram() {
    let checkIt = []
    if(!this.words) {
      return false
    }
    let cleaned = this.words.toLowerCase()
    for (let i = 0; i <= cleaned.length; i++) {
      //compare to already existing array of alphabet? 
      //seems inefficient. but could use a count?
      checkIt.push([i])
      if (checkIt.includes([i])) {
        return false
      }
    return true
   }

  }
}

module.exports = pangram

