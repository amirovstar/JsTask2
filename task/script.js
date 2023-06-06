"use strict";

function passwordToggle(){
    let inp=document.getElementById('input');
    let icon=document.getElementById('eye');

    if(inp.type==='password'){
        inp.type='text';
        icon.className=('fa-solid fa-eye-slash');
    }else{
        inp.type='password';
        icon.className=('fa-solid fa-eye');
    }
}




const textarea = document.getElementById("inputText");

  
  function countWords() {
    const text = textarea.value;
    let wordCount = 0;
    let isWord = false;

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && text[i] !== '\n') {
        if (!isWord) {
          wordCount++;
          isWord = true;
        }
      } else {
        isWord = false;
      }
    }

    return wordCount;
  }

  textarea.addEventListener("input", function() {
    const wordCount = countWords();
    console.log("Word count:", wordCount);
  });
