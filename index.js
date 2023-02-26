// Using the constructor method, create an InstagramPost() constructor function

// 1.
function InstagramPost(handle, content, imgLink, viewCount, likeCount) {
    this.handle = handle;
    this.content = content;
    this.imgLink = imgLink;
    this.viewCount = viewCount;
    this.likeCount = likeCount;
}

// 2. Create 2 Instagram post objects from the constructor function you created above

const instagramPost1 = new InstagramPost(
  "OdionAkhes",
  "Sunday Funday",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4A51BLdQAPlJPKovgvJLZZxucvq4B_QxnQ&usqp=CAU",234, 75);

console.log(instagramPost1.handle); 
console.log(instagramPost1);

const instagramPost2 = new InstagramPost(
  "teddysPhotos",
  "tatto reveal",
  "http://www.newidea.com.au/media/65454/ed-sheeran-legoland.jpg", 50000, 3670
);
console.log(instagramPost2);

// 3a Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPerson(name, age, location) {
    return {
      name,
      age,
      location
    };
}
// Create an object representing Musa using createPerson() factory function

const musa = createPerson("Musa Dawodu", 17, "Yaba, Lagos")

console.log(musa)



// 3b.  implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments.Then create an object representing Muse’s JAMB scores.

function createJambScores(eng,govt,lit,crk) {
    return {
      ENG:  eng,
     GOVT: govt,
     LIT: lit,
    CRK: crk
 }
}

// create an object representing Muse’s JAMB scores.
const musaJambScores = createJambScores(70, 85, 82, 94);
console.log(musaJambScores)

// Add the object as a property to Musa object you created above in (a) above
musa.jambScores = musaJambScores
console.log(musa)
console.log(musa.jambScores.GOVT);



// 4.What are the different ways you can clone an object? Give examples for each of them.


const firstObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
console.log(firstObject);

//--Option 1 Object.assign();
// example 

const clonedObject1 = Object.assign({}, firstObject);
clonedObject1.a = 2
console.log(clonedObject1)


// -- Option 2 Spread Operator
//example

const clonedObject2 = { ...firstObject };
clonedObject2.a = 3;
console.log(clonedObject2)

// --Option 3 JSON.parse() and JSON.stringify()

const clonedObject3 = JSON.parse(JSON.stringify(firstObject))
clonedObject3.a = 4;
console.log(clonedObject3)



// 5. Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	// ’Omoyele Sowore is the presidential candidate of AAC’
// 

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

// enumeration Method - For..in
for (const party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the pesidential candidate of ${party}`)
}


// Object.keys  


// enumeration MEthod - For..of
for (let [party, candidate] of Object.entries(presidentialCandidates)) {
    console.log(`${candidate} is the presidential candidate of  ${party}`)
}
