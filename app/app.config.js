(function() {
    'use strict';

    angular.module('app').config(config)

    function config($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

        $locationProvider.html5Mode(true)

        var myTheme = {
            '50': '#0900a1',
            '100': '#080088',
            '200': '#06006e',
            '300': '#050055',
            '400': '#03003b',
            '500': '#020022',
            '600': '#000008',
            '700': '#000000',
            '800': '#000000',
            '900': '#000000',
            'A100': '#0b00bb',
            'A200': '#0c00d4',
            'A400': '#0e00ee',
            'A700': '#000000'
        };
        $mdThemingProvider
            .definePalette('myTheme',
                myTheme);

        $mdThemingProvider
            .theme('default')
            .primaryPalette('myTheme')
            .warnPalette('red')
            .backgroundPalette('grey');

        $stateProvider
            .state({
                name: 'app',
                abstract: true,
                component: 'app',
            })
            .state({
                name: 'home',
                parent: 'app',
                url: '/',
                component: 'cameraView',
            })
            .state({
                name: 'drive',
                parent: 'app',
                url: '/drive',
                component: 'driveView',
            })
    }

}());
