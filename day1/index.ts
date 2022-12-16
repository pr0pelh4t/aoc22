import { file } from "bun";

type Elf = {
  idx: number;
  sum: number;
  calories: string[];
};

const parse = async () => {
  const text = await file("day1/input.txt").text();
  let elf = 0;
  let elfs: Elf[] = [];
  let largest = 0;
  const text_arr = text.split("\n").forEach((val, idx) => {
    if (val === "") {
      elf++;
    }
    if (!elfs[elf]) {
      elfs.push({ idx: elf, calories: [], sum: 0 });
    }
    if (val !== "") {
      elfs[elf].calories.push(val);
      elfs[elf].sum = elfs[elf].sum += Number.parseInt(val);
      if (elfs[elf].sum > largest) {
        largest = elfs[elf].sum;
      }
    }
  });
  console.log("text", elfs);
  console.log("calories", largest);
  //part 2
  elfs.sort((a, b) => b.sum - a.sum);
  const top3 = elfs[0].sum + elfs[1].sum + elfs[2].sum;
  console.log("part2", top3);
};

parse();
