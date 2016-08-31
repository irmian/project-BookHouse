//Фабрика для хранения данных о вошедшем клиенте

bookStoreApp.factory('UserFactory', function () {
    return {
        nick: 'Гость',
        cash: 0,
        age: 'неизвестен'
    }
});