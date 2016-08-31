//Controller for work with a catalog of books on the home page

bookStoreApp.controller('BookCtrl', function ($scope, $http, $location, $rootScope, BaskFactory, UserFactory) {

    $scope.UserFactory = UserFactory;
    $scope.BaskFactory = BaskFactory;

    $http.get('files/books.json').success(function (data) {
        $scope.books = data;
    });

    $scope.goTo = function (view) {
        $location.path("/" + view);
    };    

    $scope.add = function (book) {
        if (UserFactory.nick == 'Гость') {
            $('.modal h3').html('Для покупки необходимо авторизоваться!');
            return $('#myModal').modal('show');
        }
        if (UserFactory.age < book.age) {
            $('.modal h3').html('Вы не можете купить эту книгу из-за возрастного ограничения!');
            return $('#myModal').modal('show');
        }        

        for (var i = 0; i < BaskFactory.length; i++) {
            if (book.title == BaskFactory[i].title) {
                $('.modal h3').html('Эта книга ранее добавлена в корзину!');
                return $('#myModal').modal('show');
            }            
        };
        book.count = 1;
        $scope.BaskFactory.push(book);
        $('.modal h3').html('Книга добавлена в корзину');
        $('#myModal').modal('show');
    };
});