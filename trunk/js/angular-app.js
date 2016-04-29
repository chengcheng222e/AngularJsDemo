/*   
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
Version: 1.9.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.9/admin/
*/

var colorAdminApp = angular.module('colorAdminApp', [
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad'
]);

colorAdminApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/house-dict/dict/dashboard');

    $stateProvider
        .state('house-dict', {
            url: '/house-dict',
            templateUrl: 'template/app.html',
            abstract: true
        })
        .state('house-dict.dict', {
            url: '/dict',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.dict.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/community/dashboard.html',
            data: { pageTitle: 'Dashboard v2' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            'js/plugin/bootstrap-calendar/css/bootstrap_calendar.css',
                            'js/plugin/gritter/css/jquery.gritter.css',
                            'js/plugin/morris/morris.css',
                            'js/plugin/morris/raphael.min.js',
                            'js/plugin/morris/morris.js',
                            'js/plugin/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            'js/plugin/jquery-jvectormap/jquery-jvectormap-world-merc-en.js',
                            'js/plugin/bootstrap-calendar/js/bootstrap_calendar.min.js',
                            'js/plugin/gritter/js/jquery.gritter.js'
                        ] 
                    });
                }]
            }
        })
        .state('house-dict.dict.community', {
            url: '/community',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.dict.community.list1', {
            url: '/list1',
            data: { pageTitle: 'Email Inbox v1' },
            templateUrl: 'views/email_inbox.html'
        })
        .state('house-dict.dict.community.list2', {
            url: '/list2',
            data: { pageTitle: 'Email Inbox v1' },
            templateUrl: 'views/email_inbox.html'
        })
        .state('house-dict.dict.building', {
            url: '/building',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.dict.building.list1', {
            url: '/list1',
            data: { pageTitle: 'Email Inbox v1' },
            templateUrl: 'views/email_inbox.html'
        })
        .state('house-dict.dict.building.list2', {
            url: '/list2',
            data: { pageTitle: 'Email Inbox v1' },
            templateUrl: 'views/email_inbox.html'
        })
        .state('house-dict.email', {
            url: '/email',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.email.inbox', {
            url: '/inbox/v1',
            data: { pageTitle: 'Email Inbox v1' },
            templateUrl: 'views/email_inbox.html'
        })
        .state('house-dict.email.inbox-v2', {
            url: '/inbox/v2',
            data: { pageTitle: 'Email Inbox v2' },
            templateUrl: 'views/email_inbox_v2.html'
        })
        .state('house-dict.email.compose', {
            url: '/compose',
            data: { pageTitle: 'Email Compose' },
            templateUrl: 'views/email_compose.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/jquery-tag-it/css/jquery.tagit.css',
                            'js/plugin/bootstrap-wysihtml5/src/bootstrap-wysihtml5.css',
                            'js/plugin/jquery-tag-it/js/tag-it.min.js',
                            'js/plugin/bootstrap-wysihtml5/lib/js/wysihtml5-0.3.0.js',
                            'js/plugin/bootstrap-wysihtml5/src/bootstrap-wysihtml5.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.email.detail', {
            url: '/detail',
            data: { pageTitle: 'Email Detail' },
            templateUrl: 'views/email_detail.html'
        })
        .state('house-dict.ui', {
            url: '/ui',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.ui.general', {
            url: '/general',
            data: { pageTitle: 'UI General' },
            templateUrl: 'views/ui_general.html'
        })
        .state('house-dict.ui.typography', {
            url: '/typography',
            data: { pageTitle: 'UI Typography' },
            templateUrl: 'views/ui_typography.html'
        })
        .state('house-dict.ui.tabsAccordions', {
            url: '/tabs-accordions',
            data: { pageTitle: 'UI Tabs & Accordions' },
            templateUrl: 'views/ui_tabs_accordions.html'
        })
        .state('house-dict.ui.unlimitedTabs', {
            url: '/unlimited-nav-tabs',
            data: { pageTitle: 'UI Unlimited Nav Tabs' },
            templateUrl: 'views/ui_unlimited_tabs.html'
        })
        .state('house-dict.ui.modalNotification', {
            url: '/modal-notification',
            data: { pageTitle: 'UI Modal & Notification' },
            templateUrl: 'views/ui_modal_notification.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/gritter/css/jquery.gritter.css',
                            'js/plugin/gritter/js/jquery.gritter.js'
                        ] 
                    });
                }]
            }
        })
        .state('house-dict.ui.widgetBoxes', {
            url: '/widget-boxes',
            data: { pageTitle: 'UI Widget Boxes' },
            templateUrl: 'views/ui_widget_boxes.html'
        })
        .state('house-dict.ui.mediaObject', {
            url: '/media-object',
            data: { pageTitle: 'UI Media Object' },
            templateUrl: 'views/ui_media_object.html'
        })
        .state('house-dict.ui.buttons', {
            url: '/buttons',
            data: { pageTitle: 'UI Buttons' },
            templateUrl: 'views/ui_buttons.html'
        })
        .state('house-dict.ui.icons', {
            url: '/font-awesome',
            data: { pageTitle: 'UI FontAwesome' },
            templateUrl: 'views/ui_icons.html'
        })
        .state('house-dict.ui.simpleLineIcons', {
            url: '/simple-line-icons',
            data: { pageTitle: 'UI Simple Line Icons' },
            templateUrl: 'views/ui_simple_line_icons.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/simple-line-icons/simple-line-icons.css'
                        ] 
                    });
                }]
            }
        })
        .state('house-dict.ui.ionicons', {
            url: '/ionicons',
            data: { pageTitle: 'UI Ionicons' },
            templateUrl: 'views/ui_ionicons.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/ionicons/css/ionicons.min.css'
                        ] 
                    });
                }]
            }
        })
        .state('house-dict.ui.tree', {
            url: '/tree',
            data: { pageTitle: 'UI Tree View' },
            templateUrl: 'views/ui_tree.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/jstree/dist/themes/default/style.min.css',
                            'js/plugin/jstree/dist/jstree.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.ui.languageBarIcon', {
            url: '/language-bar-icon',
            data: { pageTitle: 'UI Language Bar Icon' },
            templateUrl: 'views/ui_language_bar_icon.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/flag-icon/css/flag-icon.css'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.form', {
            url: '/form',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.form.elements', {
            url: '/elements',
            data: { pageTitle: 'Form Elements' },
            templateUrl: 'views/form_elements.html'
        })
        .state('house-dict.form.plugins', {
            url: '/plugins',
            data: { pageTitle: 'Form Plugins' },
            templateUrl: 'views/form_plugins.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/bootstrap-datepicker/css/datepicker.css',
                            'js/plugin/bootstrap-datepicker/css/datepicker3.css',
                            'js/plugin/ionRangeSlider/css/ion.rangeSlider.css',
                            'js/plugin/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'js/plugin/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css',
                            'js/plugin/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'js/plugin/password-indicator/css/password-indicator.css',
                            'js/plugin/bootstrap-combobox/css/bootstrap-combobox.css',
                            'js/plugin/bootstrap-select/bootstrap-select.min.css',
                            'js/plugin/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            'js/plugin/jquery-tag-it/css/jquery.tagit.css',
                            'js/plugin/bootstrap-daterangepicker/daterangepicker-bs3.css',
                            'js/plugin/select2/dist/css/select2.min.css',
                            'js/plugin/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'js/plugin/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'js/plugin/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'js/plugin/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js',
                            'js/plugin/masked-input/masked-input.min.js',
                            'js/plugin/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'js/plugin/password-indicator/js/password-indicator.js',
                            'js/plugin/bootstrap-combobox/js/bootstrap-combobox.js',
                            'js/plugin/bootstrap-select/bootstrap-select.min.js',
                            'js/plugin/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'js/plugin/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'js/plugin/jquery-tag-it/js/tag-it.min.js',
                            'js/plugin/bootstrap-daterangepicker/moment.js',
                            'js/plugin/bootstrap-daterangepicker/daterangepicker.js',
                            'js/plugin/select2/dist/js/select2.min.js',
                            'js/plugin/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ] 
                    });
                }]
            }
        })
        .state('house-dict.form.sliderSwitcher', {
            url: '/slider-switcher',
            data: { pageTitle: 'Form Slider + Switcher' },
            templateUrl: 'views/form_slider_switcher.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/switchery/switchery.min.css',
                            'js/plugin/powerange/powerange.min.css',
                            'js/plugin/switchery/switchery.min.js',
                            'js/plugin/powerange/powerange.min.js'
                        ] 
                    });
                }]
            }
        })
        .state('house-dict.form.validation', {
            url: '/validation',
            data: { pageTitle: 'Form Validation' },
            templateUrl: 'views/form_validation.html'
        })
        .state('house-dict.table', {
            url: '/table',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.table.v2', {
            url: '/v2',
            data: { pageTitle: 'Basic Table' },
            templateUrl: 'views/index_v2.html'
        })
        .state('house-dict.table.basic', {
            url: '/basic',
            data: { pageTitle: 'Basic Table' },
            templateUrl: 'views/table_basic.html'
        })
        .state('house-dict.table.manage', {
            url: '/manage',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.table.manage.default', {
            url: '/default',
            data: { pageTitle: 'Managed Table Default' },
            templateUrl: 'views/table_manage.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.autofill', {
            url: '/autofill',
            data: { pageTitle: 'Managed Table Autofill' },
            templateUrl: 'views/table_manage_autofill.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'js/plugin/DataTables/extensions/AutoFill/js/autoFill.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
            
        })
        .state('house-dict.table.manage.buttons', {
            url: '/buttons',
            data: { pageTitle: 'Managed Table Buttons' },
            templateUrl: 'views/table_manage_buttons.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.colReorder', {
            url: '/colreorder',
            data: { pageTitle: 'Managed Table ColReorder' },
            templateUrl: 'views/table_manage_colreorder.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.fixedColumns', {
            url: '/fixed-column',
            data: { pageTitle: 'Managed Table Fixed Columns' },
            templateUrl: 'views/table_manage_fixed_columns.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/FixedColumns/css/fixedColumns.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/FixedColumns/js/dataTables.fixedColumns.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.fixedHeader', {
            url: '/fixed-header',
            data: { pageTitle: 'Managed Table Fixed Header' },
            templateUrl: 'views/table_manage_fixed_header.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/FixedHeader/css/fixedHeader.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/FixedHeader/js/dataTables.fixedHeader.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.keyTable', {
            url: '/keytable',
            data: { pageTitle: 'Managed Table KeyTable' },
            templateUrl: 'views/table_manage_keytable.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/KeyTable/js/dataTables.keyTable.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.responsive', {
            url: '/responsive',
            data: { pageTitle: 'Managed Table Responsive' },
            templateUrl: 'views/table_manage_responsive.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.rowReorder', {
            url: '/rowreorder',
            data: { pageTitle: 'Managed Table RowReorder' },
            templateUrl: 'views/table_manage_rowreorder.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.scroller', {
            url: '/scroller',
            data: { pageTitle: 'Managed Table Scroller' },
            templateUrl: 'views/table_manage_scroller.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Scroller/css/scroller.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Scroller/js/dataTables.scroller.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.select', {
            url: '/select',
            data: { pageTitle: 'Managed Table Select' },
            templateUrl: 'views/table_manage_select.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.table.manage.combine', {
            url: '/combine',
            data: { pageTitle: 'Managed Table Extension Combination' },
            templateUrl: 'views/table_manage_combine.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/DataTables/media/css/dataTables.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            'js/plugin/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'js/plugin/DataTables/media/js/jquery.dataTables.js',
                            'js/plugin/DataTables/media/js/dataTables.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'js/plugin/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            'js/plugin/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'js/plugin/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'js/plugin/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'js/plugin/DataTables/extensions/KeyTable/js/dataTables.keyTable.min.js',
                            'js/plugin/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            'js/plugin/DataTables/extensions/Select/js/dataTables.select.min.js'
                        ]
                    });
                }]
            }
        })
        .state('house-dict.chart', {
            url: '/chart',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.chart.flot', {
            url: '/flot',
            data: { pageTitle: 'Flot Chart' },
            templateUrl: 'views/chart_flot.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angular-flot',
                        files: [
                            'js/plugin/flot/jquery.flot.min.js',
                            'js/plugin/flot/jquery.flot.time.min.js',
                            'js/plugin/flot/jquery.flot.resize.min.js',
                            'js/plugin/flot/jquery.flot.pie.min.js',
                            'js/plugin/flot/jquery.flot.stack.min.js',
                            'js/plugin/flot/jquery.flot.crosshair.min.js',
                            'js/plugin/flot/jquery.flot.categories.js',
                            'js/plugin/flot/angular-flot.js',
                        ]
                    })
                }]
            }
        })
        .state('house-dict.chart.morris', {
            url: '/morris',
            data: { pageTitle: 'Morris Chart' },
            templateUrl: 'views/chart_morris.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/morris/morris.css',
                            'js/plugin/morris/raphael.min.js',
                            'js/plugin/morris/morris.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.chart.js', {
            url: '/chart-js',
            data: { pageTitle: 'Chart JS' },
            templateUrl: 'views/chart_js.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angles',
                        files: [
                            'js/plugin/chart-js/chart.js',
                            'js/plugin/chart-js/angular/angles.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.chart.d3', {
            url: '/chart-d3',
            data: { pageTitle: 'Chart d3' },
            templateUrl: 'views/chart_d3.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/nvd3/build/nv.d3.css',
                            'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js',
                            'js/plugin/nvd3/build/nv.d3.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.calendar', {
            url: '/calendar',
            data: { pageTitle: 'Calendar' },
            templateUrl: 'views/calendar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/fullcalendar/fullcalendar/fullcalendar.css',
                            'js/plugin/fullcalendar/fullcalendar/fullcalendar.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.map', {
            url: '/map',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.map.vector', {
            url: '/vector',
            data: { pageTitle: 'Vector Map' },
            templateUrl: 'views/map_vector.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            'js/plugin/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            'js/plugin/jquery-jvectormap/jquery-jvectormap-world-mill-en.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.map.google', {
            url: '/google',
            data: { pageTitle: 'Google Map' },
            templateUrl: 'views/map_google.html'
        })
        .state('house-dict.gallery', {
            url: '/gallery',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.gallery.v1', {
            url: '/v1',
            data: { pageTitle: 'Gallery V1' },
            templateUrl: 'views/gallery.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/isotope/isotope.css',
                            'js/plugin/lightbox/css/lightbox.css',
                            'js/plugin/isotope/jquery.isotope.min.js',
                            'js/plugin/lightbox/js/lightbox-2.6.min.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.gallery.v2', {
            url: '/v2',
            data: { pageTitle: 'Gallery V2' },
            templateUrl: 'views/gallery_v2.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'js/plugin/superbox/js/superbox.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.options', {
            url: '/options',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.options.pageBlank', {
            url: '/blank',
            data: { pageTitle: 'Blank Page' },
            templateUrl: 'views/page_blank.html'
        })
        .state('house-dict.options.pageWithFooter', {
            url: '/with-footer',
            data: { pageTitle: 'Page with Footer' },
            templateUrl: 'views/page_with_footer.html'
        })
        .state('house-dict.options.pageWithoutSidebar', {
            url: '/without-sidebar',
            data: { pageTitle: 'Page without Sidebar' },
            templateUrl: 'views/page_without_sidebar.html'
        })
        .state('house-dict.options.pageWithRightSidebar', {
            url: '/right-sidebar',
            data: { pageTitle: 'Page with Right Sidebar' },
            templateUrl: 'views/page_with_right_sidebar.html'
        })
        .state('house-dict.options.pageWithMinifiedSidebar', {
            url: '/minified-sidebar',
            data: { pageTitle: 'Page with Minified Sidebar' },
            templateUrl: 'views/page_with_minified_sidebar.html'
        })
        .state('house-dict.options.pageWithTwoSidebar', {
            url: '/two-sidebar',
            data: { pageTitle: 'Page with Two Sidebar' },
            templateUrl: 'views/page_with_two_sidebar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/sparkline/jquery.sparkline.js',
                            'js/plugin/jquery-knob/js/jquery.knob.js'
                        ]
                    })
                }]
            }
        })
        .state('house-dict.options.pageFullHeightContent', {
            url: '/full-height-content',
            data: { pageTitle: 'Full Height Content' },
            templateUrl: 'views/page_full_height.html'
        })
        .state('house-dict.options.pageWithWideSidebar', {
            url: '/wide-sidebar',
            data: { pageTitle: 'Page with Wide Sidebar' },
            templateUrl: 'views/page_with_wide_sidebar.html'
        })
        .state('house-dict.options.pageWithLightSidebar', {
            url: '/light-sidebar',
            data: { pageTitle: 'Page with Light Sidebar' },
            templateUrl: 'views/page_with_light_sidebar.html'
        })
        .state('house-dict.options.pageWithMegaMenu', {
            url: '/light-sidebar',
            data: { pageTitle: 'Page with Mega Menu' },
            templateUrl: 'views/page_with_mega_menu.html'
        })
        .state('house-dict.options.pageWithTopMenu', {
            url: '/top-menu',
            data: { pageTitle: 'Page with Top Menu' },
            templateUrl: 'views/page_with_top_menu.html'
        })
        .state('house-dict.options.pageWithMixedMenu', {
            url: '/mixed-menu',
            data: { pageTitle: 'Page with Mixed Menu' },
            templateUrl: 'views/page_with_mixed_menu.html'
        })
        .state('house-dict.options.pageWithBoxedLayout', {
            url: '/boxed-layout',
            data: { pageTitle: 'Page with Boxed Layout' },
            templateUrl: 'views/page_with_boxed_layout.html'
        })
        .state('house-dict.options.pageWithBoxedMixedMenu', {
            url: '/boxed-mixed-menu',
            data: { pageTitle: 'Page with Mixed Menu Boxed Layout' },
            templateUrl: 'views/page_boxed_layout_with_mixed_menu.html'
        })
        .state('house-dict.options.pageWithTransparentSidebar', {
            url: '/transparent-sidebar',
            data: { pageTitle: 'Page with Transparent Sidebar' },
            templateUrl: 'views/page_with_transparent_sidebar.html'
        })
        .state('house-dict.extra', {
            url: '/extra',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.extra.timeline', {
            url: '/timeline',
            data: { pageTitle: 'Timeline' },
            templateUrl: 'views/extra_timeline.html'
        })
        .state('house-dict.extra.searchResults', {
            url: '/search-results',
            data: { pageTitle: 'Search Results' },
            templateUrl: 'views/extra_search_results.html'
        })
        .state('house-dict.extra.invoice', {
            url: '/invoice',
            data: { pageTitle: 'Invoice' },
            templateUrl: 'views/extra_invoice.html'
        })
        .state('house-dict.extra.profile', {
            url: '/profile',
            data: { pageTitle: 'Profile' },
            templateUrl: 'views/extra_profile.html'
        })
        .state('comingSoon', {
            url: '/coming-soon',
            data: { pageTitle: 'Coming Soon' },
            templateUrl: 'views/extra_coming_soon.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'js/plugin/jquery.countdown/jquery.countdown.css',
                            'js/plugin/jquery.countdown/jquery.plugin.js',
                            'js/plugin/jquery.countdown/jquery.countdown.js'
                        ]
                    })
                }]
            }
        })
        .state('error', {
            url: '/error',
            data: { pageTitle: '404 Error' },
            templateUrl: 'views/extra_404_error.html'
        })
        .state('member', {
            url: '/member',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('member.login', {
            url: '/login',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('member.login.v1', {
            url: '/v1',
            data: { pageTitle: 'Login' },
            templateUrl: 'views/login.html'
        })
        .state('member.login.v2', {
            url: '/v2',
            data: { pageTitle: 'Login V2' },
            templateUrl: 'views/login_v2.html'
        })
        .state('member.login.v3', {
            url: '/v3',
            data: { pageTitle: 'Login V3' },
            templateUrl: 'views/login_v3.html'
        })
        .state('member.register', {
            url: '/register',
            data: { pageTitle: 'Register V3' },
            templateUrl: 'views/register_v3.html'
        })
        .state('house-dict.helper', {
            url: '/helper',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('house-dict.helper.css', {
            url: '/css',
            data: { pageTitle: 'Predefined CSS Classes' },
            templateUrl: 'views/helper_css.html'
        })
}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);