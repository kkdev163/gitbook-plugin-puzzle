module.exports = {
    hooks: {
        'page': function (page) {
            var pluginConfig = this.options.pluginsConfig;
            if (pluginConfig && pluginConfig['puzzle'] && pluginConfig['puzzle'].id) {
                page.content = page.content + `<script>!function(e,n,t,s,c){var r=void 0!==t&&t.resolve,a=e[s];(a=e[s]=function(){this.modules={}}).callbacks=[],a.ready=r?function(){return a.instance?t.resolve(a.instance.vars()):new t(function(e){return a.callbacks.push(e)})}:function(e){return a.instance?e(a.instance.vars()):a.callbacks.push(e)};var i=n.createElement(c),u=n.getElementsByTagName(c)[0];i.async=!0,i.src="https://s6.music.126.net/puzzle/puzzle@${pluginConfig['puzzle'].id}.js",u.parentNode.insertBefore(i,u)}(window,document,window.Promise,"puzzle","script");</script>`
            }
            return page;
        }
    }
};
