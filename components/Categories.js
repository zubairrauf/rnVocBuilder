import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import {catList} from './catData'

const Categories = () => {
    const catDisplay = catList.map(cat => {
        return (
            <TouchableOpacity key={cat.id} style={styles.catGridItem}>
                <Text style={styles.catName}>{cat.name}</Text>
                <Image source={require('../assets/catIcons/food.png')}/>
            </TouchableOpacity>
    )})
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Select your category</Text>
            <View style={styles.catGrid}>
                {catDisplay}
            </View>
        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
    heading: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 5
    },
    catGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    catGridItem: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%'
    },
    catName: {
        textAlign: 'center'
    }
  });