$(".fade-btn").click(function () {
  const btnNumber = $(this).attr("class").match(/\d+/)[0];
  const imgClass = `.img${btnNumber}`;

  fadeGalleryImg(imgClass);
});

function fadeGalleryImg(elementClass) {
  $(elementClass).fadeToggle(1000, () => {});
}

function changeTextColor() {
  $(".activities-text").toggleClass("text-danger");
}

$(".btn-change").click(() => {
  changeTextColor();
});

$(".btn-append").click(() => {
  $(".append-text").append(
    "<p>Appended text for the blog. Deleniti ducimus aut, nemo recusandae laboriosam ullam hic corporis</p>"
  );
  $(".append-text").addClass("text-center text-success fs-2 fw-bold");
});
