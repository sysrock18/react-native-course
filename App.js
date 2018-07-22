import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'

export default class App extends Component {
  state = {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    const categoryList = await API.getMovies();

    this.setState({
      suggestionList,
      categoryList
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        <CategoryList
          list={this.state.categoryList}
        />
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    )
  }
}
