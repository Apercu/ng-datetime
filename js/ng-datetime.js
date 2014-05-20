'use strict';

angular.module('ngDatetime', [])
	.directive('ngDatetime', function ($timeout) {

		return {
			restrict: 'AE',
			replace : true,
			template:
				'<div class="input-append date form_datetime">' +
				'   <input type="text" value="" readonly>' +
				'   <span class="add-on"><i class="icon-remove"></i></span>' +
				'	<span class="add-on"><i class="icon-th"></i></span>' +
				'</div>',
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
