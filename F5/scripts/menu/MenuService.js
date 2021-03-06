﻿angular.module('MenuModule').factory('menuFactory', function () {
    var selectedMenuItem = "/guidelines";
    var selectedCategoy = null;

    var menuItems = [
                        {
                            category: 'Brand guidelines',
                            icon: 'lnr lnr-pencil',
                            firstLevel: [
                                { name: 'Manual', path: '/identity', active: false },
                                { name: 'Download files', path: '/print-files', active: false },
                                { name: 'Stock Photos', path: '/photos', active: false },
                                { name: 'Website', path: '/website', active: false },
                                { name: 'Newsletter', path: '/newsletter', active: false },
                                { name: 'Marketing Materials', path: '/materials', active: false },
                                { name: 'Our Apps', path: '/apps', active: false }
                            ]
                        },
                        {
                            category: 'Web & mobile guidelines',
                            icon: 'lnr lnr-laptop-phone',
                            firstLevel: [
                                { name: 'Introduction', path: '/introduction', active: false },
                                { name: 'Design System', path: '/designsystem', active: false },
                                { name: 'Grid', path: '/grid', active: false },
                                { name: 'Layout', path: '/layout', active: false },
                                {
                                    name: 'Components',
                                    isCollapsed: false,
                                    submenu: [
                                        { name: 'Forms', path: '/forms', active: false },
                                        { name: 'Tables', path: '/tables', active: false },
                                    ]
                                },
                                {
                                    name: 'Style',
                                    isCollapsed: false,
                                    submenu: [
                                        { name: 'Colors', path: '/colors', active: false },
                                        { name: 'Icons', path: '/icons', active: false },
                                        { name: 'Typography', path: '/typography', active: false },
                                    ]
                                },
                                {
                                    name: 'Motion',
                                    isCollapsed: false,
                                    submenu: [{ name: 'Animations', path: '/animations', active: false }]
                                }
                            ]
                        },
                        {
                            category: 'ui kit',
                            icon: 'lnr lnr-gift',
                            firstLevel: [
                                { name: 'Overview & Download', path: '/ui-kit', active: false },
                                { name: 'Buttons', path: '/kit/top', active: false },
                                { name: 'Input fields', path: '/kit/if', active: false },
                                { name: 'Tables', path: '/kit/tb', active: false },
                                { name: 'Widgets', path: '/kit/widgets', active: false },
                                { name: 'Dropdowns', path: '/kit/dropbtn', active: false },
                                { name: 'Pagination', path: '/kit/pagination', active: false },
                                { name: 'Panels', path: '/kit/panels', active: false },
                                { name: 'Blocks', path: '/kit/blocks', active: false },
                                { name: 'Badges', path: '/kit/badges', active: false },
                                //{ name: 'Charts', path: '/kit/charts', active: false },
                                { name: 'Google Charts', path: '/kit/gcharts', active: false },
                                { name: 'Navigation', path: '/kit/navigation', active: false },
                                { name: 'Spinners', path: '/kit/spinners', active: false },
                                { name: 'Alerts', path: '/kit/alerts', active: false },
                                { name: 'Progress bars', path: '/kit/progress-bars', active: false },
                                { name: 'Modals', path: '/kit/modals', active: false },
                                { name: 'Tabs', path: '/kit/tabs', active: false },
                                { name: 'Tooltips', path: '/kit/tooltips', active: false },
                                { name: 'Datepicker', path: '/kit/dp', active: false },
                                { name: 'Icons', path: '/kit/icons', active: false },
                                { name: 'Status icons', path: '/kit/status-icons', active: false },
                                { name: 'User images', path: '/kit/user-img', active: false },
                                { name: 'File upload', path: '/kit/file-upload', active: false },
                                { name: 'Help classes', path: '/kit/help', active: false },
                                {
                                    name: 'Page examples',
                                    isCollapsed: false,
                                    submenu: [
                                        { name: 'Top navigation', path: '/example/top-navbar', active: false },
                                        { name: 'Side navigation', path: '/example/side-navbar', active: false },
                                        { name: 'Dark login example', path: '/example/login-example1', active: false },
                                        { name: 'Light login example', path: '/example/login-example2', active: false },
                                        { name: 'Error page', path: '/example/error', active: false }
                                    ]
                                }
                            ]
                        }

    ]

    return {
        getMenuItems: function () {
            return menuItems
        },
        setActiveItem: function (path) {
            if (path === '/home') {
                angular.forEach(menuItems, function (value) {
                    angular.forEach(value.firstLevel, function (menuItem) {
                        if (menuItem.submenu) {
                            menuItem.isCollapsed = false;
                            angular.forEach(menuItem.submenu, function (submenu) {
                                submenu.active = false;
                            });
                        }
                        else {
                            menuItem.active = false;
                        }

                    });
                });
            }

            else {
                angular.forEach(menuItems, function (value) {
                    angular.forEach(value.firstLevel, function (menuItem) {
                        if (menuItem.path === path && !menuItem.submenu) {
                            menuItem.active = true;
                        }
                        else {
                            menuItem.active = false;
                            angular.forEach(menuItem.submenu, function (submenu) {
                                if (submenu.path === path) {
                                    menuItem.isCollapsed = true;
                                    submenu.active = true;
                                }
                                else {
                                    submenu.active = false;
                                }
                            });
                        }
                    });
                });
            }
        },
        setActiveCategory: function (name) {
            angular.forEach(menuItems, function (menuItem) {
                angular.forEach(menuItem.firstLevel, function (submenu) {
                    if (submenu.submenu) {
                        if (submenu.name === name && !submenu.isCollapsed) {
                            submenu.isCollapsed = true;
                        }
                        else {
                            submenu.isCollapsed = false;
                        }
                    }
                });
            });
        }
    };
});