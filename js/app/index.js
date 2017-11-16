import React, { Component } from 'react';
import { Text, View } from 'react-native';

// import components
import Search from './components/search/index'
import SearchResult from './components/search-result/index'


class App extends Component {
    render() {
        return(
            <View> 
                <Search />
                <SearchResult />  
            </View>
        )
    }
}

export default App