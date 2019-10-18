/* eslint-disable import/no-duplicates */
import express from 'express';
import path from 'path';
import cors from 'cors'
import bodyParser from 'body-parser';
import sockjs from 'sockjs';
import faker from 'faker';
import fs from 'fs';

import cookieParser from 'cookie-parser'
import Html from '../client/html';
import Variables from '../client/variables';

const PAGE_SIZE = 10

let connections = [];
const clientVariables = Object.keys(process.env)
  .filter(key => key.indexOf('CLIENT') === 0)
  .reduce((res, key) => (Object.assign({}, res, { [key]: process.env[key] })), {});


const port = process.env.PORT || 3000;
const server = express();

server.use(cors());

server.use(express.static(path.resolve(__dirname, '../dist/assets')));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
server.use(bodyParser.json({ limit: '50mb', extended: true }))

server.use(cookieParser());

const imgdata = [
  0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
  0x00, 0x00, 0x00, 0x21, 0xf9, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00, 0x2c, 0x00, 0x00, 0x00, 0x00,
  0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3b
]
const imgbuf = Buffer.from(imgdata)

server.get('/tracker/:userId.gif', (req, res) => {
  const { userId } = req.params
  const dataObj = {
    language: req.headers['accept-language'],
    userAgent: req.headers['user-agent'],
    date: +(new Date()),
    ipAddress: req.connection.remoteAddress,
    userId
  }
  const fileName = `${__dirname}/logs/${userId}_${dataObj.date}.json`
  console.log(dataObj)
  return fs.writeFile(fileName, JSON.stringify(dataObj), () => {
    res.writeHead(200, {
      'Content-Type': 'image/gif',
      'Content-Length': imgdata.length,
    })
    res.end(imgbuf)
  })
})

const getFakeUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    company: faker.company.companyName(),
    sallary: faker.finance.amount(),
    age: (faker.random.number() % 40) + 18,
    city: faker.address.city(),
    ip: faker.internet.ip(),
    ZipCode: faker.address.zipCode()
  }
}

server.get('/api/users/:PageIndex', (req, res) => {
  const { PageIndex } = req.params
  const fileName = `${__dirname}/tmp/data.json`
  fs.readFile(fileName, (error, data) => {
    if (!error) {
      return res.json(
        JSON.parse(data).slice(
          +PageIndex * PAGE_SIZE,
          (+PageIndex + 1) * PAGE_SIZE
        )
      )
    }
    const GeneratedData = new Array(100).fill(null).map(getFakeUser)
    return fs.writeFile(fileName, JSON.stringify(GeneratedData), () => res.json(GeneratedData).slice(
      +PageIndex * PAGE_SIZE,
      (+PageIndex + 1) * PAGE_SIZE
    ))
  })
});

const echo = sockjs.createServer();
echo.on('connection', (conn) => {
  connections.push(conn);
  conn.on('data', async () => {});

  conn.on('close', () => {
    connections = connections.filter(c => c.readyState !== 3)
  });
});


server.get('/js/variables.js', (req, res) => {
  res.send(
    Variables({
      clientVariables
    })
  );
});

server.get('/', (req, res) => {
  // const body = renderToString(<Root />);
  const title = 'Server side Rendering';
  res.send(
    Html({
      body: '',
      title,
      clientVariables
    })
  );
});

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState,
      clientVariables
    })
  );
});


const app = server.listen(port);

echo.installHandlers(app, { prefix: '/ws' });

// eslint-disable-next-line no-console
console.log(`Serving at http://localhost:${port}`);
