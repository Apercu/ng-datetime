'use strict';

angular.module('ngDatetime', [])
	.directive('ngDatetime', function () {

		return {
			restrict: 'AE',
			replace : true,
			template: '<input type="text" class="ng-datetime">',
			scope   : {
				date: '='
			},
			link    : function (scope, element) {

				$(element[0]).datetimepicker({
					defaultDate: moment(),
					todayHighlight: true,
					language: 'fr',
					minuteStepping: 15,
					pickSeconds: false,
					useCurrent: true,
					icons : {
						time: 'icon-clock',
						date: 'icon-calendar',
						up: 'icon-arrow-up4',
						down: 'icon-arrow-down5'
					}
				})
				.on('dp.change', function (e) {
					if (!scope.$root.$$phase) {
						scope.$apply(function(scope) {
							scope.date = e.date;
						});
					}
				})
				.on('dp.hide', function (e) {
					$('.bootstrap-datetimepicker-widget').removeClass('picker-open');
				});

				var date = $(element[0]).data('DateTimePicker');

				scope.$watch('date', function (newVal, oldVal) {
					if (newVal) {
						date.setDate(newVal);
					}
				});

				scope.$on('$destroy', function() {
					$('.bootstrap-datetimepicker-widget').remove();
				});

			}
		};
	});
