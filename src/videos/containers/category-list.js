import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import Layout from '../components/category-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/horizontal-separator'
import Category from '../components/category'

class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay categorias" />
  
  itemSeparator = () => <Separator />

  renderItem = ({ item }) => <Category {...item} />

  keyExtractor = item => item.id.toString()

  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
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

export default CategoryList
