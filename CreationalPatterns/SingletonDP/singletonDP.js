var Vodafone = (function () {
    var _line;
	var _vodafone = function () 
				{
						var _name = "VODAFONE"; // private instance data
						var _number = "542";    // private instance data

						this.GetName = function() {return(_name);}     // methods with access to private variable
						this.GetNumber = function() {return(_number);}     // methods with access to private variable
						
				}
 
    return {
        GetInstance: function () {
            if (!_line) {
                _line = new _vodafone();
            }
            return _line;
        }
    };
})();
