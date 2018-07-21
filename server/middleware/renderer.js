import path from 'path'
import fs from 'fs'
import React from 'react'
import Loadable from 'react-loadable'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import App from '../../src/App'
import manifest from '../../build/asset-manifest.json'

const extractAssets = (assets, chunk) => Object.keys(assets)
	.filter(asset => chunk.indexOf(asset.replace('.js', '')) > -1)
	.map(k => assets[k])


export default store => (req, res, next) => {
  const filepath = path.resolve(__dirname, '..', '..', 'build', 'index.html')
  fs.readFile(filepath, 'utf8', (err, htmlData) => {
    if(err) {
      console.log(err)
      return res.status(404).end()
    }

		const context = {}
		const modules = []
    const html = renderToString(
			<Provider store={store}>
				<StaticRouter context={context}>
					<Loadable.Capture report={m => modules.push(m)}>
						<App />
					</Loadable.Capture>
				</StaticRouter>
			</Provider>
    )

		// add script tag at the end
		const extractChunks = extractAssets(manifest, modules)
			.map(c => `<script type="text/javascript" src="/${c}"></script>`)

		// Grab the initial State and pass it globally
		const reduxState = JSON.stringify(store.getState())
		return res.send(
        htmlData
            .replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
						.replace(
							'</body>',
							extractChunks.join('') + '</body>'
						)
            .replace('"__SERVER_REDUX_STATE__"', reduxState)
    );
  })
}

/*
	htmlData.replace(
		'<div id="root"></div>',
		'<div id="root">${html}</div>'
	)
*/
