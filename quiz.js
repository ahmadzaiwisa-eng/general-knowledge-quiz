const quizzes = {
  general: [
    { q: "What is the capital of France?", options: ["London", "Paris", "Rome", "Berlin"], answer: 1 },
    { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
    { q: "Who wrote the national anthem of India?", options: ["Bankim Chandra", "Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu"], answer: 1 },
    { q: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: 1 },
    { q: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: 1 },
    { q: "Which animal is called the King of the Jungle?", options: ["Tiger", "Lion", "Elephant", "Cheetah"], answer: 1 },
    { q: "Which country is called the Land of the Rising Sun?", options: ["China", "Japan", "India", "Korea"], answer: 1 },
    { q: "Which planet is farthest from the Sun?", options: ["Neptune", "Uranus", "Pluto", "Saturn"], answer: 0 },
    { q: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Ganga", "Yangtze"], answer: 1 },
    { q: "National fruit of India?", options: ["Mango", "Banana", "Apple", "Guava"], answer: 0 }
  ],
  movies: [
    { q: "Who directed Titanic?", options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Peter Jackson"], answer: 0 },
    { q: "Which movie features the song 'Hakuna Matata'?", options: ["The Lion King", "Aladdin", "Frozen", "Moana"], answer: 0 },
    { q: "Who played Iron Man?", options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], answer: 1 },
    { q: "Which movie won Best Picture in 2020 Oscars?", options: ["Joker", "Parasite", "1917", "Ford v Ferrari"], answer: 1 },
    { q: "In which movie is 'I'll be back'?", options: ["Terminator", "Die Hard", "Predator", "RoboCop"], answer: 0 },
    { q: "Who voiced Elsa in Frozen?", options: ["Demi Lovato", "Idina Menzel", "Selena Gomez", "Miley Cyrus"], answer: 1 },
    { q: "Which movie has a character named Jack Sparrow?", options: ["Harry Potter", "Pirates of the Caribbean", "Avatar", "The Hobbit"], answer: 1 },
    { q: "Which movie is about a sinking ship?", options: ["Titanic", "Inception", "Jaws", "Aquaman"], answer: 0 },
    { q: "Which animated film features Woody and Buzz?", options: ["Cars", "Toy Story", "Shrek", "Finding Nemo"], answer: 1 },
    { q: "Who played Joker in The Dark Knight?", options: ["Jared Leto", "Heath Ledger", "Joaquin Phoenix", "Jack Nicholson"], answer: 1 }
  ],
  geography: [
    { q: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "Australia"], answer: 1 },
    { q: "Which country has the Great Wall?", options: ["India", "China", "Japan", "Mongolia"], answer: 1 },
    { q: "Which is the smallest country?", options: ["Monaco", "Vatican City", "Malta", "Bhutan"], answer: 1 },
    { q: "Which is the largest desert?", options: ["Sahara", "Thar", "Gobi", "Kalahari"], answer: 0 },
    { q: "Which country is called the Land Down Under?", options: ["Australia", "New Zealand", "South Africa", "Argentina"], answer: 0 },
    { q: "Which river flows through Egypt?", options: ["Amazon", "Ganga", "Nile", "Danube"], answer: 2 },
    { q: "Which mountain is the tallest?", options: ["K2", "Everest", "Kangchenjunga", "Makalu"], answer: 1 },
    { q: "Which ocean is the largest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 1 },
    { q: "Which country is the coldest?", options: ["Russia", "Canada", "Greenland", "Antarctica"], answer: 3 },
    { q: "Which is the hottest continent?", options: ["Asia", "Australia", "Africa", "South America"], answer: 2 }
  ],
  science: [
    { q: "What is H2O?", options: ["Oxygen", "Water", "Hydrogen", "Helium"], answer: 1 },
    { q: "Which planet has rings?", options: ["Mars", "Saturn", "Jupiter", "Venus"], answer: 1 },
    { q: "What force pulls us to Earth?", options: ["Magnetism", "Gravity", "Friction", "Tension"], answer: 1 },
    { q: "What part of the plant makes food?", options: ["Root", "Stem", "Leaf", "Flower"], answer: 2 },
    { q: "What gas do humans breathe in?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: 0 },
    { q: "What organ pumps blood?", options: ["Lungs", "Brain", "Heart", "Kidney"], answer: 2 },
    { q: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: 0 },
    { q: "Which metal is liquid at room temp?", options: ["Gold", "Silver", "Mercury", "Iron"], answer: 2 },
    { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"], answer: 0 },
    { q: "What vitamin do we get from sunlight?", options: ["A", "B", "C", "D"], answer: 3 }
  ],
  music: [
    { q: "Who is known as the King of Pop?", options: ["Elvis Presley", "Michael Jackson", "Freddie Mercury", "Justin Bieber"], answer: 1 },
    { q: "Which instrument has black and white keys?", options: ["Guitar", "Piano", "Violin", "Drums"], answer: 1 },
    { q: "Which singer is called Queen Bey?", options: ["Beyoncé", "Rihanna", "Adele", "Lady Gaga"], answer: 0 },
    { q: "Who sang 'Shape of You'?", options: ["Justin Bieber", "Shawn Mendes", "Ed Sheeran", "Harry Styles"], answer: 2 },
    { q: "Which band sang 'Let it Be'?", options: ["The Beatles", "Queen", "Coldplay", "Pink Floyd"], answer: 0 },
    { q: "Which is a string instrument?", options: ["Flute", "Drums", "Violin", "Trumpet"], answer: 2 },
    { q: "Which female singer is nicknamed RiRi?", options: ["Adele", "Selena Gomez", "Rihanna", "Dua Lipa"], answer: 2 },
    { q: "Which instrument does a drummer play?", options: ["Piano", "Guitar", "Flute", "Drums"], answer: 3 },
    { q: "Who sang 'Baby'?", options: ["Shawn Mendes", "Justin Bieber", "Drake", "Ed Sheeran"], answer: 1 },
    { q: "Which music festival is in California?", options: ["Tomorrowland", "Coachella", "Glastonbury", "Lollapalooza"], answer: 1 }
  ]
};
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 10;
let userAnswers = [];
let quizEnded = false;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('#menu a[onclick]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const onclick = a.getAttribute('onclick') || '';
      const m = onclick.match(/startQuiz\(['"](.+?)['"]\)/);
      if (m && m[1]) startQuiz(m[1]);
    });
  });

  document.getElementById("tryAgainBtn").addEventListener("click", tryAgain);
  document.getElementById("menuBtn").addEventListener("click", backToMenu);
  document.getElementById("reviewBtn").addEventListener("click", reviewAnswers);
});

function shuffleArray(array) {
  return array.map((val,i)=>({val,i,sort:Math.random()}))
              .sort((a,b)=>a.sort-b.sort)
              .map(obj=>obj.val);
}

function startQuiz(type) {
  clearInterval(timer);
  quizEnded = false;
  currentQuiz = quizzes[type] ? [...quizzes[type]] : [];
  currentIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";

  showQuestion();
}

function showQuestion() {
  if (quizEnded) return;
  if (!currentQuiz || currentIndex >= currentQuiz.length) { 
    endQuiz(); 
    return; 
  }

  const q = currentQuiz[currentIndex];
  document.getElementById("progress").innerText = `Question ${currentIndex + 1} of ${currentQuiz.length}`;
  document.getElementById("question").innerText = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  let shuffled = shuffleArray(q.options.map((opt, i) => ({ text: opt, index: i })));
  shuffled.forEach((optObj) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = optObj.text;
    btn.classList.add("quiz-btn");
    btn.dataset.optIndex = String(optObj.index);
    btn.onclick = () => checkAnswer(optObj.index, btn);
    optionsDiv.appendChild(btn);
  });

  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  const timerFill = document.getElementById("timer-fill");
  if (timerFill) timerFill.style.width = "100%";

  timer = setInterval(() => {
    if (quizEnded) clearInterval(timer);
    timeLeft--;
    if (timerFill) timerFill.style.width = `${(timeLeft/10)*100}%`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      userAnswers[currentIndex] = undefined;
      currentIndex++;
      if (!quizEnded) showQuestion();
    }
  }, 1000);
}

