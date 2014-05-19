'use strict';

angular.module('ngDatetime', [])
	.directive('ngDatetime', function ($timeout) {

		return {
			restrict: 'AE',
			replace : true,
			template: '<input type="text" value="">',
			scope   : {
				value: '='
			},
			link    : function(scope, element, $element) {

				$(element[0]).datetimepicker({
					format: 'dd/mm/yy hh:ii'
				});

			}
		};

	});
