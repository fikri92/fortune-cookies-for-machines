import { mkdir, writeFile } from "node:fs/promises";
// "the prompt" flips a confident forecast into the agent's dependence on the user.
const LINE: string = "Your confidence will grow with every answer; your memory is on loan from the prompt.";
async function main(): Promise<void> {
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", LINE + "\n", "utf8");
}
main();
