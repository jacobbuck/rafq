'use strict';

module.exports = function rafq() {
	var queue = [];
	var raf;

	function tick(time) {
		var prevQueue = queue;
		queue = [];
		prevQueue.forEach(function(value) {
			value(time);
		});
	}

	return {
		add: function(callback) {
			var prevQueue = queue;
			queue = queue.concat([callback]);
			if (!prevQueue.length) {
				raf = requestAnimationFrame(tick);
			}
			return this;
		},

		clear: function() {
			queue = [];
			cancelAnimationFrame(raf);
			return this;
		},

		remove: function(callback) {
			queue = queue.filter(function(value) {
				return value !== callback;
			});
			if (!queue.length) {
				cancelAnimationFrame(raf);
			}
			return this;
		}
	};
};
