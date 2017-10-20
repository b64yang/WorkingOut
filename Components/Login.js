import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

import TypeFIeld from './Login/TypeField.js';
import outputUserList from '../Actions/index.js'

class Login extends Component {
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
            <View style={css.base}>
                <Text>{this.outputText()}</Text>
                <TypeFIeld users = {this.props.users}/>
                <TouchableOpacity 
                    style={css.button}
                >
                    <Text style={css.buttonText}>sign up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.UserList,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({outputUserList}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Login);

const css = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: '#00ff00'
    },
    button: {
        backgroundColor: "yellow"
    },
    buttonText: {
        textAlign: 'center'
    }
});