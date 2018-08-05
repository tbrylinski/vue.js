let vm = new Vue({
	el: '#root',
	data: {
		tasks: [
			{ name: "Go swimming", completed: false, editing: false },
			{ name: "Learn some Vue basics", completed: true, editing: false },
			{ name: "Read a book", completed: false, editing: false },
			{ name: "Write a todo-app", completed: true, editing: false },
			{ name: "Go to the gym", completed: false, editing: false },
			{ name: "Do the shopping", completed: false, editing: false },
		],
		taskOldValue: "",
		newTask: "",
	},
	methods: {
		addTask: function() {
			if(this.newTask.length >= 3) {
				this.tasks.push({
					id: this.tasks.length + 1,
					name: this.newTask,
					completed: false,
					editing: false,
				});
				this.newTask = "";
			} else {
				alert("Task must have 3 characters at least!");
			}
		},
		removeTask: function(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1);
		},
		toggleEdit: function(index) {

			if(this.tasks[index].editing) {
				this.tasks[index].editing = false;
				this.taskOldValue = this.tasks[index].name;
			} else {
				this.tasks[index].editing = true;
				this.taskOldValue = this.tasks[index].name;
			}

		},
		cancelEdit: function(index) {
			this.tasks[index].editing = false;
			this.tasks[index].name = this.taskOldValue;
		},
		toggleCompleted: function(task) {
			var index = this.tasks.indexOf(task);

			if(this.tasks[index].completed) {
				this.tasks[index].completed = false;
			} else {
				this.tasks[index].completed = true;
			}

		},
	},
	computed: {
		incompletedTasks() {
			return this.tasks.filter(task => !task.completed);
		},
		completedTasks() {
			return this.tasks.filter(task => task.completed);
		}
	},
});
