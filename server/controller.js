module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const Fortune = [
      "Some men dream of fortunes, others dream of cookies.",
      "At the touch of love, everyone becomes a poet.",
      "Pick battles big enough to matter, small enough to win.",
      "Success is a journey, not a destination.",
      "Society prepares the crime; the criminal commits it.",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * Fortune.length);
    let randomFortune = Fortune[randomIndex];

    res.status(200).send(randomFortune);
  },
};
