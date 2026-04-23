export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","robots.txt","site.webmanifest","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webmanifest":"application/manifest+json",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.gAxNfWjg.js",app:"_app/immutable/entry/app.DbHtrKqN.js",imports:["_app/immutable/entry/start.gAxNfWjg.js","_app/immutable/chunks/DHDhqV4w.js","_app/immutable/chunks/g7twk5qm.js","_app/immutable/chunks/DXoejTuV.js","_app/immutable/entry/app.DbHtrKqN.js","_app/immutable/chunks/g7twk5qm.js","_app/immutable/chunks/CjReXE5W.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/benchmark",
				pattern: /^\/benchmark\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
