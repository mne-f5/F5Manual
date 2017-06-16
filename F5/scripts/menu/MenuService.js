angular.module('MenuModule').factory('menuFactory', function () {
    var selectedMenuItem = "/guidelines";
    var selectedCategoy = null;

    var menuItems = [
                        {
                            category: 'Brand guidelines',
                            icon: 'lnr lnr-pencil',
                            firstLevel: [
                                {name: 'Manual', path: '/identity', active: false},
                                {name: 'Print files', path: '/print-files', active: false},
                                {name: 'Stock Photos', path: '/photos',active: false}
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
                                        { name: 'Buttons', path: '/buttons', active: false },
                                        { name: 'Tables', path: '/tables', active: false },
                                        { name: 'Elements', path: '/components', active: false }
                                    ]
                                },
                                {
                                    name: 'Style',
                                    isCollapsed: false,
                                    submenu: [
                                        { name: 'Colors', path: '/colors', active: false },
                                        { name: 'Icons', path: '/icons', active: false },
                                        { name: 'Typography', path: '/typography', active: false },
                                        { name: 'Elements', path: '/elements', active: false }
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
        setSelectedMenuItem: function (path) {
            selectedMenuItem = path;
        },

        getSelectedMenuItem: function () {
            return selectedMenuItem;
        },
        setActiveItem: function (path) {
            angular.forEach(menuItems, function (value) {
                for (i = 0; i < value.submenu.length; i++) {
                    if (value.submenu[i].path === path) {
                        value.submenu[i].active = true;
                    }
                    else {
                        value.submenu[i].active = false;
                    }
                }
            });
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
        },
        setCategory: function (name) {
            selectedCategory = name;
        },

        getCategory: function () {
            return selectedCategory;
        }

    };
});