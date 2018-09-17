import path from 'path'
import express from 'express'
import React from 'react'
import cors from 'cors'
import Loadable from 'react-loadable'
import serverRenderer from './middleware/renderer'
import store from '../src/store/index'
const app = express()
const router = express.Router()

//
// enable cors
app.use(cors())
// serve static files
app.use(express.static(path.join(__dirname, "..", "build")))
const indexAction = (req, res, next) => {
	serverRenderer(store)(req, res, next)
}

router.use('*', indexAction)
router.use(express.static(
	path.resolve(__dirname, '..', 'build'),
	{ maxAge: '30d'}
))
app.use(router)

const port = process.env.PORT || 3000
Loadable.preloadAll().then(() => {
	app.listen(port, err => {
		if(err) {
			console.log(err)
		}
		console.log(`Running on http://localhost:${port}`);
	})
})
