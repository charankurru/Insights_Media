$(document).ready(() => {
  // SideNav Button Initialization
  $(".button-collapse").sideNav();
  // SideNav Scrollbar Initialization
  var sideNavScrollbar = document.querySelector(".custom-scrollbar");
  var ps = new PerfectScrollbar(sideNavScrollbar);
});

$("button").click(function () {
  confirm("hello");
});