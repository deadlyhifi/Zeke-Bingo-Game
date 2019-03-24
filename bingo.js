const maxNumber = 90;
const previous = [];

const randNumberPlaceholder = document.querySelectorAll("#random-number h2");
const generateButton = document.getElementById("generate-random-number");
const prevNumbersPlaceholder = document.getElementById("previous-numbers");
const numberSayingPlaceholder = document.getElementById("number-saying");
const numberExplanationPlaceholder = document.getElementById(
  "number-explanation"
);

const nicknames = {
  1: {
    saying: "Kelly’s Eye kai.",
    explanation:
      'The pun is military slang; possibly a reference to Ned Kelly. After the Valiant comic strip "Kelly’s Eye" where the eponymous Kelly possessed a magic amulet. Fron Ned Kelly’s helmet, the eye slot resembling the number 1.'
  },
  2: {
    saying: "One little duck.",
    explanation: "From the resemblance of the number 2 to a duck."
  },
  3: {
    saying: "Cup of tea.",
    explanation: 'Rhymes with "Three".'
  },
  4: {
    saying: "Knock at the door.",
    explanation: 'Rhymes with "Four".'
  },
  5: {
    saying: "Man alive.",
    explanation: 'Rhymes with "Five".'
  },
  6: {
    saying: "Tom Mix.",
    explanation: "After Tom Mix, a star of silent-era Westerns."
  },
  7: {
    saying: "Luck.",
    explanation: "7 is considered a lucky number in some cultures."
  },
  8: {
    saying: "Garden gate.",
    explanation: 'Rhymes with "Eight".'
  },
  9: {
    saying: "Doctor's Orders.",
    explanation:
      "Number 9 was a laxative pill given out by army doctors in WWII."
  },
  10: {
    saying: "(Theresa’s) Den.",
    explanation:
      "The name refers to whoever currently resides at Number 10 Downing Street."
  },
  11: {
    saying: "Legs eleven.",
    explanation:
      "A reference to the shape of the number resembling a pair of legs, often chicken legs specifically. The players often wolf whistle in response."
  },
  12: {
    saying: "One dozen.",
    explanation: "A reference to there being 12 units in one dozen."
  },
  13: {
    saying: "Unlucky for some.",
    explanation: "A reference to 13 being an unlucky number."
  },
  14: {
    saying: "The Lawnmower.",
    explanation: "The original lawnmower had a 14-inch blade."
  },
  15: {
    saying: "Young and Keen.",
    explanation: "Fifteen rhymes with keen."
  },
  16: {
    saying: "Never been kissed.",
    explanation: "After the song Sweet Sixteen and Never Been Kissed."
  },
  17: {
    saying: "Dancing Queen.",
    explanation:
      "ABBA’s song Dancing Queen has the number mentioned in the lyrics."
  },
  18: {
    saying: "Coming of Age.",
    explanation: "Eighteen is the age of maturity in the UK."
  },
  19: {
    saying: "Goodbye Teens.",
    explanation: "Nineteen is the age after which people stop being teenagers."
  },
  20: {
    saying: "One Score OR Getting Plenty",
    explanation:
      'A reference to there being 20 units in one score. OR Plenty	Rhymes with "Twenty".'
  },
  21: {
    saying: "Key of the Door.",
    explanation: "The traditional age of majority."
  }

  // 22	Two little swans	The numeral 22 resembles the profile of two ducks.[6] Response is often "quack, quack, quack".
  // 23	The Lord is My Shepherd	The first words of Psalm 23 of the Old Testament
  // 24	Double dozen	12 × 2 = 24. Refer to 12 above
  // 25	Duck and dive	Rhymes with "(Twenty) Five"
  // 26	Two and six, half a crown	Pre-decimalised currency in the UK. (See half crown)
  // A to Z	A reference to the fact that there are twenty-six letters in the alphabet
  // 27	Duck and a crutch.	The number 2 looks like a duck (see '2') and the number 7 looks like a crutch.
  // 28	In a state.	"Two and eight" is rhyming slang for "state".
  // 29	Rise and Shine	Rhymes with "(Twenty) Nine"
  // 30	Burlington Bertie	Reference to a music hall song of the same name composed in 1900, and a more famous parody (Burlington Bertie from Bow) written in 1915 specifically the line: "I'm Burlington Bertie I rise at ten-thirty".
  // Dirty Gertie[1]	Common rhyme derived from the given name Gertrude, used as a nickname for the statue La Delivrance installed in North London in 1927. The usage was reinforced by Dirty Gertie from Bizerte, a bawdy song sung by Allied soldiers in North Africa during the Second World War.[7]
  // 31	Get Up and Run[1]	Rhymes with "(Thirty) One"
  // 32	Buckle My Shoe[8]	Rhymes with "(Thirty) Two"
  // 33	All the threes[4]
  // Fish, chips and peas
  // 34	Ask for More	Rhymes with "(Thirty) Four"
  // 35	Jump and Jive[2]	A dance step
  // 36	Triple dozen	3 x 12 = 36. Refer to 12 above
  // 38	Christmas cake	Cockney rhyming slang
  // 39	Steps	From the 39 Steps
  // 40	Life Begins	refers to the proverb 'life begins at forty'
  // 43	down on your knees	This was a phrase that was made popular during wartime by soldiers.
  // 44	Droopy drawers[5]	Rhyme that refers to sagging trousers.[citation needed]
  // 45	Halfway there	Being halfway towards 90
  // 46	up to tricks	rhyming
  // 48	Four Dozen	4 x 12 = 48. Refer to 12 above.
  // 50	It's a bullseye!	Referring to the darts score.
  // Snow White	Referring to 5 – 0, it’s off to work we go
  // 52	Danny La Rue[9]	A reference to drag entertainer Danny La Rue. Also used for other numbers ending in '2' (see '72' below).
  // Chicken vindaloo[1]	Introduced by Butlins in 2003.[1]
  // Deck of Cards	Number of cards in a deck
  // 53	Here comes Herbie	53 is the racing number of Herbie the VW Beetle. Players may reply "beep beep"!
  // 54	Man at the door	Rhymes with "(Fifty) Four"
  // 55	All the fives[4]
  // 56	Shotts Bus[4]	Refers to the former number of the bus from Glasgow to Shotts.
  // 57	Heinz Varieties[4]	Refers to "Heinz 57", the "57 Varieties" slogan of the H. J. Heinz Company.
  // 59	The Brighton Line	Quote from The Importance of Being Earnest.
  // Also, 59 was the starting 2 digits of all original Brighton telephone numbers[citation needed].

  // 60	Grandma's getting frisky	Pretty close to a rhyme with 'sixty'
  // 62	Tickety-boo	Rhymes with "(Sixty) Two"
  // 64	Almost retired	A reference to the former British male age of mandatory retirement - specifically being one year away from it.
  // 65	Retirement age, Stop work[2]	A reference to the former male British age of mandatory retirement.
  // 66	Clickety click[5]	Rhymes with "(Sixty) Six"
  // 67	Stairway to Heaven	Coined by Andrew "CIP" Lavelle
  // 68	Pick a Mate	Coined by Edward James Mackey II
  // 69	Anyway up, Meal for Two, A Favourite of mine[2]	A possible reference to the 69 sex position.
  // 71	Bang on the Drum[2]	Rhymes with "(Seventy) One"
  // 72	Danny La Rue[2]	Rhymes with "(Seventy) Two"
  // 73	Queen Bee. Under The Tree. Lucky 3[10]	Rhymes with "(Seventy) Three"
  // 74	Hit the Floor	Coined by Ann Fitzsimons
  // 76	Trombones[11]	"Seventy-Six Trombones" is a popular marching song, from the musical The Music Man.
  // Was she worth it?	This refers to the pre-decimal price of a marriage licence in Britain, 7/6d. The players shout back "Every Penny"
  // 77	Two little crutches[11]
  // Sunset Strip	From the 1960s television series "77 Sunset Strip". Usually sung by the players.
  // 78	39 more steps	39 + 39 = 78. Refer to 39 being "39 steps" above.
  // 80	Gandhi's Breakfast	"Ate nothing"
  // 81	Fat Lady with a walking stick	The number 8 is supposed to visually represent a lady with ample bosom and hips, while the number 1 is supposed to visually represent a walking stick
  // 83	Time for Tea	Rhymes and scans[12]
  // 84	Seven dozen	7 x 12 = 84. Refer to 12 being "a dozen" above
  // 85	Staying alive[13]	Rhymes with "(Eighty) Five"
  // 86	Between the sticks	Rhymes with "(Eighty) Six". Refers to the position of goalkeeper in football.
  // 87	Torquay in Devon	Rhymes with "(Eighty) Seven". Torquay which is in the county of Devon, rather than one of several other Torquays which were elsewhere in the British Empire.
  // 88	Two Fat Ladies[14]	The number 88 visually represents a lady next to another lady. Refer to 81 above. Players can reply with 'Wobble, wobble.'
  // 89	Nearly there	89 is one away from 90 (the end of the bingo numbers).
  // Almost there
  // 90	Top of the shop[4]	90 is the highest (top) number in bingo. Shop refers to the entire game of bingo (and also rhymes with "top").
};

function generateRandomNumber(max = maxNumber) {
  const number = Math.floor(Math.random() * Math.floor(max - 1)) + 1;
  numberSayingPlaceholder.innerHTML = "";
  numberExplanationPlaceholder.innerHTML = "";

  if (previous.includes(number)) {
    console.log("repeated: ", number);
    generateRandomNumber();
  } else {
    previous.push(number);
    console.log(nicknames[number]);

    randNumberPlaceholder[0].innerHTML = number;

    if (nicknames[number]) {
      numberSayingPlaceholder.innerHTML = nicknames[number].saying;
      numberExplanationPlaceholder.innerHTML = nicknames[number].explanation;
    }

    prevNumbersPlaceholder.innerHTML = previous.join(", ");
    return;
  }
}

generateButton.addEventListener("click", () => {
  generateRandomNumber();
});
