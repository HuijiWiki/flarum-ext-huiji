import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SessionDropdown from 'flarum/components/SessionDropdown';
app.initializers.add('reasno-flarum-ext-huiji', function() {
  extend(HeaderSecondary.prototype, 'items', function(items) {
    if (items.has('signUp')){
    	items.replace('signUp', <a href="http://www.huiji.wiki/wiki/Special:CreateAccount?returnto=Special:RedirectToForum" className="Button Button-signUp">注册</a>);
    }
    if (items.has('logIn')){
	items.replace('logIn', <a href="http://www.huiji.wiki/wiki/Special:Login?returnto=Special:RedirectToForum" className="Button Button-logIn">登录</a>);
    }
  });
  extend(SessionDropdown.prototype, 'items', function(items) {
    if (items.has('logOut')){
        items.remove('logOut');
    }
  });
  extend(HeaderPrimary.prototype, 'items', function(items){
    items.add('huiji', <a href="http://www.huiji.wiki" id="huiji-logo" className="Button Button--link"><img alt="Logo" src="http://cdn.huijiwiki.com/www/resources/assets/huiji_white.png"/></a>);
  });
});
