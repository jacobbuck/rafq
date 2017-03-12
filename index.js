'use strict';

module.exports = function rafq() {
	var queue = [];
	var raf;

	function tick(time) {
		var prevQueue = queue;
		queue = [];
		prevQueue.forEach(function (value) {
			value(time);
		});
	}

	var proto = {
		add: function(callback) {
			var prevQueue = queue;
			queue = queue.concat([callback]);
			if (!prevQueue.length) {
				raf = requestAnimationFrame(tick);
			}
			return proto;
		}

		clear: function() {
			queue = [];
			cancelAnimationFrame(raf);
			return proto;
		}

		remove: function(callback) {
			queue = queue.filter(function (value) {
				return value !== callback;
			});
			if (!queue.length) {
				cancelAnimationFrame(raf);
			}
			return proto;
		}
	};

	return proto;
};
