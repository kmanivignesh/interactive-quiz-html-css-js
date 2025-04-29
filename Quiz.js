
let timeLeft = 600;
let quizSubmitted = false;

const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    if (seconds < 10) {
        seconds = '0' + seconds; 
    }
    document.getElementById('time').innerText = `${minutes}:${seconds}`;
    
    // Update time bar width
    const timeBar = document.getElementById('time-bar');
    const totalTime = 600; 
    const remainingPercentage = (timeLeft / totalTime) * 100;
    timeBar.style.width = `${remainingPercentage}%`;
    
  // If time runs out and quiz hasn't been submitted, stop the timer and submit the quiz automatically
    if (timeLeft === 0 && !quizSubmitted) {
        clearInterval(timerInterval);
        submitQuiz();
    } else {
        timeLeft--;
    }
}, 1000);



function submitQuiz() {
    clearInterval(timerInterval); 
    quizSubmitted = true;

    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked'),
        q6: document.querySelector('input[name="q6"]:checked'),
        q7: document.querySelector('input[name="q7"]:checked'),
        q8: document.querySelector('input[name="q8"]:checked'),
        q9: document.querySelector('input[name="q9"]:checked'),
        q10: document.querySelector('input[name="q10"]:checked'),
      
    };

    
    for (let key in answers) {
        if (!answers[key]) {
            alert("Please answer all questions before submitting.");
            return;
        }
    }

    let score = 0;
    let disp1=document.getElementById("disp1");
    let disp2=document.getElementById("disp2");
    let disp3=document.getElementById("disp3");
    let disp4=document.getElementById("disp4");
    let disp5=document.getElementById("disp5");
    let disp6=document.getElementById("disp6");
    let disp7=document.getElementById("disp7");
    let disp8=document.getElementById("disp8");
    let disp9=document.getElementById("disp9");
    let disp10=document.getElementById("disp10");


    if (answers.q1.value === 'd') {
        score++;
        answers.q1.parentNode.style.color = 'green'; 
        disp1.innerText="You are correct";
       disp1.style.textAlign="center";
       disp1.style.color="white";
       disp1.style.backgroundColor="green";
        
    } else {
        answers.q1.parentNode.style.color = 'red'; 
        document.querySelector('input[value="d"][name="q1"]').parentNode.style.color = 'green'; 
        disp1.innerText="You are Wrong";
       disp1.style.textAlign="center";
       disp1.style.color="white";
       disp1.style.backgroundColor="red";
    }
   
    if (answers.q2.value === 'd') {
        score++;
        answers.q2.parentNode.style.color = 'green'; 
       disp2.innerText="You are correct";
      disp2.style.textAlign="center";
      disp2.style.color="white";
      disp2.style.backgroundColor="green";
    } else {
        answers.q2.parentNode.style.color = 'red'; 
        document.querySelector('input[value="d"][name="q2"]').parentNode.style.color = 'green'; 
       disp2.innerText="You are Wrong";
      disp2.style.textAlign="center";
      disp2.style.color="white";
      disp2.style.backgroundColor="red";
    }
  
    if (answers.q3.value === 'c' ) {
        score++;
        answers.q3.parentNode.style.color = 'green';
        disp3.innerText="You are correct";
      disp3.style.textAlign="center";
      disp3.style.color="white";
      disp3.style.backgroundColor="green";
    }else {
        answers.q3.parentNode.style.color = 'red';
        document.querySelector('input[value="c"][name="q3"]').parentNode.style.color = 'green'; 
        disp3.innerText="You are Wrong";
       disp3.style.textAlign="center";
       disp3.style.color="white";
       disp3.style.backgroundColor="red";
    }


    
    if(answers.q4.value === 'd'){
        score++;
        answers.q4.parentNode.style.color = 'green';
        disp4.innerText="You are correct";
      disp4.style.textAlign="center";
      disp4.style.color="white";
      disp4.style.backgroundColor="green"; 
    }else {
        answers.q4.parentNode.style.color = 'red'; 
        document.querySelector('input[value="c"][name="q4"]').parentNode.style.color = 'green'; 
        disp4.innerText="You are Wrong";
       disp4.style.textAlign="center";
       disp4.style.color="white";
       disp4.style.backgroundColor="red";
    }

    if(answers.q5.value === 'd'){
        score++;
        answers.q5.parentNode.style.color = 'green'; 
        disp5.innerText="You are correct";
      disp5.style.textAlign="center";
      disp5.style.color="white";
      disp5.style.backgroundColor="green"; 
    }else {
        answers.q5.parentNode.style.color = 'red'; 
        document.querySelector('input[value="c"][name="q5"]').parentNode.style.color = 'green'; 
        disp5.innerText="You are Wrong";
       disp5.style.textAlign="center";
       disp5.style.color="white";
       disp5.style.backgroundColor="red";
    }

    if(answers.q6.value === 'c'){
        score++;
        answers.q6.parentNode.style.color = 'green';
        disp6.innerText="You are correct";
      disp6.style.textAlign="center";
      disp6.style.color="white";
      disp6.style.backgroundColor="green";  
    }else {
        answers.q6.parentNode.style.color = 'red'; 
        document.querySelector('input[value="c"][name="q6"]').parentNode.style.color = 'green'; 
        disp6.innerText="You are Wrong";
       disp6.style.textAlign="center";
       disp6.style.color="white";
       disp6.style.backgroundColor="red";
    }

    if(answers.q7.value === 'c'){
        score++;
        answers.q7.parentNode.style.color = 'green'; 
        disp7.innerText="You are correct";
      disp7.style.textAlign="center";
      disp7.style.color="white";
      disp7.style.backgroundColor="green";  
    }else {
        answers.q7.parentNode.style.color = 'red'; 
        document.querySelector('input[value="c"][name="q7"]').parentNode.style.color = 'green'; 
        disp7.innerText="You are Wrong";
       disp7.style.textAlign="center";
       disp7.style.color="white";
       disp7.style.backgroundColor="red";
    }

    if(answers.q8.value === 'd'){
        score++;
        answers.q8.parentNode.style.color = 'green'; 
       disp8.innerText="You are correct";
     disp8.style.textAlign="center";
     disp8.style.color="white";
     disp8.style.backgroundColor="green";  
    }else {
        answers.q8.parentNode.style.color = 'red'; 
        document.querySelector('input[value="c"][name="q8"]').parentNode.style.color = 'green'; 
       disp8.innerText="You are Wrong";
      disp8.style.textAlign="center";
      disp8.style.color="white";
      disp8.style.backgroundColor="red";
    }

    if(answers.q9.value === 'c'){
        score++;
        answers.q9.parentNode.style.color = 'green'; 
        disp9.innerText="You are correct";
     disp9.style.textAlign="center";
     disp9.style.color="white";
     disp9.style.backgroundColor="green"; 
    }else {
        answers.q9.parentNode.style.color = 'red'; 
        document.querySelector('input[value="c"][name="q9"]').parentNode.style.color = 'green'; 
        disp9.innerText="You are Wrong";
      disp9.style.textAlign="center";
      disp9.style.color="white";
      disp9.style.backgroundColor="red";
    }

    if(answers.q10.value === 'c'){
        score++;
        answers.q10.parentNode.style.color = 'green'; 
      disp10.innerText="You are correct";
   disp10.style.textAlign="center";
   disp10.style.color="white";
   disp10.style.backgroundColor="green"; 
    }else {
        answers.q10.parentNode.style.color = 'red'; 
        document.querySelector('input[value="c"][name="q10"]').parentNode.style.color = 'green'; 
      disp10.innerText="You are Wrong";
    disp10.style.textAlign="center";
    disp10.style.color="white";
    disp10.style.backgroundColor="red";
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Your score: ${score} out of ${Object.keys(answers).length}`;

    let compliment = '';
        if (score >= 8) {
            compliment = '🎉 Excellent! You have a deep understanding of what makes a home a harbor.';
        } else if (score >= 6) {
            compliment = '👍ko Very good! You seem to grasp the concept of a home harbor quite well.';
        } else if (score >= 4) {
            compliment = '😊 Good effort! You have some understanding of the concept';
        } else {
            compliment = '🌟 Keep exploring! There are many aspects of a home harbor for you to discover.';
        }

        resultContainer.innerHTML += `<div>${compliment}</div>`;

  
        
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => button.checked = false);

    
}