const newQuestionBtn = document.querySelector('#newQuestionBtn');
const newQuestion = document.querySelector('#newQuestion')
const questionDetailed = document.querySelector('#questionDetailed');
let auxId = 0;
newQuestionBtn.addEventListener('click', function () {
    if (questionDetailed.className === 'active') { toggleView(questionDetailed) }
    toggleView(newQuestion)
})

function toggleView(target) {
    if (target.className === 'inactive') {
        target.classList.add('active');
        target.classList.remove('inactive');
    } else {
        target.classList.add('inactive');
        target.classList.remove('active');
    }
}

function getQuestions() {
    fetch('http://localhost:3000/questions')
        .then(response => response.json())
        .then(json => console.log(printAllQuestions(json)))
        .catch(reason => console.log(reason));
}

function postQuestion(title, question) {
    fetch('http://localhost:3000/questions', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, question })
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(reason => console.log(reason));
}

function getAnswers() {
    fetch('http://localhost:3000/answers')
        .then(response => response.json())
        .then(json => renderAnswer(json))
        .catch(reason => console.log(reason));
}

function postAnswer(question_id, answer) {
    fetch('http://localhost:3000/answers', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question_id, answer })
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(reason => console.log(reason));
}

const questionForm = document.querySelector('#questionForm');
questionForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const questionTitle = document.querySelector('#questionTitle');
    const questionBody = document.querySelector('#questionBody');
    let title = questionTitle.value;
    let question = questionBody.value;
    postQuestion(title, question);
    questionTitle.value = "";
    questionBody.value = "";
    getQuestions();
    printAllQuestions(json);
})

function printAllQuestions(json) {
    const questionList = document.querySelector('#questionList')
    questionList.innerHTML = "";
    json.forEach(element => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('questionItem');
        questionItem.innerText = element.title;
        questionList.append(questionItem);
        questionItem.addEventListener('click', function () {
            auxId = element.id;
            if (newQuestion.className === 'active') { toggleView(newQuestion) }
            if (questionDetailed.className === 'inactive') { toggleView(questionDetailed) }
            renderQuestionDetailed(element);
            getAnswers();
            renderAnswer(json)
        })
    });
}

function renderQuestionDetailed(question) {
    const questionRender = document.querySelector('#question');
    questionRender.innerHTML = ""
    const questionHeader = document.createElement('h2');
    const questionBody = document.createElement('p');
    questionHeader.innerText = question.title;
    questionBody.innerText = question.question;
    questionRender.append(questionHeader, questionBody);

}

function renderAnswer(json) {
    const answerList = document.querySelector('#answerList');
    answerList.innerHTML = "<h3>Answers:</h3>"
    json.forEach(element => {
        if (element.question_id === auxId) {
            const answers = document.createElement('p');
            answers.innerHTML = element.answer;
            answerList.append(answers);
        }
    })
}

const answerForm = document.querySelector('#answerForm');
answerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newAnswer = document.querySelector('#newAnswer');
    let answer = newAnswer.value;
    question_id = auxId;
    postAnswer(question_id, answer);
    newAnswer.value = "";
    getAnswers();
})
getQuestions()