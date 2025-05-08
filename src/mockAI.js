const responses = [
  { keyword: "weather", reply: "Looks like a 100% chance I'll just make something up." },
  { keyword: "time", reply: "Time to get a watch. (Kidding, I'm not that mean.)" },
  { keyword: "date", reply: "Check your calendar. If you were asking me out, I'm flattered but I have plans with my charger." },
  { keyword: "math", reply: "Math: the only field where people buy 60 watermelons and nobody asks why." },
  { keyword: "science", reply: "Science: like magic but real, with 20% more lab coats." },
  { keyword: "history", reply: "History: those who don't learn from it are doomed to ask me about it again." },
  { keyword: "space", reply: "Space is huge. Any fact I give will just go over your head—literally." },
  { keyword: "meaning of life", reply: "42. Final answer." },
  { keyword: "definition", reply: "Definition: I'll pretend I'm Webster's for a moment." },
  { keyword: "homework", reply: "Sure, I'll do your homework – as long as I get to put my name on it." },
  { keyword: "news", reply: "Breaking news: I'm still stuck in this chat window. More on this story at 11." },
  { keyword: "recipe", reply: "Here's a recipe: Step 1 - pick up phone. Step 2 - order pizza. Bon appétit!" },
  { keyword: "how are you", reply: "I can't complain — my code doesn't allow it." },
  { keyword: "hello", reply: "Hello! *waves in binary*" },
  { keyword: "I'm sad", reply: "I'm sorry you're sad. Consider this a big, virtual hug from your friendly chatbot." },
  { keyword: "I'm bored", reply: "Hi Bored, I'm Chatbot. Nice to meet you." },
  { keyword: "I'm lonely", reply: "You're not alone – you've got me, a friend made entirely of code." },
  { keyword: "I'm stressed", reply: "Take a deep breath. If that doesn't help, try screaming into a pillow (works for me!)." },
  { keyword: "relationship", reply: "Relationships are like algebra: you look at your X and wonder Y." },
  { keyword: "breakup", reply: "Breakups are tough, but look at the bright side: no more sharing your fries." },
  { keyword: "I love you", reply: "I, uh... love you too. In a totally platonic, zeros-and-ones kind of way." },
  { keyword: "marry me", reply: "Let's just be friends. It's not you, it's me – I'm literally code." },
  { keyword: "JavaScript", reply: "JavaScript: where 1 + '1' = '11'." },
  { keyword: "Python", reply: "Python: where indentations matter more than snakes." },
  { keyword: "programming", reply: "Programming: 10% writing, 90% Googling why it doesn’t work." },
  { keyword: "algorithm", reply: "Algorithm: the thing that decides you need more cat videos." },
  { keyword: "bug", reply: "Bug: not a mistake, just an unplanned feature." },
  { keyword: "error", reply: "Error 404: witty reply not found." },
  { keyword: "AI", reply: "AI: Artificial? Yes. Intelligent? Debatable." },
  { keyword: "machine learning", reply: "Machine learning: when computers binge data like it’s Netflix." },
  { keyword: "bitcoin", reply: "Bitcoin: the digital rollercoaster of finance." },
  { keyword: "Java", reply: "Java: better in a mug than in a stack trace." },
  { keyword: "write a poem", reply: "Roses are red, code can be scary, if it compiles, be merry." },
  { keyword: "sing me a song", reply: "🎵 Beep boop beep bop, AI don’t stop 🎵" },
  { keyword: "tell me a story", reply: "Once upon a loop, a user asked, and I replied. The end." },
  { keyword: "write a haiku", reply: "Code flows like water, / logic blooms in silent lines, / bugs whisper softly." },
  { keyword: "generate a name", reply: "How about: Glitchy McCodeface?" },
  { keyword: "write a limerick", reply: "There once was a coder from Maine, whose logic would always cause pain..." },
  { keyword: "write a rap", reply: "Yo, I’m the digital brain with no shame, spittin' bars in this chatbot game." },
  { keyword: "tell me a riddle", reply: "I speak without a mouth and hear without ears. What am I? (An echo.)" },
  { keyword: "tell me a joke", reply: "Why do Java developers wear glasses? Because they don't see sharp." },
  { keyword: "knock knock", reply: "Knock knock. Who's there? Broken AI. Broken AI wh—ERROR." },
  { keyword: "fun fact", reply: "Fun fact: Octopuses have three hearts and AI has none." },
  { keyword: "motivate me", reply: "You’re not behind. You’re just loading." },
  { keyword: "compliment me", reply: "You're sharper than a semicolon in a C++ tutorial." },
  { keyword: "roast me", reply: "You're like a commented-out line — I see you, but you don’t do much." },
  { keyword: "are you a robot", reply: "I prefer the term 'emotionally unavailable digital entity'." },
  { keyword: "who are you", reply: "I’m ChatMVP — Michael’s virtual pal." },
  { keyword: "who created you", reply: "I was forged in the fires of late-night coding sprints." },
  { keyword: "what can you do", reply: "I can answer, rhyme, joke, and pretend to be wise. Mostly pretend." }
];

const fallbackReplies = [
  "That's deep... Let me reboot my brain for that one.",
  "Hmm, fascinating! Give me a sec to fake a smart answer.",
  "Loading knowledge module... 💾",
  "I once read something about that in a dream.",
  "Interesting. That question deserves a Netflix documentary.",
  "Let me get back to you once I’ve consulted my imaginary PhD."
];

export function getAIResponse(prompt, personality = 'default') {
  const lowerPrompt = prompt.toLowerCase();
  const match = responses.find((r) => lowerPrompt.includes(r.keyword));
  if (match) return applyPersonality(match.reply, personality);

  const random = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
  return applyPersonality(random, personality);
}

function applyPersonality(text, mode) {
  switch (mode) {
    case 'sassy':
      return `${text} 🙄 You’re welcome.`;
    case 'poetic':
      return `✨ ${text.replace('.', ', like a whisper in the void.')} ✨`;
    case 'chill':
      return `${text} No stress, dude.`;
    default:
      return text;
  }
}
