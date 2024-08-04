document.getElementById("changeTextButton").addEventListener("click",function(){
    document.getElementById("text").textContent = "The text has bean changed!";
});

document.getElementById("greetButton").addEventListener("click", function() {
    var name = document.getElementById("nameInput").value;
    if (name) {
        document.getElementById("greetText").textContent = "Hello, " + name + "!";
    } else {
        document.getElementById("greetText").textContent = "이름을 입력하세요.";
    }
});

document.getElementById("addButton").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById("result").textContent = "결과: " + sum;
    } else if (isNaN(num1) && isNaN(num2)) {
        document.getElementById("result").textContent = "두 값이 모두 입력되지 않았습니다.";
    } else if (isNaN(num1)) {
        document.getElementById("result").textContent = "값1이 입력되지 않았습니다.";
    } else if (isNaN(num2)) {
        document.getElementById("result").textContent = "값2가 입력되지 않았습니다.";
    }
});