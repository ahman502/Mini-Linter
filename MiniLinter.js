let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

console.log(`1) Story:\n${story}`);
let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
console.log('\n2) Every single word in the story:');
console.log(storyWords);

console.log('\n3) Total words in the story: ' + storyWords.length);

const betterWords = [];
storyWords.filter(function(word) {
  if(!unnecessaryWords.includes(word)) {
    betterWords.push(word);
  }
});

console.log('\n4) Story with unnecessary words removed:');
console.log(betterWords.join(' '));

console.log('\n5) Total words in the story: ' + betterWords.length);

let reallyNum = 0;
let veryNum = 0;
let basicallyNum = 0;

for(let i = 0; i < betterWords.length; i++) {
  if(betterWords[i] === 'really') {
    reallyNum++;
  }
  else if(betterWords[i] === 'very') {
    veryNum++;
  }
  else if(betterWords[i] === 'basically') {
    basicallyNum++;
  }
}
console.log(`\n6) Overused words:\nWord 'really' used ${reallyNum} times\nWord 'very' used ${veryNum} times\nWord 'basically' used ${basicallyNum} times`);


let separateLines = betterWords.join(' ').split('.').join('\n').split('!').join('\n');
console.log('\n7) Story split in each line (using a period or an exclamation point):\n' + separateLines);

let sentenceNum = 0;

for(let i = 0; i < betterWords.length; i++) {
  if((betterWords[i].includes('!')) || (betterWords[i].includes('.'))) {
    sentenceNum++;
  }
}
 console.log('8) Total sentences in the story: ' + sentenceNum);


