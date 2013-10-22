// NOTE: This file is a stub.
//
// You must implement the client yourself based on the instructions in the
// codelab.  This file exists here only to have a default version going with
// the AppEngine backend for you to play with.



function md5cycle(x, k) { var a = x[0], b = x[1], c = x[2], d = x[3]; a = ff(a, b, c, d, k[0], 7, -680876936); d = ff(d, a, b, c, k[1], 12, -389564586); c = ff(c, d, a, b, k[2], 17,  606105819); b = ff(b, c, d, a, k[3], 22, -1044525330); a = ff(a, b, c, d, k[4], 7, -176418897); d = ff(d, a, b, c, k[5], 12,  1200080426); c = ff(c, d, a, b, k[6], 17, -1473231341); b = ff(b, c, d, a, k[7], 22, -45705983); a = ff(a, b, c, d, k[8], 7,  1770035416); d = ff(d, a, b, c, k[9], 12, -1958414417); c = ff(c, d, a, b, k[10], 17, -42063); b = ff(b, c, d, a, k[11], 22, -1990404162); a = ff(a, b, c, d, k[12], 7,  1804603682); d = ff(d, a, b, c, k[13], 12, -40341101); c = ff(c, d, a, b, k[14], 17, -1502002290); b = ff(b, c, d, a, k[15], 22,  1236535329); a = gg(a, b, c, d, k[1], 5, -165796510); d = gg(d, a, b, c, k[6], 9, -1069501632); c = gg(c, d, a, b, k[11], 14,  643717713); b = gg(b, c, d, a, k[0], 20, -373897302); a = gg(a, b, c, d, k[5], 5, -701558691); d = gg(d, a, b, c, k[10], 9,  38016083); c = gg(c, d, a, b, k[15], 14, -660478335); b = gg(b, c, d, a, k[4], 20, -405537848); a = gg(a, b, c, d, k[9], 5,  568446438); d = gg(d, a, b, c, k[14], 9, -1019803690); c = gg(c, d, a, b, k[3], 14, -187363961); b = gg(b, c, d, a, k[8], 20,  1163531501); a = gg(a, b, c, d, k[13], 5, -1444681467); d = gg(d, a, b, c, k[2], 9, -51403784); c = gg(c, d, a, b, k[7], 14,  1735328473); b = gg(b, c, d, a, k[12], 20, -1926607734); a = hh(a, b, c, d, k[5], 4, -378558); d = hh(d, a, b, c, k[8], 11, -2022574463); c = hh(c, d, a, b, k[11], 16,  1839030562); b = hh(b, c, d, a, k[14], 23, -35309556); a = hh(a, b, c, d, k[1], 4, -1530992060); d = hh(d, a, b, c, k[4], 11,  1272893353); c = hh(c, d, a, b, k[7], 16, -155497632); b = hh(b, c, d, a, k[10], 23, -1094730640); a = hh(a, b, c, d, k[13], 4,  681279174); d = hh(d, a, b, c, k[0], 11, -358537222); c = hh(c, d, a, b, k[3], 16, -722521979); b = hh(b, c, d, a, k[6], 23,  76029189); a = hh(a, b, c, d, k[9], 4, -640364487); d = hh(d, a, b, c, k[12], 11, -421815835); c = hh(c, d, a, b, k[15], 16,  530742520); b = hh(b, c, d, a, k[2], 23, -995338651); a = ii(a, b, c, d, k[0], 6, -198630844); d = ii(d, a, b, c, k[7], 10,  1126891415); c = ii(c, d, a, b, k[14], 15, -1416354905); b = ii(b, c, d, a, k[5], 21, -57434055); a = ii(a, b, c, d, k[12], 6,  1700485571); d = ii(d, a, b, c, k[3], 10, -1894986606); c = ii(c, d, a, b, k[10], 15, -1051523); b = ii(b, c, d, a, k[1], 21, -2054922799); a = ii(a, b, c, d, k[8], 6,  1873313359); d = ii(d, a, b, c, k[15], 10, -30611744); c = ii(c, d, a, b, k[6], 15, -1560198380); b = ii(b, c, d, a, k[13], 21,  1309151649); a = ii(a, b, c, d, k[4], 6, -145523070); d = ii(d, a, b, c, k[11], 10, -1120210379); c = ii(c, d, a, b, k[2], 15,  718787259); b = ii(b, c, d, a, k[9], 21, -343485551); x[0] = add32(a, x[0]); x[1] = add32(b, x[1]); x[2] = add32(c, x[2]); x[3] = add32(d, x[3]); }
function cmn(q, a, b, x, s, t) { a = add32(add32(a, q), add32(x, t)); return add32((a << s) | (a >>> (32 - s)), b); }
function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t); }
function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t); }
function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t); }
function md51(s) {
txt = ''; var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i; for (i=64; i<=s.length; i+=64) { md5cycle(state, md5blk(s.substring(i-64, i))); }
s = s.substring(i-64); var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) { md5cycle(state, tail); for (i=0; i<16; i++) tail[i] = 0; }
tail[14] = n*8; md5cycle(state, tail); return state;
}
function md5blk(s) { var md5blks = [], i; for (i=0; i<64; i+=4) { md5blks[i>>2] = s.charCodeAt(i) + (s.charCodeAt(i+1) << 8) + (s.charCodeAt(i+2) << 16) + (s.charCodeAt(i+3) << 24); } return md5blks; }
var hex_chr = '0123456789abcdef'.split('');
function rhex(n)
{ var s='', j=0; for(; j<4; j++) s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
return s; }
function hex(x) { for (var i=0; i<x.length; i++) x[i] = rhex(x[i]);
return x.join(''); }
function md5(s) { return hex(md51(s)); }
function add32(a, b) { return (a + b) & 0xFFFFFFFF; }


