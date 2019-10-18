var f = 10;

(function() {
  var aaa = document.getElementById("Start");
  var bbb = document.querySelector("input").value;
  var Thecompany = { company: "Банк ДОМ.РФ" };
  var f = 55;
  var cof = 0.2;

  aaa.addEventListener("click", () => {
    this.classList.toggle("clicked");

    chtoto();
  });

  console.log("1");

  function chtoto() {
    for (var i = 0; i < arr.length; i++) {
      setTimeout(function() {
        console.log("Id: " + i + ", cont: " + arr[i]);
        console.log("2");

        if (i == arr.length - 1) {
          var eeeee = Object.create(Thecompany);
          delete eeeee.company;
          console.log(cof + bbb - cof);
          window.eval(' console.log("Значение f?", f) ');
          console.log("Наша компания: ", eeeee.company);
        }
      }, 100);
    }
  }

  console.log("3");
  var arr = [один, два, "три", "четыре"];
  var v = "Ванзай";
})(500);

console.log(v);
