// создадим объект Map для хранения сессии
let session = new Map();

(function () {
    setTimeout(() =>
        alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
        30000);
})();


function logSession() {
    for (let result of session) {
        console.log(result)
    }
}

function checkAge() {
    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст"))

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

function handleSession() {

    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);
    session.set("startDate", new Date().toLocaleString());
    
    return session;
}

function getUserInput() {
    let userInput = document.getElementsByTagName('input')[0].value.toLowerCase();
    return userInput;
}

function filterContent() {
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i <= elements.length; i++) {
        let childElements = elements[i];
        let videoDescription = childElements.getElementsByTagName('h3')[0].innerText;
        if (videoDescription.toLowerCase().includes(getUserInput()))
            elements[i].style.display = 'inline-block';
        else
            elements[i].style.display = 'none';
    }
};