angular.module('glossaryApp', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/terms', {
      controller: 'TermsListController',
      template: "<div class=\"termsList\">\n  <div class=\"meta\">\n    <gl-profile></gl-profile>\n  </div>\n  <div class=\"content\">\n    <h1>Glossary</h1>\n\n    <ul>\n      <li ng-repeat=\"term in termsList.terms | orderBy:'name' track by term.id\">\n        <a ng-href=\"/#/terms/{{term.id}}\">\n          <strong>\n            {{term.name}}\n          </strong>\n          <br>\n\n          <span class=\"definition\" ng-bind=\"term.definition\"></span>\n          <br>\n\n          <span class=\"meta\">\n            Created by\n            <strong>{{term.creatorEmail | personalize}}</strong>\n            on <span ng-bind=\"term.createdAt | date\"></span>\n          </span>\n        </a>\n      </li>\n    </ul>\n\n    <div class=\"createTermForm\">\n      <h2>Add a Term</h2>\n\n      <form\n        name=\"newTermForm\"\n        ng-submit=\"termsList.saveTerm()\">\n\n        <label for=\"termsList.currentUser.email\">\n          <span ng-hide=\"termsList.currentUser.email\">You must enter your email to submit a defnition</span>\n          <span ng-show=\"termsList.currentUser.email\">Posting as:</span>\n        </label>\n        <br>\n\n        <input ng-change=\"termsList.currentUser.save()\" type=\"email\" required ng-model=\"termsList.currentUser.email\">\n        <br>\n\n        <label for=\"newTerm.name\">\n          Term to be Defined:\n        </label>\n        <br>\n\n        <input\n          type=\"text\"\n          ng-model=\"newTerm.name\"\n          required>\n        <br>\n\n        <label for=\"newTerm.definition\">\n          Definition\n        </label>\n        <br>\n\n        <input\n          type=\"text\"\n          ng-model=\"newTerm.definition\"\n          required>\n        <br>\n        <button\n          ng-disabled=\"!newTermForm.$valid\"\n          ng-click=\"newTermForm.submit()\">\n          Add Term\n        </button>\n\n\n      </form>\n    </div>\n  </div>\n</div>\n",
      controllerAs: 'termsList'
    })
    .when('/terms/:id', {
      controller: 'TermDetailController',
      template: "<div class=\"termDetail\">\n  <div class=\"metaContent\">\n    <gl-profile></gl-profile>\n  </div>\n\n  <div class=\"termContent\">\n    <div class=\"termHeading\">\n      <h1 contenteditable=\"true\" ng-model=\"termDetail.term.name\">\n      </h1>\n\n      <p class=\"definition\">\n        <strong>Definition: </strong>\n        <div contenteditable=\"true\" ng-model=\"termDetail.term.definition\"></div>\n\n      </p>\n    </div>\n\n    <div class=\"termComments\">\n      <h3>Comments</h3>\n      <em ng-hide=\"termDetail.comments.$resolved\">Loading Comments</em>\n      <em ng-show=\"termDetail.comments.$resolved && termDetail.comments.length === 0\">No Comments Yet</em>\n      <ul>\n        <li ng-repeat=\"comment in termDetail.comments | orderBy:'date':true\">\n          <span class=\"text\" ng-bind=\"comment.text\"></span>\n          <em class=\"date\"> Added by {{comment.creatorEmail | personalize}} on {{comment.date | date}}</em>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"addComment\">\n      <form ng-submit=\"termDetail.addComment(termDetail.newComment)\" name=\"newCommentForm\">\n        <label for=\"termDetail.currentUser.email\">\n          <span ng-hide=\"termDetail.currentUser.email\">You must enter your email to submit a defnition</span>\n          <span ng-show=\"termDetail.currentUser.email\">Posting as:</span>\n        </label>\n\n        <br>\n\n        <input ng-change=\"termDetail.currentUser.save()\" type=\"email\" required ng-model=\"termDetail.currentUser.email\">\n\n        <br>\n        <label for=\"termDetail.newComment.text\">\n          Comment:\n        </label>\n        <br>\n        <input type=\"text\" ng-model=\"termDetail.newComment.text\" required>\n        <br>\n        <button ng-disabled=\"newCommentForm.$invalid\" type=\"submit\">Add Comment</button>\n      </form>\n    </div>\n  </div>\n\n  <footer>\n    <a href=\"/#/terms\">&laquo; All Terms</a>\n  </footer>\n</div>\n",
      controllerAs: 'termDetail'
    })
    .otherwise({
      redirectTo: '/terms'
    });
  }])
  .constant('TERMS_PATH', '/api/terms')
  .constant('COMMENTS_PATH', '/api/terms/:termId/comments')
  .constant('LOCALSTORAGE_PROFILE_KEY', 'glossaryApp.profile');

