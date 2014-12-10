/*global define*/

define(function (require) {
    'use strict';

    /**
     * Edition field for a date - a text input with a datepicker.
     *
     * @example <date-field field="field" value="value"></date-field>
     */
    function DateField() {
        return {
            scope: {
                'field': '&',
                'value': '='
            },
            restrict: 'E',
            link: function(scope, element) {
                var field = scope.field();
                scope.fieldClasses = field.getCssClasses();
                scope.name = field.name();
                scope.format = field.format();
                scope.v = field.validation();
                scope.isOpen = false;
                var input = element.find('input').eq(0);
                var attributes = field.attributes();
                for (var name in attributes) {
                    input.attr(name, attributes[name]);
                }
                scope.toggleDatePicker = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    scope.isOpen = !scope.isOpen;
                };
            },
            template: 
'<div class="input-group datepicker col-sm-4">' +
    '<input type="text" ng-model="value" ' +
           'id="{{ name }}" name="{{ name }}" class="{{ fieldClasses }} form-control" ' +
           'datepicker-popup="{{ field.format() }}" is-open="isOpen" close-text="Close" ' +
           'ng-required="v.required" />' +
    '<span class="input-group-btn">' +
        '<button type="button" class="btn btn-default" ng-click="toggleDatePicker($event)"><i class="glyphicon glyphicon-calendar"></i></button>' + 
    '</span>' +
'</div>'
        };
    }

    DateField.$inject = [];

    return DateField;
});
