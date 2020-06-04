// @flow

import ENV from '../../env.json'

class NotifServer {
  uri: string
  version: number
  apiKey: string

  constructor(version: number) {
    // eslint-disable-next-line
    this.uri = 'https://notif1.edge.app:8444'
    this.version = version
    this.apiKey = ENV.AIRBITZ_API_KEY
  }

  async get(path: string) {
    const response = await fetch(`${this.uri}/v${this.version}/${path}`, {
      headers: {
        'X-Api-Key': this.apiKey
      }
    })
    if (response != null) {
      const result = await response.json()
      return result
    }
  }

  async post(path: string, body?: Object) {
    const response = await fetch(`${this.uri}/v${this.version}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': this.apiKey
      },
      body: JSON.stringify(body)
    })
    if (response != null) {
      const result = await response.json()
      return result
    }
  }

  async put(path: string, body?: Object) {
    const response = await fetch(`${this.uri}/v${this.version}/${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': this.apiKey
      },
      body: JSON.stringify(body)
    })
    if (response != null) {
      const result = await response.json()
      return result
    }
  }
}

export const notif1 = new NotifServer(1)
