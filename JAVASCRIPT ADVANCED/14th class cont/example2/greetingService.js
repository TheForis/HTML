import { words, getRandomWord } from "./messageService.js";

export function helloGreeting(name) {
    console.log(`${getRandomWord(words.helloVariants)} ${name}`);
}
export function byeGreeting(name) {
    console.log(`${getRandomWord(words.goodyeVariants)} ${name}`);
}