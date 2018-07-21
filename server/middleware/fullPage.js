const fullPage = (html, preloadedState) => {
	return (
		`
		<!doctype html>
		<html>
			<head>
				<title>lettershack</title>
			</head>
			<body>
				<div id="root">${html}</div>
				<script>
					// WARNING: See the following for security issues around embedding JSON in HTML:
					// http://redux.js.org/recipes/ServerRendering.html#security-considerations
					window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
				</script>
				<script src="/static/bundle.js"></script>
			</body>
		</html>
		`
	)
}

export default fullPage
