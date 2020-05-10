// tao event click cho button t
sayHi = function() {
  // khi click get input value from
  const name = document.getElementById("name").value;

  const contentSection = document.getElementById("content");
  // dua content vao trong content section
  contentSection.innerHTML = name;
  // hien content section
  contentSection.style.display = "block";

  // sau do thi an cai input section
  document.getElementById("input").style.display = "none";
}
