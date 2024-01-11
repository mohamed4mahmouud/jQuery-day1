let arr = [
  "imgs/2023-Porsche-911-GT3-RS.jpg",
  "imgs/Porche.jpg",
  "imgs/Porsche-911-GT3-RS_04.jpg",
];
let index = 0;
$(".img-1")
  .css({ width: "500px", height: "300px" })
  .on("load", function () {
    index = (index + 1) % arr.length;
    $(this).fadeToggle(2000);
    setTimeout(() => {
      $(".img-1").attr("src", arr[index]);
    }, 3000);
    $(this).fadeToggle(2000);
  });

if ($(".img-1")[0].complete) {
  $(".img-1").trigger("load");
}

$(".btn").on("click", () => {
  $(".img-1").off("load");
});
