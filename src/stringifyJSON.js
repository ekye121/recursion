var stringIt = {
    number: String,
    boolean: String,
    null: String,
    string: function(string) { return '"' + string + '"'; },
    array: function(array) { return '[' + _.map(array, stringifyJSON) + ']'; },
    object: function(object) {
        var results = [];
        _.each(object, function(item, key) {
            if (typeof item !== 'undefined' && typeof item !== 'function') {
                results.push('"' + key + '"' + ':' + stringifyJSON(item));
            }
        });
        return '{' + results.join(',') + '}';
    }
};

function stringifyJSON(obj) {
    var type = typeof obj;
    if (!obj) type = 'null';
    if (Array.isArray(obj)) type = 'array';
    return stringIt[type](obj);
}