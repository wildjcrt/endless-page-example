function checkScroll() {
  if (nearBottomOfPage()) {
    if($(".next a").length != 0){
      $.rails.handleRemote($(".next a"));
    }
  } else {
    setTimeout("checkScroll()", 250);
  }
}

function nearBottomOfPage() {
  return scrollDistanceFromBottom() < 150;
}

function scrollDistanceFromBottom(argument) {
  return pageHeight() - (window.pageYOffset + self.innerHeight);
}

function pageHeight() {
  return Math.max(document.body.scrollHeight, document.body.offsetHeight);
}

$(document).ready(function(){
  checkScroll();
});