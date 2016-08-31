//Controller for work with the page shopping basket

bookStoreApp.controller('BaskCtrl', function ($scope, BaskFactory, UserFactory) {
    
    $scope.BaskFactory = BaskFactory;
    $scope.UserFactory = UserFactory;
    
    $scope.del = function (book, $index) {
        BaskFactory.splice($index, 1);
    };
    
    $scope.sum = function () {
        $scope.total = 0;
        for (var i = 0; i < BaskFactory.length; i++) {
            $scope.total += BaskFactory[i].price * BaskFactory[i].count;
        }
        $scope.total == 0 ? $('.buy').hide() : $('.buy').show();
    };
    
    $scope.buy = function () {
        if ($scope.total < UserFactory.cash) {
            $('.modal h3').html('Ваш заказ успешно отправлен. В ближайшее время с Вами свяжется менеджер!');
            $('#myModal').modal('show');            
            UserFactory.cash = UserFactory.cash - $scope.total;
            BaskFactory.splice(0, BaskFactory.length);
        } else {
            $('.modal h3').html('У вас недостаточно средств на счету!');
            $('#myModal').modal('show');
        }
    };

});