export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-bfff5da3.js","js":["start-bfff5da3.js","chunks/vendor-ee294e9e.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/4.js')
		],
		routes: [
			{
				type: 'endpoint',
				pattern: /^\/todos\.json$/,
				params: null,
				load: () => import('./server/entries/endpoints/todos/index.json.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/todos\/?$/,
				params: null,
				path: "/todos",
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\/([^/]+?)\.json$/,
				params: (m) => ({ uid: m[1]}),
				load: () => import('./server/entries/endpoints/todos/_uid_.json.ts.js')
			}
		]
	}
};
