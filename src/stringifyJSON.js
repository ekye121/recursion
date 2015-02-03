var stringIt = function(){}
stringIt.prototype.number = String;
stringIt.prototype.boolean = String;
stringIt.prototype.null = String;
stringIt.prototype.string = function(string){return '"' + string + '"'};
stringIt.prototype.array = function(array){return '[' + _.map(array, stringifyJSON) + ']'};
stringIt.prototype.object = function(object){
    var results = [];
    _.each(object, function(item, index){
        if (typeof item !== 'undefined' && typeof item !== 'function'){
            results.push('"' + index + '"' + ':' + stringifyJSON(item))
        }
    })
    return '{' + results.join(',') + '}'
};
var stringifyJSON = function(obj) {
    var string = new stringIt();
    var type = typeof obj;
    if (obj === null) type = 'null';
    if (Array.isArray(obj)) type = 'array';
    return string[type](obj);
};