module.exports = [
    '$scope',
    '$rootScope',
    'initialData',
    '_',
function (
    $scope,
    $rootScope,
    initialData,
    _
) {

    // Change layout class
    $rootScope.setLayout('layout-c');
    // Change mode
    $scope.$emit('event:mode:change', 'settings');

    $scope.required_fields = [];
    $scope.required_fields_map = {};
    $scope.form = initialData.form;
    // Change required attribute labels to show required
    _.each($scope.form.attributes, function (attribute, index) {
        if (attribute.required) {
            $scope.required_fields.push(attribute.key);
            $scope.required_fields_map[attribute.key] = attribute.label;
            $scope.form.attributes[index].label = attribute.label + '<span class="required"></span>';
        }
    });
    $scope.csv = initialData.csv;
}];