var getElementsByClassName = function(className){
    var allElements = document.getElementsByTagName("*");
    var results = [];
    _.each(allElements, function(item){
        if (item.classList.contains(className)){
            results.push(item)
        }
    });
    return results;
};