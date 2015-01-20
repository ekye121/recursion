var getElementsByClassName = function(className){
  var allElements = document.getElementsByTagName("*");
  var specificElements = [];
  for (var i = 0; i < allElements.length; i++) {
      if (allElements[i].classList.contains(className)){
        specificElements.push(allElements[i])
      }
  };
  return specificElements;
};