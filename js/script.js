let status;

let premission = false;

let i = $(".i")

$(".btn").click(function () {
   let nameValue = $("#name").val();

   let ageValue = $("#age").val();



   if (ageValue < 18) {
      alert("hello " + nameValue);
      status = true;
   } else {
      alert("Игра не для тебя!");
   }

});

$("body").keydown(function (e) {
   if (+i.css("left").replace("px", " ") >= 180 && +i.css("left").replace("px", " ") <= 240 && +i.css("top").replace("px", " ") <= 30 && +i.css("top").replace("px", " ") >= 0) {
      premission = true
      $(".freedom").addClass("active");
   }
   if (e.keyCode == 37 && status == true) {
      let left = +i.css("left").replace("px", " ")
      if (+i.css("left").replace("px", " ") >= 20 || premission == true) {
         i.css("left", +left - 20);
      }
      console.log(left)
   } else if (e.keyCode == 38 && status == true) {
      let top = +i.css("top").replace("px", " ")
      if (+i.css("top").replace("px", " ") >= 20 || premission == true) {
         i.css("top", +top - 20);
      }
      console.log(top)
   } else if (e.keyCode == 39 && status == true && +i.css("left").replace("px", " ") <= 380) {
      let right = +i.css("left").replace("px", " ")
      i.css("left", +right + 20);
      console.log(right)
   } else if (e.keyCode == 40 && status == true && +i.css("top").replace("px", " ") <= 480) {
      let bottom = +i.css("top").replace("px", " ")
      i.css("top", +bottom + 10);
      console.log(bottom)
   }
});