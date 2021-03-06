import React from 'react'
import ReactDOM from 'react-dom'

import './polyfill'
import Client from './KuritaClient'
import Comic from './Comic'

function main() {
  const debug = location.hash === '#debug'

  const client = new Client({
    debug,
    endpoint: 'wss://emojidome.xkcd.com/2131/socket',
  })

  const container = document.getElementById('comic')
  const comic = (
    <Comic
      altText="This same drama plays out millions of times per day as fingers hover over emoji keyboards."
      emojiBasePath="twemoji/"
      client={client}
    />
  )
  ReactDOM.render(comic, container)

  client.connect()
}

document.addEventListener('DOMContentLoaded', main)
