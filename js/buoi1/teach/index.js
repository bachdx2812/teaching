// tao event click cho button t
calculate = function() {
  // khi click get input value from
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const operator = document.getElementById("operator").value;

  if (
    operator !== "+" && operator !== "-" && operator !== '*' && operator !== '/'
  ) {
    alert("loi")
  } else {
    const floatBreaker = 100000;

    switch(operator) {
      case "+":
        console.log("cong")
        console.log(parseFloat(number1) + parseFloat(number2));

        break;
      case "-":
        console.log("tru")

        const result = (floatBreaker * parseFloat(number1) - floatBreaker * parseFloat(number2)) / floatBreaker;
        console.log(result);
        break;
      case "*":
        console.log("nhan");
        console.log(parseFloat(number1) * parseFloat(number2));

        break;
      case "/":
        console.log("chia")
        console.log(parseFloat(number1) / parseFloat(number2))

        break;
    }
  }

  // const contentSection = document.getElementById("content");
  // // dua content vao trong content section
  // contentSection.innerHTML = name;
  // // hien content section
  // contentSection.style.display = "block";

  // // sau do thi an cai input section
  // document.getElementById("input").style.display = "none";
}
