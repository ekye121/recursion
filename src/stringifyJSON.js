var stringIt = function(){}
stringIt.prototype.number = String;
stringIt.prototype.boolean = String;
stringIt.prototype.null = String;
stringIt.prototype.string = function(string){return '"' + string + '"'};
stringIt.prototype.array = function(array){return '[' + _.map(array, stringifyJSON) + ']'};
stringIt.prototype.object = function(object){
    var string = '{';
    var first = true;
    for (var key in object){
        if (typeof object[key] === "undefined" || typeof object[key] === "function") break;
        if (first) first = false;
        else string += ','
        string += stringifyJSON(key) + ':' + stringifyJSON(object[key]);
    }
    string += '}'
    return string
}

var stringifyJSON = function(obj) {
    var string = new stringIt();
    var type = typeof obj;
    if (type === 'object'){
        if (obj === null){type = 'null'}
        else if (Array.isArray(obj)){type = 'array'}
    }
    return string[type](obj);
};