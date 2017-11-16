import React, { Component } from 'react';
import { View , TextInput, Text, Button ,FlatList} from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import style from './style';


export default class SearchResult extends Component {
    render(){
        if(this.props.search.search_done){
            return(
                <View> 
                    <FlatList 
                        data={this.props.search.search_result}
                        renderItem={({item}) => {
                            return(
                                <View style={style.text_container}>
                                    <Text style={style.text}>
                                        Repository name: 
                                    </Text>
                                    <Text style={style.text}>
                                        {item.repo.name}
                                    </Text>
                                    <Text style={style.text}> 
                                        Owner name: {item.owner.name}
                                    </Text>
                                </View> 
                            ) 
                        }} 
                    />
                </View> 
            )
        } else {
            return(
                <View>
                </View>
            )
        }

    }
}