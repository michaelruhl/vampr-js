class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let lineage = 0;
    let currentVampire = this;

    while (currentVampire.creator)  {
      currentVampire = currentVampire.creator;
      lineage++;
    }

    return lineage;
  }
  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    // console.log(vampire)
        // if (this === vampire.creator) {
        //   return true;
        // } else{
        //   return false;
        // }
        return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
  }
  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}
const original = new Vampire('original', '1');
const ansel  = new Vampire('Ansel', '1700');
const bart = new Vampire('Bart', '1733');
const edward = new Vampire('Edward', '1815');
const elgort = new Vampire('Elgort', '1920');
const sarah = new Vampire('Sarah', '1977');
const andrew = new Vampire('Andrew', '2019');
original.addOffspring(ansel)
original.addOffspring(bart)
original.addOffspring(edward)
ansel.addOffspring(elgort)
ansel.addOffspring(sarah)
elgort.addOffspring(andrew)
// console.log(vampire)
module.exports = Vampire;

