const endpoint = 'https://yts.am/api/v2/'

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${endpoint}movie_suggestions.json?movie_id=${id}`)
    const { data } = await query.json()

    return data.movies
  }

  async getMovies() {
    const query = await fetch(`${endpoint}list_movies.json?`)
    const { data } = await query.json()

    return data.movies
  }

  async searchMovie(title) {
    const query = await fetch(`${endpoint}list_movies.json?limit=1&query_term=${title}&sort_by=rating`)
    const { data } = await query.json()

    return data.movies
  }
}

export default new Api()
