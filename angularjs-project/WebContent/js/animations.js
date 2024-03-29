var phonecatAnimations = angular.module('phonecatAnimations', [ 'ngAnimate' ]);

phonecatAnimations.animation('.phone', function() {

	var animateUp = function(element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position : 'absolute',
			top : 500,
			left : 0,
			display : 'block'
		});

		jQuery(element).animate({
			top : 0
		}, done);

		return function(cancel) {
			if (cancel) {
				element.stop();
			}
		};
	};

	var animateDown = function(element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position : 'absolute',
			left : 0,
			top : 0
		});

		jQuery(element).animate({
			top : -500
		}, done);

		return function(cancel) {
			if (cancel) {
				element.stop();
			}
		};
	};
	var animateRight = function(element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position : 'absolute',
			left : 0,
			top : 0
		});

		jQuery(element).animate({
			left : -500
		}, done);

		return function(cancel) {
			if (cancel) {
				element.stop();
			}
		};
	};

	var animateLeft = function(element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position : 'absolute',
			top : 0,
			left : 500,
			display : 'block'
		});

		jQuery(element).animate({
			left : 0
		}, done);

		return function(cancel) {
			if (cancel) {
				element.stop();
			}
		};
	};

	return {
		addClass : animateLeft,
		removeClass : animateRight
	};
});
