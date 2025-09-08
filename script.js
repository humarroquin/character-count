"use strict";

const textArea = document.getElementById("text-area");
const charCountDisplay = document.getElementById("char-count");
const wordCountDisplay = document.getElementById("word-count");
const sentenceCountDisplay = document.getElementById("sentence-count");
const readingTimeDisplay = document.getElementById("reading-time");
const excludeSpaces = document.getElementById("exclude-spaces");

function checkText() {
  const text = textArea.value;
  if (!text.trim()) return;

  const charCount = text.split(" ").join("");
  const charCountSpaces = text.length;
  const wordCount = text
    .replace(/[!?\.]/g, "")
    .split(" ")
    .filter((word) => word !== "");
  const sentenceCount = text
    .split(/[.!?]/)
    .filter((item) => item.trim() !== "");
  const wordLength = wordCount.length;

  function pad(num) {
    return num.toString().padStart(2, "0");
  }

  if (excludeSpaces.checked) {
    charCountDisplay.textContent = pad(charCount.length);
  } else {
    charCountDisplay.textContent = pad(charCountSpaces);
  }

  wordCountDisplay.textContent = pad(wordLength);
  sentenceCountDisplay.textContent = pad(sentenceCount.length);

  const wpm = 200;
  const readingTime = Math.ceil(wordLength / wpm);
  readingTimeDisplay.textContent = readingTime < 1 ? "< 1" : readingTime;
}

textArea.addEventListener("input", checkText);
excludeSpaces.addEventListener("change", checkText);
