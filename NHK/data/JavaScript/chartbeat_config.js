var _cb_sections = '';
try {
	if (typeof(_cb_sections_preset) == 'undefined') {
		var _cb_pathinfo = location.pathname.split('/');
		switch (_cb_pathinfo[2]) {
			case 'tokushu': _cb_sections = 'WEB特集,ビジネス特集'; break;
			case 'web_tokushu': _cb_sections = 'WEB特集'; break;
			case 'business_tokushu': _cb_sections = 'ビジネス特集'; break;
			case 'special': _cb_sections = 'スペシャルコンテンツ'; break;
			case 'word': _cb_sections = '注目ワード'; break;
			case 'tokusetsu': _cb_sections = '特設'; break;
			default: _cb_sections = 'その他'; break;
		}
	} else {
		_cb_sections = _cb_sections_preset;
	}
} catch (e) {
	_cb_sections = '例外';
}
var _sf_async_config={};
/** CONFIGURATION START **/
_sf_async_config.uid = 64957;
_sf_async_config.domain = 'www3.nhk.or.jp';
_sf_async_config.useCanonical = true;
_sf_async_config.sections = _cb_sections;  //CHANGE THIS
_sf_async_config.authors = 'NEWS WEB';    //CHANGE THIS
_sf_async_config.playerdomain = 'www3.nhk.or.jp';
/** CONFIGURATION END **/
(function(){
function loadChartbeat() {
window._sf_endpt=(new Date()).getTime();
var e = document.createElement('script');
e.setAttribute('language', 'javascript');
e.setAttribute('type', 'text/javascript');
e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
document.body.appendChild(e);
}
var oldonload = window.onload;
window.onload = (typeof window.onload != 'function') ?
loadChartbeat : function() { oldonload(); loadChartbeat(); };
})();