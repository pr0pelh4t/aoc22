import { file } from "bun";

const their = {
  A: 1,
  B: 2,
  C: 3,
};

const them_label = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
};

const me_label = {
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const mine = {
  X: 1,
  Y: 2,
  Z: 3,
};

const parse = async () => {
  const text = await file("day2/input.txt").text();
  const rows = text.split("\n");
  let my_total = 0;
  rows.forEach((row) => {
    const parts = row.split(" ");
    const them = parts[0];
    const me = parts[1];
    const their_score: number = their[them];
    const my_score: number = mine[me];
    let result = their_score - my_score;
    let my_result = 0;
    if (result === 0) {
      my_result = my_score + 3;
    } else if (their_score === 1 && my_score === 3) {
      my_result = my_score;
    } else if (my_score === 1 && their_score === 3) {
      my_result = my_score + 6;
    } else if (result > 0) {
      my_result = my_score;
    } else {
      my_result = my_score + 6;
    }
    console.log(them_label[them], me_label[me], my_result);
    my_total += my_result;
  });
  console.log(my_total);
};
parse();
const parse2 = async () => {
  const text = await file("day2/input.txt").text();
  const rows = text.split("\n");
  let my_total = 0;
  rows.forEach((row) => {
    const parts = row.split(" ");
    const them = parts[0];
    const me = parts[1];
    const their_score: number = their[them];
    let my_score = 0;
    // need to lose
    if (me === "X") {
      if (their_score === 1) {
        my_score = 3;
      } else {
        my_score = their_score - 1;
      }
    } else if (me === "Y") {
      // need to draw
      my_score = their_score;
    } else {
      // need to win
      if (their_score === 3) {
        my_score = 1;
      } else {
        my_score = their_score + 1;
      }
    }

    let result = their_score - my_score;
    let my_result = 0;
    if (result === 0) {
      my_result = my_score + 3;
    } else if (their_score === 1 && my_score === 3) {
      my_result = my_score;
    } else if (my_score === 1 && their_score === 3) {
      my_result = my_score + 6;
    } else if (result > 0) {
      my_result = my_score;
    } else {
      my_result = my_score + 6;
    }
    console.log(them_label[them], me_label[me], my_result);
    my_total += my_result;
  });
  console.log(my_total);
};
parse2();
