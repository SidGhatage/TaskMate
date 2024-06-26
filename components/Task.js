import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#F8F4E1'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#A0937D',
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: '#6F4E37',
        fontWeight: 'bold',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#A0937D',
        borderWidth: 2,
        borderRadius: 5,
    },

});

export default Task;