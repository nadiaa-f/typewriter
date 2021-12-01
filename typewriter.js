//objective is to animate a sentence

const sentence = "hello there from lighthouse labs\n"; /* /n fixes bug and creates new line*/
let timer = 0;

for (const char of sentence) { /*loop through each character*/
  setTimeout(() => {
    process.stdout.write(char); /*stdout avoids automatically adding an extra "newline character" at the end each time.*/
  }, timer)
  timer += 50 /*each letter delay its appearance by 50ms (or so) longer than the previous letter.*/
};