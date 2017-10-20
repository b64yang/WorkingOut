import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

import outputUserList from '../../Actions/index.js';

export default class TypeField extends Component {

    outputText() {
        return this.props.users.map((user) => {
            return (
                <Text key={user.id}>
                    {user.username} {user.password}
                </Text>
            );
        });
    }

    render() {
        return (
            <View style={css.container}>
                {this.outputText()}
                <Text> ------------------- </Text>
                <TextInput style={css.input}
                    placeholder="Username"
                    placeholderTextColor="red"
                />
                <TextInput style={css.input}
                    placeholder="Password"
                    placeholderTextColor="red"
                />
                <TouchableOpacity 
                    style={css.button}
                >
                    <Text style={css.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const css = StyleSheet.create({
    container: {
        marginTop: 250,
        padding: 30
    },
    input: {
        height: 30,
        backgroundColor: 'blue',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: "yellow"
    },
    buttonText: {
        textAlign: 'center'
    }
});