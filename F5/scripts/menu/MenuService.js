angular.module('MenuModule').factory('menuFactory', function () {
    var selectedMenuItem = "/guidelines";
    var selectedCategoy = null;

    var menuItems = [
                        {
                            category: 'Brand guidelines',
                            icon: 'lnr lnr-pencil',
                            firstLevel: [
                                { name: 'Manual', path: '/identity', active: false },
                                { name: 'Print files', path: '/print-files', active: false },
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
                                { name: 'Overview & Download', path: '/ui-kit', active: false }
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