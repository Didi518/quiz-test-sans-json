function check() {
    var score = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var resultat = document.getElementById('resultat');
    var quiz = document.getElementById('quiz');
    if(q1 == "World Wild Web Consortium") {
        score++;
    }
    if(q2 == "langage de balisage") {
        score++;
    }
    if(q3 == "balises fixes définies par le langage") {
        score++;
    }
    quiz.style.display = 'none';
    if(score < 3) {
        resultat.textContent = `Ton score est de ${score}. Essaye encore !`
    } else {
        resultat.textContent = `Parfait ! Tu as maîtrisé le Quiz tel un full stack, GG !`
    }
}