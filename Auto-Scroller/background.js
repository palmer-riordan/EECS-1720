function scroll(tab) {
  scrollOn(tab, (50));
};

var scrollbar = 0;
var interval;

function scrollOn(tab, speed) {
 
  interval = setInterval(function(){
    start(tab.id);
  }, speed);
}

function start(id){
  chrome.tabs.executeScript({
    code: `document.documentElement.scrollTop+=1;`
  });
}


chrome.browserAction.onClicked.addListener(function(tab) {
  clearInterval(interval);

  if(scrollbar == 0) {
    scrollbar +=1;
    scroll(tab);
  
  } else if(scrollbar == 3) {
    scrollbar = 0;
    resetScroll(tab);
  }
});


chrome.tabs.onSelectionChanged.addListener(function() {
  clearInterval(interval);
  
  scrollbar=0;
});
