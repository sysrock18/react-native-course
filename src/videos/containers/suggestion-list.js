import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'
import { connect } from 'react-redux'

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay recomendaciones" />
  
  itemSeparator = () => <Separator />

  renderItem = ({ item }) => <Suggestion {...item} onPress={() => this.viewMovie(item) } />

  keyExtractor = item => item.id.toString()

  viewMovie = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
  }

  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    list: state.suggestionList
  }
}

export default connect(mapStateToProps)(SuggestionList)
