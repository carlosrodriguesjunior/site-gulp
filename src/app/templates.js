angular.module("appGulp").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n    <head>\n        <title>Site Gulp</title>\n        <link rel=\"stylesheet\" href=\"styles/index.css\">\n    </head>\n    <body ng-app=\"appGulp\" ui-view=\"\">\n\n    </body>\n\n    <!-- build:js -->\n\n    <script type=\"text/javascript\" src=\"libs/angular/angular.js\"></script>\n    <script src=\"libs/angular-animate/angular-animate.min.js\"></script>\n    <script src=\"libs/angular-aria/angular-aria.min.js\"></script>\n    <script src=\"libs/angular-messages/angular-messages.min.js\"></script>\n    <script type=\"text/javascript\" src=\"libs/angular-material/angular-material.js\"></script>\n    <script type=\"text/javascript\" src=\"libs/angular-ui-router/release/angular-ui-router.js\"></script>\n\n    <script type=\"text/javascript\" src=\"app/application.js\"></script>\n    <script type=\"text/javascript\" src=\"app/modules/layout/layoutController.js\"></script>\n    <script type=\"text/javascript\" src=\"app/modules/home/homeController.js\"></script>\n    <!-- endbuild -->\n</html>\n");
$templateCache.put("app/modules/home/homeView.html","<h1>home</h1>\n");
$templateCache.put("app/modules/layout/layoutView.html","<div layout=\"row\">\n  <md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-md\')\">\n    <md-toolbar class=\"md-tall md-hue-2\">\n      <span flex></span>\n      <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n        <user-avatar></user-avatar>\n        <span></span>\n        <div>Firstname Lastname</div>\n        <div>email@domainname.com</div>\n      </div>\n    </md-toolbar>\n    <md-list>\n    <md-item>\n      <md-button ng-click=\"vm.toggleSidenavAndGoToState(\'left\',\'home\')\" class=\"md-sidenav-button\">\n        <md-item-content md-ink-ripple layout=\"row\" layout-align=\"start center\" >\n          <div class=\"inset\">\n            <i class=\"fa fa-home fa-3x\"></i>\n          </div>\n          <div class=\"inset\">Principal\n          </div>\n        </md-item-content>\n      </md-button>\n    </md-item>\n  </md-list>\n  </md-sidenav>\n\n  <div layout=\"column\" class=\"relative\" layout-fill role=\"main\">\n    <md-toolbar  class=\"header\">\n      <div class=\"md-toolbar-tools\">\n        <md-button ng-click=\"toggleSidenav()\" ng-hide=\"$mdMedia(\'gt-md\')\" aria-label=\"Menu\">\n          <i class=\"fa fa-bars fa-3x\"></i>\n        </md-button>\n        <h3 class=\"h3-site-title\">\n          Gulp site\n        </h3>\n        <span flex></span>\n      </div>\n    </md-toolbar>\n\n    </md-toolbar>\n    <md-content flex md-scroll-y class=\"md-sidenav-content\">\n      <div layout=\"column\" layout-fill layout-padding ui-view=\"main\" class=\"anim-in-out anim-fade\" data-anim-speed=\"300\"></div>\n\n    </md-content>\n  </div>\n\n\n</div>\n");}]);