const express = require('express')
const router = new express.Router()
const path = require('path')

router.get('/api/test', (req, res) => {
    console.log('test')
})

module.exports = router