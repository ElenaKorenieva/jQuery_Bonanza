function fadeGalleryImg1() {
  $(".img1").fadeToggle(1000, () => {});
}

function fadeGalleryImg2() {
  $(".img2").fadeToggle(1000, () => {});
}

function fadeGalleryImg3() {
  $(".img3").fadeToggle(1000, () => {});
}

function fadeGalleryImg4() {
  $(".img4").fadeToggle(1000, () => {});
}

$(".fade-btn1").click(() => {
  fadeGalleryImg1();
});

$(".fade-btn2").click(() => {
  fadeGalleryImg2();
});

$(".fade-btn3").click(() => {
  fadeGalleryImg3();
});

$(".fade-btn4").click(() => {
  fadeGalleryImg4();
});

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
