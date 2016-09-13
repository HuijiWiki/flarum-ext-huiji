'use strict';

System.register('reasno/flarum-huiji/main', ['flarum/extend', 'flarum/components/HeaderPrimary', 'flarum/components/HeaderSecondary', 'flarum/components/SessionDropdown'], function (_export, _context) {
  "use strict";

  var extend, HeaderPrimary, HeaderSecondary, SessionDropdown;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsHeaderPrimary) {
      HeaderPrimary = _flarumComponentsHeaderPrimary.default;
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary.default;
    }, function (_flarumComponentsSessionDropdown) {
      SessionDropdown = _flarumComponentsSessionDropdown.default;
    }],
    execute: function () {
      app.initializers.add('reasno-flarum-ext-huiji', function () {
        extend(HeaderSecondary.prototype, 'items', function (items) {
          if (items.has('signUp')) {
            items.replace('signUp', m(
              'a',
              { href: 'http://www.huiji.wiki/wiki/Special:CreateAccount?returnto=Special:RedirectToForum', className: 'Button Button-signUp' },
              '注册'
            ));
          }
          if (items.has('logIn')) {
            items.replace('logIn', m(
              'a',
              { href: 'http://www.huiji.wiki/wiki/Special:Login?returnto=Special:RedirectToForum', className: 'Button Button-logIn' },
              '登录'
            ));
          }
        });
        extend(SessionDropdown.prototype, 'items', function (items) {
          if (items.has('logOut')) {
            items.remove('logOut');
          }
        });
        extend(HeaderPrimary.prototype, 'items', function (items) {
          items.add('huiji', m(
            'a',
            { href: 'http://www.huiji.wiki', id: 'huiji-logo', className: 'Button Button--link' },
            m('img', { alt: 'Logo', src: 'http://cdn.huijiwiki.com/www/resources/assets/huiji_white.png' })
          ));
        });
      });
    }
  };
});