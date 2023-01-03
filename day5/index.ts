import { file } from "bun";

const parseStacks = (rows: string[]) => {
  const stacks: string[][] = [];
  for (const row of rows) {
    let parts = [];
    if (row.match(/^\s(\d(\s)*)*$/)) {
      break;
    }
    for (let i = 0; i < row.length; i += 3) {
      parts.push(
        row
          .substring(i, i + 3)
          .trim()
          .replace("[", "")
          .replace("]", "")
      );
      i++;
    }
    let j = 0;
    for (const part of parts) {
      if (!stacks[j]) {
        stacks[j] = [];
      }
      if (part.length > 0) {
        stacks[j].push(part);
      }
      j++;
    }
  }
  return stacks;
};

const part1 = async () => {
  const text = await file("day5/input.txt").text();
  const rows = text.split("\n");
  const stacks = parseStacks(rows);
  console.log("stacks", stacks);
  for (const row of rows) {
    // only interested in the instructions now
    if (row.indexOf("move") !== -1) {
      const parts = row.split(" ");
      const how_many = Number.parseInt(parts[1]);
      const from = Number.parseInt(parts[3]) - 1;
      const to = Number.parseInt(parts[5]) - 1;
      for (let i = 0; i < how_many; i++) {
        console.log("from", stacks[from]);
        let movable = stacks[from].shift();
        //let movable = stacks[from].splice(0, 1);
        console.log("moving", movable);
        console.log("to", stacks[to]);
        if (movable) {
          stacks[to].splice(0, 0, movable);
        }
      }
      console.log("-------------------");
    }
  }
  stacks.forEach((stack) => {
    console.log(stack[0]);
  });
};
part1();

const part2 = async () => {
  const text = await file("day5/input.txt").text();
  const rows = text.split("\n");
  const stacks = parseStacks(rows);
  console.log("stacks", stacks);
  for (const row of rows) {
    // only interested in the instructions now
    if (row.indexOf("move") !== -1) {
      const parts = row.split(" ");
      const how_many = Number.parseInt(parts[1]);
      const from = Number.parseInt(parts[3]) - 1;
      const to = Number.parseInt(parts[5]) - 1;
      //for (let i = 0; i < how_many; i++) {
      console.log("from", stacks[from]);
      let movable = stacks[from].splice(0, how_many);
      //let movable = stacks[from].splice(0, 1);
      console.log("moving", movable);
      console.log("to", stacks[to]);
      if (movable) {
        stacks[to].splice(0, 0, ...movable);
      }
      //}
      console.log("-------------------");
    }
  }
  console.log(stacks);
  stacks.forEach((stack) => {
    console.log(stack[0]);
  });
};
part2();
