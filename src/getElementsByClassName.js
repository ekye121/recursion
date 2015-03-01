function getElementsByClassName(target, node){
  node = node || document.body;
  var nodes = [];
  if (node.classList.contains(target)) nodes.push(node);
  _.each(node.children, function(item){
    nodes = nodes.concat(getElementsByClassName(target, item));
  });
  return nodes;
}