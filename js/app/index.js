import React, { Component } from 'react';
import { Text, View } from 'react-native';

// import components
import Search from './components/search/index'


class App extends Component {
    render() {
        return(
            <View> 
                <Search /> 
            </View>
        )
    }
}

export default App