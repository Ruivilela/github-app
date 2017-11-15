import React, { Component } from 'react';
import { View , TextInput, Button} from 'react-native';
import style from './style';


export default class Search extends Component {
    render(){
        return(
            <View style={style.container}>
                <TextInput 
                    style={style.searchbar} 
                    placeholder='Type Here...'
                    onChangeText={(text) => this.onTyping(text) }
                />
                <View style={style.button}> 
                    <Button
                        title='Search repo'
                        onPress={
                            () => {
                                this.search_github(
                                    this.props.search.search_term
                                ) 
                            }
                        }
                    />
                </View>
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

    search_github(search_term){
        if(search_term){
            this.props.actions.make_search_async(
                search_term
            )
        }
    }
}