function checkAnswer(selected, btn) {
  if (quizEnded) return;
  clearInterval(timer);
  userAnswers[currentIndex] = selected;

  if (selected === currentQuiz[currentIndex].answer) {
    btn.style.backgroundColor="#4CAF50";
    score++; // ✅ FIXED: add score
  } else {
    btn.style.backgroundColor="#e74c3c";
    document.querySelectorAll("#options .quiz-btn").forEach(b=>{
      if(parseInt(b.dataset.optIndex)===currentQuiz[currentIndex].answer) {
        b.style.backgroundColor="#4CAF50";
      }
    });
  }

  document.querySelectorAll(".quiz-btn").forEach(b=>b.disabled=true);
  setTimeout(()=>{ currentIndex++; if(!quizEnded) showQuestion(); },1500);
}

function endQuiz() {
  quizEnded = true;
  clearInterval(timer);

  // hide quiz, show results
  document.getElementById("quiz").style.display="none";
  const resultEl = document.getElementById("result");
  resultEl.style.display="block";

  // ✅ Always show the buttons at the end
  const btnContainer = resultEl.querySelector(".d-flex");
  if (btnContainer) btnContainer.style.display = "flex";

  document.getElementById("score").innerText=`You got ${score} out of ${currentQuiz.length} correct!`;
  document.getElementById("percentage").innerText=`Your score: ${Math.round((score/currentQuiz.length)*100)}%`;

  if(typeof confetti==="function"){
    confetti({particleCount:180,spread:120,origin:{y:0.6}});
  }
}

function tryAgain() {
  clearInterval(timer);
  currentIndex=0; score=0; userAnswers=[]; quizEnded=false;
  document.getElementById("result").style.display="none";
  document.getElementById("review").innerHTML="";
  document.getElementById("quiz").style.display="block";
  showQuestion();
}

function backToMenu() {
  clearInterval(timer);
  currentQuiz=[]; currentIndex=0; score=0; userAnswers=[]; quizEnded=false;
  document.getElementById("quiz").style.display="none";
  document.getElementById("result").style.display="none";
  document.getElementById("review").innerHTML="";
  document.getElementById("menu").style.display="block";
}

function reviewAnswers() {
  const reviewDiv=document.getElementById("review");
  if(!reviewDiv) return;
  if(reviewDiv.classList.contains("active")){
    reviewDiv.classList.remove("active");
    setTimeout(()=>reviewDiv.innerHTML="",500);
    return;
  }
  reviewDiv.innerHTML="";
  currentQuiz.forEach((q,i)=>{
    const userAns=userAnswers[i];
    const correctAns=q.answer;
    const isCorrect=userAns===correctAns;
    const p=document.createElement("p");
    p.innerHTML=`<strong>Q${i+1}:</strong> ${q.q}<br> ➡️ Your Answer: <span class="${isCorrect?'correct':'wrong'}">${userAns!==undefined?q.options[userAns]:"No Answer"} ${isCorrect?"✅":"❌"}</span><br> ✅ Correct Answer: <span class="correct">${q.options[correctAns]}</span>`;
    reviewDiv.appendChild(p);
  });
  reviewDiv.classList.add("active");
}