angular.module('glossaryApp')
  .filter('glMapById', function () {
    return function (terms) {
      var mapped = {};

      terms.forEach(function (item) {
        mapped[item.id] = item;
      });

      return mapped;
    }
  })
  .factory('Term', ['$resource', 'TERMS_PATH',
    function ($resource, TERMS_PATH) {
      return $resource(TERMS_PATH + '/:id', null, {
        update: {
          url: TERMS_PATH + '/:id',
          method: 'PUT'
        }});
    }])
  .service('glTermsStore', ['$filter', 'Term', '$q', function ($filter, Term, $q) {
    var self = this, queryResult;
    mapById = $filter('glMapById');
    this.terms = [];

    this.add = function (term) {
      this.terms.push(Term.save(term));
    };

    this.updateById = function (id, term) {
      var mapped = mapById(this.terms);
      mapped[id].name = term.name;
      mapped[id].definition = term.definition;
      Term.update({id: id}, term);
    };

    queryResult = Term.query(function (terms) {
      angular.forEach(terms, function (term) {
        self.terms.push(term);
      });
    });
  }]);


angular.module('glossaryApp')
  .factory('Comments', ['$resource', 'COMMENTS_PATH', function ($resource, COMMENTS_PATH) {
    return $resource(COMMENTS_PATH, {termId:'@termId'});
  }])
  .service('glTermCommentsStore', ['Comments', function (Comments) {
    this.mapTermComments = {};

    this.getCommentsForTerm = function (id) {
      this.mapTermComments[id] = this.mapTermComments[id] || Comments.query({termId: id});

      return this.mapTermComments[id];
    };

    this.addCommentToTerm = function (id, comment) {
      if (!comment.createdTimestamp) comment.createdTimestamp = new Date().getTime();
      if (!comment.termId) comment.termId = id;

      Comments.save(comment, function (value) {
        comment.id = value.id
      });

      this.mapTermComments[id] = this.mapTermComments[id] || [];
      this.mapTermComments[id].push(comment);
    };
  }]);


