//Controller for work on the user login page

bookStoreApp.controller('LoginCtrl', function ($scope, $http, UserFactory) {

    $scope.UserFactory = UserFactory;

    $http.get('files/users.json').success(function (data) {
        $scope.users = data;
    });

    $scope.login = function (id) {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].id == id) {
                $scope.goTo('main');
                UserFactory.nick = $scope.users[i].name;
                UserFactory.cash = $scope.users[i].cash;
                UserFactory.age = $scope.users[i].age;
                return
            }
        }
        $('.error').show();
        $('.row .form-control').css('box-shadow', 'inset 0 0 6px red');
    };
});