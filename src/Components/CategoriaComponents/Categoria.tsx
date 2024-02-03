import React, { createRef, useState } from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PropsCategoria, categories } from '../../Constants/Data';

export default function Categoria() {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        horizontal={true}
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.categoria.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(item.categoria)}
              style={[
                styles.categoryButton,
                { backgroundColor: activeCategory===item.categoria ? '#C67C4E': '#ffffff', }
              ]}>
              <Text style={[styles.categoryButtonText, { color: activeCategory===item.categoria ? '#FFFFFF' : '#000000', fontWeight: 'bold' }]}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingLeft: 20,
    marginTop: 20,

  },
  categoryButton: {
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
  },
  categoryButtonText: {
    fontSize: 20,
  },
})