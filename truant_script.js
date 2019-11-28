// начальное состояние кнопки — не кликнута
// javascript здесь нашёл и выбрал элемент кнопки
var button = document.getElementsByTagName('button')[0];

// при клике по кнопке скрипт начинает выбирать
button.onclick = function() {
    window.close("Vasya-the-truant/start_truant.php");
    window.open("Vasya-the-truant/test_truant.php");
};
