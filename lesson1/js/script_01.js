let name = prompt("Введите ваше имя?", ""),
    age = prompt("Введите ваш возраст?", "");

function myFirstApp(name, age) {
    alert("Привет " + name + "! Меня зовут Артем и это моя первая программа!");

    function showSkills() {
        let skills = [
            "Photodhop",
            "CorelDraw",
            "HTML",
            "CSS"
        ];
        document.write( "Мои навыки: <br>");
        console.log( "Мои навыки: ");
        for (let i = 0; i < skills.length; i++) {
            document.write(skills[i] + "<br>"); 
            console.log(skills[i]);
        };
    };

    showSkills();

    function checkAge() {
        if (age > 18) {
            document.write("<br>Вы можете изучать JS для взрослых.<br>"); 
            console.log("Вы можете изучать JS для взрослых.");
        } else {
            document.write("<br>Вам стоит пройти JS для детей.<br>"); 
            console.log("Вам стоит пройти JS для детей.");
        };
    };

    checkAge();

    function calcPow(num) {
        document.write("<br>" + num + "<sup>2</sup> = " + num*num);
        console.log(num + " в квадрате = " + num*num);
    };

    calcPow(4);
    

};

myFirstApp(name, age);