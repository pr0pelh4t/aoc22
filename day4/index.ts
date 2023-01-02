import { file } from "bun";

type TaskSections = {
  start: number;
  end: number;
};

const part1 = async () => {
  const text = await file("day4/input.txt").text();
  const rows = text.split("\n");
  console.log(rows.length);
  let fullyContainedPairs = 0;
  rows.forEach((row) => {
    //each task pair is split by a comma
    const pair = row.split(",");
    const elf1 = pair[0].split("-");
    const elf2 = pair[1].split("-");
    const range1: TaskSections = {
      start: Number.parseInt(elf1[0]),
      end: Number.parseInt(elf1[1]),
    };
    const range2: TaskSections = {
      start: Number.parseInt(elf2[0]),
      end: Number.parseInt(elf2[1]),
    };
    console.log(range1, range2);
    if (range1.start < range2.start) {
      if (range1.end >= range2.end) {
        console.log("++");
        fullyContainedPairs++;
      }
    }
    if (range1.start === range2.start) {
      if (range1.end >= range2.end) {
        console.log("++");
        fullyContainedPairs++;
      } else if (range2.end >= range1.end) {
        console.log("++");
        fullyContainedPairs++;
      }
    }
    if (range2.start < range1.start) {
      if (range2.end >= range1.end) {
        console.log("++");
        fullyContainedPairs++;
      }
    }
    console.log("--------------");
  });
  console.log("fullyContainedPairs", fullyContainedPairs);
};
part1();

const part2 = async () => {
  const text = await file("day4/input.txt").text();
  const rows = text.split("\n");
  let overlapping = 0;
  for (const row of rows) {
    //each task pair is split by a comma
    const pair = row.split(",");
    const elf1 = pair[0].split("-");
    const elf2 = pair[1].split("-");
    const range1: TaskSections = {
      start: Number.parseInt(elf1[0]),
      end: Number.parseInt(elf1[1]),
    };
    const range2: TaskSections = {
      start: Number.parseInt(elf2[0]),
      end: Number.parseInt(elf2[1]),
    };
    console.log(range1, range2);
    if (range1.start < range2.start) {
      if (range1.end >= range2.start) {
        overlapping++;
      }
    }
    if (range1.start === range2.start) {
      overlapping++;
    }
    if (range2.start < range1.start) {
      if (range2.end >= range1.start) {
        overlapping++;
      }
    }
    console.log("-------------");
  }
  console.log("overlapping", overlapping);
};
part2();
