import { file } from "bun";

const lowerCasePriority = (character: string) => {
  return character.charCodeAt(0) - 96;
};

const upperCasePriority = (character: string) => {
  return character.charCodeAt(0) - 64 + 26;
};

const getPriority = (character: string) => {
  if (character.charCodeAt(0) < 97) {
    return upperCasePriority(character);
  } else {
    return lowerCasePriority(character);
  }
};

const part1 = async () => {
  const text = await file("day3/input.txt").text();
  const rows = text.split("\n");
  let prioritySum = 0;
  rows.forEach((row) => {
    const splitpoint = row.length / 2;
    const cmptm1 = row.substring(0, splitpoint);
    const cmptm2 = row.substring(splitpoint);
    let chars = cmptm1.split("");
    let itemInBoth = "";
    chars.forEach((char) => {
      const indexInSecond = cmptm2.indexOf(char);
      if (indexInSecond !== -1) {
        itemInBoth = char;
      }
    });
    let priority = getPriority(itemInBoth);
    console.log("itemInBoth", itemInBoth, priority);
    console.log(cmptm1, cmptm2);
    prioritySum += priority;
  });
  console.log("prioritysum", prioritySum);
};
part1();

const part2 = async () => {
  const text = await file("day3/input.txt").text();
  const rows = text.split("\n");
  let currentGroup: string[] = [];
  let badgePrioritySum = 0;
  for (let i = 0; i < rows.length; i++) {
    if (i % 3 === 0) {
      currentGroup = [];
      console.log("rowindex for group", i);
    }
    currentGroup.push(rows[i]);
    if (currentGroup.length === 3) {
      let chars = currentGroup[0].split("");
      for (let char of chars) {
        const indexInSecond = currentGroup[1].indexOf(char);
        if (indexInSecond !== -1) {
          const indexInThird = currentGroup[2].indexOf(char);
          if (indexInThird !== -1) {
            console.log("char present in all rows ==> BADGE: ", char);
            const badgePriority = getPriority(char);
            badgePrioritySum += badgePriority;
            break;
          }
        }
      }
    }
  }
  console.log("badgePrioritySum", badgePrioritySum);
  /*let prioritySum = 0;
  rows.forEach((row) => {
    const splitpoint = row.length / 2;
    const cmptm1 = row.substring(0, splitpoint);
    const cmptm2 = row.substring(splitpoint);
    let chars = cmptm1.split("");
    let itemInBoth = "";
    chars.forEach((char) => {
      const indexInSecond = cmptm2.indexOf(char);
      if (indexInSecond !== -1) {
        itemInBoth = char;
      }
    });
    let priority = getPriority(itemInBoth);
    console.log("itemInBoth", itemInBoth, priority);
    console.log(cmptm1, cmptm2);
    prioritySum += priority;
  });
  console.log("prioritysum", prioritySum);*/
};
part2();
