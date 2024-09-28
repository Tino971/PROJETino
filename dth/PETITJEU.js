function showStep2() {
    document.getElementById("step2").classList.remove("hidden");
    document.getElementById("step1-button").style.display = "none";
}

function showStep3() {
    document.getElementById("step3").classList.remove("hidden");
    document.getElementById("step2-button").style.display = "none";
}

function showStep4() {
    document.getElementById("step4").classList.remove("hidden");
    document.getElementById("step3-button").style.display = "none";
}

function checkSyllableGuess() {
    const guess = document.getElementById("syllable-guess").value;
    const feedback = document.getElementById("syllable-feedback");
    if (guess == 2) {
        feedback.textContent = "Correct ! Passons à l'étape suivante.";
        feedback.classList.remove("hidden");
        showStep5();
    } else {
        feedback.textContent = "Mauvaise réponse. Essayez encore !";
        feedback.classList.remove("hidden");
    }
}

function showStep5() {
    document.getElementById("step5").classList.remove("hidden");
    document.getElementById("step4").style.display = "none";
}

function checkFinalGuess() {
    const guess = document.getElementById("final-guess").value;
    const feedback = document.getElementById("final-feedback");
    if (guess == 11) {
        feedback.textContent = "Correct ! Voici un petit avertissement.";
        feedback.classList.remove("hidden");
        document.getElementById("final-step").classList.remove("hidden");
        document.getElementById("step5").style.display = "none";
    } else {
        feedback.textContent = "Mauvaise réponse. Réfléchissez bien !";
        feedback.classList.remove("hidden");
    }
}
