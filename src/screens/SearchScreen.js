import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchingBar from '../components/SearchingBar'
import { searchPlaces } from '../api/api';

function SearchScreen() {
    const [term, setTerm] = useState('');
    const [places, setPlaces] = useState([]);

    const searchApi = async () => {
        const data = await searchPlaces(term);
        setPlaces(data);
    }
    useEffect(() => {
        searchApi();
    }, []);

    return (
        <View>
            <SearchingBar
                onTermSubmit={searchApi}
                term={term}
                onTermChange={setTerm}
            />
            <Text>We have found {places.length}</Text>
        </View>
    )
}


export default SearchScreen