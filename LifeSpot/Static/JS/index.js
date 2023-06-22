let userInfo = new Map();
debugger
userInfo.set('User-Agent', window.navigator.userAgent);

var age = prompt('Здрвастуйте! Пожалуйста, укажите Ваш возраст:');
userInfo.set('Age', age);
if (age >= 18) {
    let dateTime = new Date().toLocaleString();
    alert('Приветствуем на LifeSpot!\nТекущее время: ' + dateTime);
    userInfo.set('TimeStart', dateTime);
}
else {
    alert('Сайт LifeSpor.ru предназначен для лиц старше 18 лет!\nВы будете перенаправлены на страницу google.com');
    window.location.href = 'https://google.com';
}

for (let elem of userInfo) {
    console.log(elem);
}