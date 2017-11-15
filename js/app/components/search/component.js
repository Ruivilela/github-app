import React, { Component } from 'react';
import { View , TextInput} from 'react-native';
import style from './style';


export default class Search extends Component {
    render(){
        return(
            <View>
                <TextInput 
                        style={style.searchbar} 
                        placeholder='Type Here...'
                        onChangeText={(text) => this.onTyping(text) }
                />
            </View>
        )
    }

    onTyping(search_term){
        this.props.actions.update_search_term(
            {
                search_term: search_term
            }
        )
    }
}