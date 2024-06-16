/* eslint-disable @typescript-eslint/no-explicit-any */

export default class fetchData {
  static token = process.env.token
  static api_key = process.env.api_key

  static formatResponse(response: any) {
    if (response) {
      return response.json();
    }
    throw new Error('Something went wrong');
  }

  static getHeaders() {
    return {
      "Content-type": "application/json",
      Authorization: `Bearer ${this.token}`,
    }
  }

  static async get(url: string) {
    return fetch(`https://api.themoviedb.org/3/${url}?api_key=${this.api_key}`, {
      method: 'GET',
      headers: this.getHeaders()
    }).then(this.formatResponse);
  }

  static async post(url: string, data: any) {
    return fetch(`https://api.themoviedb.org/3/${url}?api_key=${this.api_key}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: this.getHeaders()
    }).then(this.formatResponse);
  }

  static async put(url: string, data: any) {
    return fetch(`https://api.themoviedb.org/3/${url}?api_key=${this.api_key}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: this.getHeaders()
    }).then(this.formatResponse);
  }

  static async delete(url: string) {
    return fetch(`https://api.themoviedb.org/3/${url}?api_key=${this.api_key}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    }).then(this.formatResponse);
  }
}

