'use strict';

System.register('reasno/flarum-huiji/main', ['flarum/extend', 'flarum/components/HeaderSecondary', 'flarum/components/UserPage'], function (_export, _context) {
  "use strict";

  var extend, HeaderSecondary, UserPage;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary.default;
    }, function (_flarumComponentsUserPage) {
      UserPage = _flarumComponentsUserPage.default;
    }],
    execute: function () {
      app.initializers.add('reasno-flarum-ext-huiji', function () {
        extend(HeaderSecondary.prototype, 'items', function (items) {
          if (items.has('signUp')) {
            items.replace('signUp', m(
              'a',
              { href: 'http://www.huiji.wiki/wiki/Special:CreateAccount?returnto=forum:', className: 'Button Button-signUp' },
              '注册'
            ));
          }
          if (items.has('logIn')) {
            items.replace('logIn', m(
              'a',
              { href: 'http://www.huiji.wiki/wiki/Special:Login?returnto=forum:', className: 'Button Button-logIn' },
              '登录'
            ));
          }
        });
        extend(SessionDropdown.prototype, 'items', function (items) {
          if (items.has('logOut')) {
            items.remove('logOut');
          }
        });
      });
    }
  };
});