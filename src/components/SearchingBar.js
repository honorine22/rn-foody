import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'

function SearchingBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name='search' />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                placeholder='Search' />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        gap: 15,
        flexDirection: 'row',
        borderRadius: 5,
        marginHorizontal: 15
    },
    iconStyle: {
        fontSize: 24,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        fontSize: 18,
        flex: 1
    }
})

export default SearchingBar