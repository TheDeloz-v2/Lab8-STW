import lm1 from "./assets/images/lm1.png";
import lm2 from "./assets/images/lm2.png";
import lm3 from "./assets/images/lm3.png";
import lm4 from "./assets/images/lm4.png";
import lm5 from "./assets/images/lm5.png";
import lm6 from "./assets/images/lm6.png";
import lm7 from "./assets/images/lm7.png";
import lm8 from "./assets/images/lm8.png";

const cards = [
  { id: 1, name: "lm1", image: lm1 },
  { id: 2, name: "lm1", image: lm1 },
  { id: 3, name: "lm2", image: lm2 },
  { id: 4, name: "lm2", image: lm2 },
  { id: 5, name: "lm3", image: lm3 },
  { id: 6, name: "lm3", image: lm3 },
  { id: 7, name: "lm4", image: lm4 },
  { id: 8, name: "lm4", image: lm4 },
  { id: 9, name: "lm5", image: lm5 },
  { id: 10, name: "lm5", image: lm5 },
  { id: 11, name: "lm6", image: lm6 },
  { id: 12, name: "lm6", image: lm6 },
  { id: 13, name: "lm7", image: lm7 },
  { id: 14, name: "lm7", image: lm7 },
  { id: 15, name: "lm8", image: lm8 },
  { id: 16, name: "lm8", image: lm8 },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 16),
  isFlipped: false,
}));