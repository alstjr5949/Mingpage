const target = document.querySelector("#typing");

function typingString(){
  const titleArr = ["Welcome to Mingpage", "Have a nice day!", "Thanks for visiting"];
  const selectTitle = titleArr[Math.floor(Math.random() * titleArr.length)];
  const selectTitleArr = selectTitle.split("");
  
  return selectTitleArr;
}

function resetTyping(){
  target.textContent = "";
  typingText(typingString());
}

function typingText(randomText){
  if(randomText.length >0){
    target.textContent += randomText.shift();
    setTimeout(function(){
      typingText(randomText);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

typingText(typingString());

function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);