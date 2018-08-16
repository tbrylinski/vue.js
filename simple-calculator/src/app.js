
// ---------------------------------------------------------------------------------------------
// To do list:
// 
// - negacja
// - sumowanie tymczasowego wyniku i podmiana wyswietlanego wyrazenia
// - wyświetlanie tymczasowego wyniku po wykonaniu dzialania
// ---------------------------------------------------------------------------------------------

var vm = new Vue({
	el: '#root',
	data: {
		expression: "",
		fullExpression: "",
		savedNumber: "",
		operation: "",
		result: "",
		count: false,
		haveDecimal: false,
		resultDisplayed: false,
	},
	methods: {
		clearExpression: function() {
			this.resultDisplayed = false;
			this.haveDecimal = false;
			this.savedNumber = false;
			this.fullExpression = "";
			this.expression = "";
			this.count = false;
			this.result = "";
		},
		negation: function() {

			if(this.expression.length > 0 && this.expression != "0.") {

				var number = parseFloat(this.expression);
				this.expression = number * -1;
				this.expression = this.expression.toString();
			
			}

		},
		bindNumber: function(number) {

			if(this.resultDisplayed) {
				this.resultDisplayed = false;
				this.fullExpression = "";
				this.savedNumber = "";
				this.expression = "";
				this.operation = "";
			}

			this.expression = this.expression + `${number}`;
			this.count = true;
		},
		bindOperation(operation) {

			if(this.resultDisplayed) {
				this.fullExpression = this.result.toString();
				this.savedNumber = Number(this.result);
				this.resultDisplayed = false;
			}
			
			if(this.count) {

				
				if(this.savedNumber) {
					
					switch(this.operation) {
						case "/":
							this.result = Number(this.savedNumber) / Number(this.expression);
							this.savedNumber = this.result.toString();
							break;
						case "*":
							this.result = Number(this.savedNumber) * Number(this.expression);
							this.savedNumber = this.result.toString();
							break;
						case "+":
							this.result = Number(this.savedNumber) + Number(this.expression);
							this.savedNumber = this.result.toString();
							break;
						case "-":
							this.result = Number(this.savedNumber) - Number(this.expression);
							this.savedNumber = this.result.toString();
					}
						
						this.fullExpression = this.result + ` ${operation} `;
						this.haveDecimal = false;
						
				} else {

					this.savedNumber = this.expression.toString();
					
					switch(operation) {
						case "/":
							this.result = Number(this.savedNumber) / Number(this.expression);
							this.fullExpression = this.savedNumber + ` ${operation}`;
							break;
						case "*":
							this.result = Number(this.savedNumber) * Number(this.expression);
							this.fullExpression = this.savedNumber + ` ${operation}`;
							break;
						case "+":
							this.result = Number(this.savedNumber) + Number(this.expression);
							this.fullExpression = this.savedNumber + ` ${operation}`;
							break;
						case "-":
							this.result = Number(this.savedNumber) - Number(this.expression);
							this.fullExpression = this.savedNumber + ` ${operation}`;
					}


				}

				this.operation = operation;
				this.expression = "";

			}

		},
		bindDecimal: function() {

			if(!this.haveDecimal && !this.resultDisplayed) {

				if(this.expression.length > 0) {

					this.expression = this.expression + '.';
					this.haveDecimal = true;

				} else {

					this.expression = 0 + '.';
					this.haveDecimal = true;

				}
				

			}

		},
		resultCount: function(operation) {

			if(this.savedNumber && this.resultDisplayed == false) {

				this.haveDecimal = false;

				switch(this.operation) {
					case "/":
						this.result = Number(this.savedNumber) / Number(this.expression);
						this.savedNumber = this.result.toString();
						break;
					case "*":
						this.result = Number(this.savedNumber) * Number(this.expression);
						this.savedNumber = this.result.toString();
						break;
					case "+":
						this.result = Number(this.savedNumber) + Number(this.expression);
						this.savedNumber = this.result.toString();
						break;
					case "-":
						this.result = Number(this.savedNumber) - Number(this.expression);
						this.savedNumber = this.result.toString();
				}

				this.fullExpression = this.fullExpression + " " + this.expression + " = ";
				this.expression = this.result.toString();
				this.resultDisplayed = true;
				this.operation = "";

			}

		},
	},
});
