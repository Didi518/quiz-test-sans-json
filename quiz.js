function check() {
    var score = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var resultat = document.getElementById('resultat');
    var bonneRep = document.querySelectorAll('.bonneRep');
    var rep = document.querySelectorAll('input');

    if(q1 == "World Wild Web Consortium") {
        bonneRep[0].classList.add('green');
        score++;
    }
    if(q2 == "langage de balisage") {
        bonneRep[1].classList.add('green')
        score++;
    }
    if(q3 == "balises fixes définies par le langage") {
        bonneRep[2].classList.add('green')
        score++;
    }

    if(score < 3) {
        resultat.textContent = `Ton score est de ${score}. 
        Essaye encore !`;
    } else {
        resultat.textContent = `Parfait ! 
        Tu as maîtrisé le Quiz tel un full stack, GG !`;
    }
    resultat.style.letterSpacing = "3px";
    resultat.style.fontSize = "20px";
    resultat.style.fontWeight = "900";
    resultat.style.color = "#B9521B"

    for(var i = 0; i < rep.length; i++) {
        if(rep[i].checked) {
            break
            rep[i].value.classList.add("red")
        }
    }
}