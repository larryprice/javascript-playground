function Queue() {
	this.queue = [];
};

Queue.prototype.Enqueue = function (val, priorityA, priorityB) {
	this.queue.push({
		value: val,
		priorityA: priorityA,
		priorityB: priorityB
	})
};

Queue.prototype.DequeueA = function () {
	var idx = -1,
		highest;
	this.queue.forEach(function (item, i) {
		if (item.priorityA > highest || highest === undefined) {
			idx = i;
			highest = item.priorityA;
		}
	});
	return this.queue.splice(idx, 1)[0];
};

Queue.prototype.DequeueB = function () {
	var idx = -1,
		highest;
	this.queue.forEach(function (item, i) {
		if (item.priorityB > highest || highest === undefined) {
			idx = i;
			highest = item.priorityB;
		}
	});
	return this.queue.splice(idx, 1)[0];
};

Queue.prototype.Count = function () {
	return this.queue.length;
};

Queue.prototype.Clear = function () {
	this.queue = [];
}

var q = new Queue();
q.Enqueue("Hyperion", 1.99, 3);
q.Enqueue("SuperSaver", 0.89, 7);
q.Enqueue("InjectXpress", 2.49, 2);

console.log(q.DequeueB());
console.log(q.DequeueA());
console.log(q.DequeueA());