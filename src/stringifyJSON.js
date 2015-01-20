var stringifyJSON = function(obj) {
  var stringify = {
    "number": function(number){
        return number.toString();
    },
    "object": function(object){
        if (object === null){
            return "null";
        }else if(Array.isArray(object)){
            var string = "[";
            var first = true;
            for (var i = 0; i < object.length; i++) {
                if (first){
                    first = false;
                }else{
                    string += ","
                }
                var itemType = typeof object[i]
                string += stringifyJSON(object[i]);
            };
            string += "]"
            return string;
        }else{
            var string = "{";
            var first = true;
            for (var key in object){
                var itemType = typeof object[key];
                if(itemType !== "undefined" && itemType !== "function"){
                    if(first){
                        first = false;
                    }else{
                        string += ","
                    }
                    string += '"'+key+'":'+stringifyJSON(object[key]);
                }
            }
            string += "}"
            return string;
        }

    },
    "boolean": function(bool){
        if(bool){
            return "true";
        }else{
            return "false";
        }
    },
    "string": function(str){
        return '"'+str+'"';
    }
  }
  var type = typeof obj
  return stringify[type](obj);
};
