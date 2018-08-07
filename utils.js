const path = require('path')
const { promisify } = require('util')
const frontMatter = require('front-matter')
const fs = require('fs')

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

const deserialize = parsed => ({
  title: parsed.attributes.title,
  summary: parsed.attributes.summary,
  url: parsed.attributes.url,
  date: parsed.attributes.date,
  body: parsed.body
})

async function fetch(markdown_name) {
  const postsDir = path.join(__dirname, 'posts');
  this.markdown_name = markdown_name;
  return Promise.resolve((async () => {
    const markdown = await readFile(path.join(postsDir, this.markdown_name + '.md'), 'utf-8')
    const parsed = frontMatter(markdown)
    return deserialize(parsed)
  })())
}
exports.fetch = fetch