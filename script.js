"use strict";

const textArea = document.getElementById("text-area");
const charCountDisplay = document.getElementById("char-count");
const wordCountDisplay = document.getElementById("word-count");
const sentenceCountDisplay = document.getElementById("sentence-count");
const readingTimeDisplay = document.getElementById("reading-time");

textArea.addEventListener("input", () => {
  const charCount = textArea.value.split(" ").join("");
  const wordCount = textArea.value
    .replace(/[!?\.]/g, "")
    .split(" ")
    .filter((word) => word !== "");
  const sentenceCount = textArea.value
    .split(/[.!?]/)
    .filter((item) => item.trim() !== "");

  charCountDisplay.textContent = charCount.length.toString().padStart(2, "0");
  wordCountDisplay.textContent = wordCount.length.toString().padStart(2, "0");
  sentenceCountDisplay.textContent = sentenceCount.length
    .toString()
    .padStart(2, "0");

  const wpm = 200;
  const readingTime = Math.ceil(wordCount.length / wpm);
  readingTimeDisplay.textContent = readingTime < 1 ? "< 1" : readingTime;
});
