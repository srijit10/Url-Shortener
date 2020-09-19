const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const url = require('./constants.js');

mongoose.connect(`${url.uri()}`, {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
    res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
    const geturldata = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (geturldata == null)
        return res.sendStatus(404)

    geturldata.clicks++
    geturldata.save()

    res.redirect(geturldata.full)
})

app.listen(process.env.PORT || 5000)