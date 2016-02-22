require('angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module');
require('angular-xeditable');

angular.module('ushahidi.tools', [
    'colorpicker.module',
    'xeditable'
])
.directive('importerCsv', require('./directives/setting-data-import-directive.js'))
.directive('mapperCsv', require('./directives/setting-data-mapper-directive.js'))
.directive('formEditor', require('./directives/setting-form-editor-directive.js'))
.directive('settingsEditor', require('./directives/setting-editor-directive.js'))
.directive('customRoles', require('./directives/setting-roles-directive.js'))
.directive('customRolesEditor', require('./directives/setting-roles-editor-directive.js'))

.service('DataImportEndpoint', require('./services/endpoints/data-import.js'))

.config(require('./setting-routes.js'));