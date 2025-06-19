const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// ------------------------
// Strings

// 1. Sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Four animal names (skip horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Animal colors (skip horse and chicken)
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// ------------------------
// Arrays

// 4. Full rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Initials (skip indigo)
const [r, o, y, g, b, , v] = colors;

// 6. Only indigo using indg
const [ , , , , , indg] = colors;

// ------------------------
// Objects

// 7. Destructure muppet
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure song2 and song4, plus job and partner from nestedMuppet
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;
