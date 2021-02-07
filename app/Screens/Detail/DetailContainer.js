import React, { Component } from 'react'
import { Text, View } from 'react-native'



export class DetailContainer extends Component {
    
   

    constructor(Props){
        super(Props)
        this.state={
            item:null
        }
    }

    componentDidMount(){
        this.setState({item: this.props.route.params})
    }


    render() {
        return (
            <View>
                <Text> {this.state?.item?.name} </Text>
                <Text> {this.state?.item?.salary} </Text>
                <Text> {this.state?.item?.age} </Text>
            </View>
        )
    }
}

export default DetailContainer
