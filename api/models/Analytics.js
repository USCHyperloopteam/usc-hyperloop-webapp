function Analytics() {
	this.queue = [];
	this.maxQueueSize = 100;
	this.currentSize = 0;
}

Analytics.prototype = {
	setMaxSize: function(num) {
		this.maxQueueSize = num;
	},

	flushQueue: function(numElementsToFlush) {
		if (numElementsToFlush < 0) {
			numElementsToFlush = this.maxQueueSize;
		}
		if (numElementsToFlush > currentSize) {
			numElementsToflush = currentSize;
		}
		for (i = 0; i < numElementsToFlush; i++) {
			this.queue.shift();
			currentSize--;
		}
	},

	addNewElement: function(element) {
		this.queue.push(element);
		currentSize++;
		if (currentSize > maxQueueSize) {
			flushQueue(1);
		}
	},

	peekTopElement: function() {
		if (currentSize != 0) {
			return this.queue[0];
		}
	}

}
