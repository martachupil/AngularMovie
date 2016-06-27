var app = angular
           .module("movieModule", [])
            .controller("myController", ['$scope',function ($scope){

                var movies = [
                    {
                        "image": "http://rs681.pbsrc.com/albums/vv176/Baller231photo/scarface-4.jpg~c200",
                        "name": "Scarface",
                        "director": " Брайан де Пальма",
                        "year": 1983
                    },
                    {
                        "image": "http://www.barleysheaf.org/logos/2014-15/titanic-200.png",
                        "name": "Titanic",
                        "director": "Джеймс Кэмерон",
                        "year": 1997
                    },
                    {
                        "image": "http://shirtigo.co/wp-content/uploads/2014/10/jurassicparkswing-1.jpg",
                        "name": "Jurassic Park",
                        "director": "Стивен Спилберг",
                        "year": 1994
                    },
                    {
                        "image": "http://rs766.pbsrc.com/albums/xx302/ajithrockscc/Movies/Terminator-2-Judgment-Day-1991.jpg~c200",
                        "name": "Terminator 2",
                        "director": "Джеймс Кэмерон",
                        "year": 1989
                    },
                    {
                        "image": "https://pbs.twimg.com/profile_images/674997812619165696/gm7E6CEA_200x200.png",
                        "name": "X-Men",
                        "director": "Браян Сингер",
                        "year": 1999
                    },
                    {   "image": "http://images4.fanpop.com/image/photos/22700000/HP7-Harry-Potter-Icon-harry-james-potter-22719482-200-200.jpg",
                        "name": "Harry Potter",
                        "director": "Джоель Шумайхер",
                        "year": 2002
                    }
                ];
                $scope.movies = movies;

            }]);