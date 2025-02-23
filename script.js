const questions = [
    { question: "Quraanka kariimka ah wuxuu ka kooban yahay imisa suuradood?", options: ["110", "114", "99", "120"], correct: "B" },
    { question: "Nebigii ugu dambeeyey ee loo soo diray dadka waa?", options: ["Nabi Ciise (CS)", "Nabi Ibraahim (CS)", "Nabi Maxamed (SCW)", "Nabi Muuse (CS)"], correct: "C" },
    { question: "Waa kuma Asxaabigii ugu horreeyay ee qaatay Islaamka?", options: ["Abu Bakr (RC)", "Cumar Bin Khattab (RC)", "Uthmaan Bin Caffaan (RC)", "Ali Bin Abi Taalib (RC)"], correct: "D" },
    { question: "Bisha Ramadaan waa bishii?", options: ["Xajka", "Sadaqada", "Soonka", "Ciida"], correct: "C" },
    { question: "Salaadda waa lagu tukadaa imisa jeer maalintii?", options: ["2", "3", "5", "7"], correct: "C" },
      { question: "Salaadda waa lagu tukadaa imisa jeer maalintii?", options: ["2", "3", "5", "7"], correct: "C" },
    { question: "Waa maxay tiirka ugu horreeya ee Islaamka?", options: ["Sakaatul", "Tukashada", "Xajka", "Shahaadada"], correct: "D" },
    { question: "Nebiga (SCW) waa lagu dhashay magaalo tee?", options: ["Madiina", "Makka", "Sham", "Baquul"], correct: "B" },
    { question: "Suuradda ugu horreysa ee Quraanka waa?", options: ["Ikhlaas", "Faatixa", "Ikra", "Nisa"], correct: "B" },
    { question: "Xajka waa la sameeyaa sanadkii mar meelkee?", options: ["Madiina", "Yaman", "Makka", "Baquul"], correct: "C" },
    { question: "Waa imisa shuruudaha salaadda?", options: ["7", "5", "9", "6"], correct: "A" },
    { question: "Kuma Muslimay Nebiga (SCW) hortiisa?", options: ["Cumar", "Abu Bakr", "Khaalid", "Uthmaan"], correct: "B" },
    { question: "Axaadiista Nebiga waxaa qoray Asxaabi magaciisu yahay?", options: ["Abu Hureyrah", "Anas Bin Maalik", "Cabdullaahi Bin Mascuud", "Cumar Bin Khattab"], correct: "A" },
    { question: "Xagee lagu aasaay Nebi Maxamed (SCW)?", options: ["Makka", "Madiina", "Baytu Maqdis", "Sham"], correct: "B" },
    { question: "Nebigii Allah ugu diray Fircoon wuxuu ahaa?", options: ["Nabi Yuusuf", "Nabi Ibraahim", "Nabi Muuse", "Nabi Ismaaciil"], correct: "C" },
    { question: "Waa kuma asxaabigii loo bixiyey Asadullah (Libaaxa Allah)?", options: ["Ali Bin Abi Taalib", "Xamza Bin Cabdil Mudalib", "Abu Dujana", "Cumar Bin Khattab"], correct: "B" },
    { question: "Maxay ahayd cibaadadii ugu horreysay ee la faray Nebiga (SCW)?", options: ["Salaadda", "Zakaatul", "Xajka", "Jahaadka"], correct: "A" },
    { question: "Aayaddii ugu dambeysay ee Quraanka waa?", options: ["Al-Baqarah 286", "Al-Maa’idah 3", "Al-Nasr 1", "Al-Alaq 1"], correct: "B" },
    { question: "Nebiga (SCW) wuxuu xajiyay sanadkee?", options: ["Hijri 8", "Hijri 9", "Hijri 10", "Hijri 11"], correct: "C" },
    { question: "Sidee lagu galaa Islaamka?", options: ["La tukado", "La shahaado la qirto", "La soomo", "La xajiyo"], correct: "B" },
    { question: "Sadaqada ugu fiican waa midkee?", options: ["Xoolo", "Biyo", "Cuntada", "Dhammaan"], correct: "D" },
    { question: "Qofkii Muslim ah wuxuu aadaa janada haddii uu?", options: ["Aada Masjidka", "Tukado", "La yimaado shahaadada", "Lagu qoro Liiska jannada"], correct: "C" },
    { question: "Maxaa looga baahan yahay qofka soonka haysta?", options: ["Sabar", "Cibaado badan", "Xasanaad sameyn", "Dhammaan"], correct: "D" },
    { question: "Xajku waa waajib hal mar nolosha, laakiinse yaa laga rabaa?", options: ["Qof kasta", "Qof Muslim ah oo awooda", "Kaliya wadaaddada", "Dadka duqoobay"], correct: "B" },
    { question: "Quraanka waxaa qoray?", options: ["Nebiga (SCW)", "Asxaabta", "Malaa'igta", "Nebiga iyo Asxaabta"], correct: "D" },
    { question: "Nebiga (SCW) xaasaskii ugu badnaa wuxuu guursaday imisa?", options: ["3", "5", "9", "11"], correct: "D" },
    { question: "Bisha ugu fadliga badan waa?", options: ["Ramadaan", "Shacbaan", "Safar", "Dhul Xijjah"], correct: "A" },
    { question: "Salaadda subax waxa laga aqriyaa suurad gaaban kadib?", options: ["Al-Faatixa", "Al-Baqarah", "Al-Nisaa", "Al-Anaam"], correct: "A" },
    { question: "Nebiga (SCW) wuxuu geeriyooday isagoo jira imisa sano?", options: ["50", "55", "63", "70"], correct: "C" }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = q.question;
    document.querySelectorAll(".option-btn").forEach((btn, i) => {
        btn.innerText = `${String.fromCharCode(65 + i)}) ${q.options[i]}`;
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
    });

    document.getElementById("next-btn").style.display = "block";
    document.getElementById("next-btn").innerText = (currentQuestionIndex === questions.length - 1) ? "Restart" : "Next";
    
    document.getElementById("back-btn").disabled = (currentQuestionIndex === 0);
}

function checkAnswer(button, selectedOption) {
    let correctOption = questions[currentQuestionIndex].correct;
    if (selectedOption === correctOption) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);
    document.getElementById("score-display").innerText = `Dhibcaha: ${score}`;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        restartQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score-display").innerText = "Dhibcaha: 0";
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);