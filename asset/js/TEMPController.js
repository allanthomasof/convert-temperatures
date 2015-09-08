var TEMPController = {
	
	init: function() {
		TEMPController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			TEMPController.convertTEMP(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	convertTEMP: function(form) {
		var 
			number = parseFloat(form.number.value),
			opc = form.opc.value,
			result = 0;
		
		var callback = function(result) {
			TEMPController.showResult(result);			
		};
		
		TEMPController.showLoading(true);
		TEMPService.getValue(number, opc, callback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
		TEMPController.showLoading(false);
	},
	
	showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading...' : 'Conversion Result'
	}

};

//initialization
TEMPController.init();
