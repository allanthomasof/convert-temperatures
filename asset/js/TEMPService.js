var TEMPService = {

	getValue: function(number, opc, callback) {
		$.ajax({
		  url: 'services/temp.action.php',
		  data: {'number': number, 'opc': opc},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};