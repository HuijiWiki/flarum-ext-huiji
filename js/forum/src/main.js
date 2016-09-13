import { extend } from 'flarum/extend';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SessionDropdown from 'flarum/components/SessionDropdown';
app.initializers.add('reasno-flarum-ext-huiji', function() {
  extend(HeaderSecondary.prototype, 'items', function(items) {
    if (items.has('signUp')){
    	items.replace('signUp', <a href="http://www.huiji.wiki/wiki/Special:CreateAccount?returnto=forum:" className="Button Button-signUp">注册</a>);
    }
    if (items.has('logIn')){
	items.replace('logIn', <a href="http://www.huiji.wiki/wiki/Special:Login?returnto=forum:" className="Button Button-logIn">登录</a>);
    }
  });
  extend(SessionDropdown.prototype, 'items', function(items) {
    if (items.has('logOut')){
        items.remove('logOut');
    }
  });
});
