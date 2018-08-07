let vm = new Vue({
	el: '#root',
	data: {
		expression: "",
		firstNumber: "",
		operation: "",
		secondNumber: "",
		result: "",
	},
	methods: {
		clearExpression: function() {
			this.expression = "";
		},
		checkKey: function(e) {
			
			// check keys

		},
	},
});
