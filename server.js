const express = require('express');
const next = require('next');
const { parse } = require('url');
const utils = require('./utils');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const flash = require('express-flash-messages');
const session = require('express-session')

const serialize = data => JSON.stringify({ data });

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const routes = require('./routes')
const handle = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: false}));
  server.use(bodyParser.json());
  server.use(flash());
  server.use(session({
    secret: "cat bat", 
    cookie: { maxAge: 6000 },
    resave: true,    // forces the session to be saved back to the store
    saveUninitialized: false  // dont save unmodified
  }));

  server.get('/', (req, res) => {
    const actualPage = '/Posts'
    app.render(req, res, actualPage)
  })

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

//Configuration of mail provider --------------------------------------
  
  server.post('/send', async (req, res) => {
    const output = `
      <p>Vous avez une nouvelle demande de contact</p>
      <h3>Details du contact</h3>
      <li>Nom: ${req.body.name} ${req.body.surname} </li>
      <li>Email: ${req.body.email} </li>
      <li>Tel: ${req.body.tel} </li>
      <li>Email: ${req.body.message} </li>
    `
    console.log(output);

    let transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "bc290871ae48b6", // generated ethereal user
        pass: "9ba599d535327a" // generated ethereal password
      },
      tls: {
        rejectUnauthorized: true
      }
    });
  
    try {
      // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'rasselio@mailtrap.io', // sender address
      to: "rasselio.diack@gmail.com", // list of receivers
      subject: `Requete de ${req.body.name}`, // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
    console.log("Envelopp: %s", info.envelope);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    if (info.messageId) {
      req.flash('notify', 'This is a notification')
      res.redirect('/Contacts')
    } else res.redirect('/Contacts') 
    } catch (error) {
        console.error(error.stack)
        process.exit(1)
    }
  })

  //------------------------------------------------------------------

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + (process.env.PORT || 3000))
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