angular.module('glossaryApp')
  .factory('glGravatarEmail', function () {
    return function (email) {
      if (!angular.isString(email)) return;

      var emailHash = md5(email.toLowerCase());
      return 'http://gravatar.com/avatar/' + emailHash;
    }
  })
  .service('glProfileStore',
    ['$window', 'glGravatarEmail', 'LOCALSTORAGE_PROFILE_KEY',
    function ($window, glGravatarEmail, LOCALSTORAGE_PROFILE_KEY) {
      var user = $window.localStorage.getItem(LOCALSTORAGE_PROFILE_KEY);
      user = JSON.parse(user || '{}');
      this.picture = user.picture;
      this.email = user.email;

      this.save = function () {
        this.picture = glGravatarEmail(this.email);

        $window.localStorage.setItem(LOCALSTORAGE_PROFILE_KEY, JSON.stringify({
          email: this.email,
          picture: this.picture
        }));
      };
    }])

angular.module('glossaryApp')
  .controller('TermsListController',
    ['$scope', 'glTermsStore', 'glProfileStore',
    function ($scope, glTermsStore, glProfileStore) {
      this.terms = glTermsStore.terms;
      this.currentUser = glProfileStore;

      this.saveTerm = function () {
        glTermsStore.add({
          name: $scope.newTerm.name,
          definition: $scope.newTerm.definition,
          creatorEmail: this.currentUser.email,
          createdAt: new Date().getTime()
        });

        //Reset the model
        $scope.newTerm = {};
      };
    }]);

angular.module('glossaryApp')
  .controller('TermDetailController',
    ['$scope', '$routeParams', '$timeout', 'glTermsStore', 'glTermCommentsStore', 'glProfileStore', 'Term',
      function ($scope, $routeParams, $timeout, glTermsStore, glTermCommentsStore, glProfileStore, Term) {
        var self = this;
        var postResolved = false;
        this.term = Term.get({id: $routeParams.id});
        this.currentUser = glProfileStore;
        this.comments = glTermCommentsStore.getCommentsForTerm($routeParams.id);

        this.addComment = function (comment) {
          comment.creatorEmail = this.currentUser.email;
          glTermCommentsStore.addCommentToTerm($routeParams.id, comment);
          this.newComment = {};
        };

        $scope.$watch('termDetail.term', function (newVal, oldVal) {
          if (!self.term.$resolved || newVal === oldVal) {
            return;
          }
          else if (self.term.$resolved && !postResolved) {
            //Prevent update for first watch after model is resolved.
            return postResolved = true;
          }

          // Wait 500ms after last change to update service
          if (this.throttledChange) {
            $timeout.cancel(this.throttledChange);
            delete this.throttledChange;
          }

          this.throttledChange = $timeout(function () {
            glTermsStore.updateById($routeParams.id, self.term);
          }, 250);
        }, true);
    }]);

angular.module('glossaryApp')
  .directive('glProfile', function () {
    return {
      scope: {},
      restrict: 'E',
      template: "<div class=\"container\">\n  <h3>Your Profile</h3>\n\n  <em class=\"no-picture\" ng-if=\"!profile.profileStore.picture\">\n    Enter a valid gravatar email to see your picture.\n  </em>\n\n  <img ng-src=\"{{profile.profileStore.picture}}\" ng-if=\"profile.profileStore.picture\">\n  <br>\n  <label for=\"profile.profileStore.email\">\n    Email Address:\n  </label>\n  <br>\n\n  <input type=\"email\" ng-model=\"profile.profileStore.email\" placeholder=\"No Email Set\" ng-change=\"profile.profileStore.save()\">\n</div>\n",
      controller: ['glProfileStore', function (glProfileStore) {
        this.profileStore = glProfileStore;
      }],
      controllerAs: 'profile'
    }
  });

angular.module('glossaryApp')
  .directive('contenteditable', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, element, attrs, ngModel) {
        if(!ngModel) return;

        ngModel.$render = function() {
          element.html(ngModel.$viewValue || '');
        };

        element.on('blur keyup change', function() {
          scope.$apply(read);
        });
        read();

        function read() {
          var html = element.html();
          if( attrs.stripBr && html == '<br>' ) {
            html = '';
          }
          ngModel.$setViewValue(html);
        }
      }
    };
  });

angular.module('glossaryApp')
  .filter('personalize', function (glProfileStore) {
    return function (email) {
      if (angular.isString(glProfileStore.email) && glProfileStore.email === email) {
        return "You"
      }
      else {
        return email;
      }
    }
  });
