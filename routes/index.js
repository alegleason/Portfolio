const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about-me', (req, res) => {
    res.render('about')
})

router.get('/my-projects', (req, res) => {
    res.render('projects')
})

router.get('/my-resume', (req, res) => {
    res.render('resume')
})

router.get('/lgbtq-involvement', (req, res) => {
    res.render('lgbtq')
})

module.exports = router