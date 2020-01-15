#!/usr/bin/env node

require('dotenv').config()
const puppeteer = require('puppeteer')

const appIdArg = process.argv.filter(arg => arg.indexOf('/') === -1 && arg.split('.').length >= 3)[0]
const appIdEnv = process.env.APP_ID

const appId = appIdArg ? appIdArg : appIdEnv

if (appId == null || appId === '') {
    console.error(`You need to specify APPID.`)
    return -1
}

const url = `https://play.google.com/store/apps/details?id=${appId}`
const elementSelector = '.BHMmbe'

async function scrapeElement(url, elementSelector) {
    let browser
    try {
        browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)

        const el = await page.$(elementSelector)
        const textContent = await el.getProperty('textContent')
        return textContent.jsonValue()
    }
    finally {
        browser.close()
    }
}

scrapeElement(url, elementSelector)
    .then(console.log)
    .catch(console.error)