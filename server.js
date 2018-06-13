const express = require('express');
const next = require('next');
const { parse } = require('url');
const utils = require('./utils');

const serialize = data => JSON.stringify({ data });

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/Posts/:id', (req, res) => {
    const actualPage = '/Template'
    const queryParams = {identifiant: req.params.id}
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if(pathname.includes('/api/')) {
        res.writeHead(200, { 'Content-Type': 'application/json'})
        let markdown_name = pathname.split('/')[2];
        (async _ => {
            let posts = await utils.fetch(markdown_name);
            return res.end(serialize(posts))
        })()
        }
    return handle(req, res)
    })

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + (process.env.PORT || 3000))
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})