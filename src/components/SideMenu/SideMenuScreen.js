import React from 'react';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { List, ListItem, Text } from 'native-base';
import * as firebase from 'firebase'

export class SideMenuScreen extends React.Component {

    state = {
        email: ""
    };

    // componentDidMount() {
    //     const { email } = firebase.auth().currentUser;

    //     this.setState({ email });
    // }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 150, alignItems: "center", justifyContent: "center" }}>
                    <Image source={require('../../../assets/profile-icon.png')}
                        style={{ height: 120, width: 120, borderRadius: 60 }}
                    />
                </View>
                <ScrollView>
                    <List>
                        <ListItem>
                            <Text>Hi {this.state.email}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Settings</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Players</Text>
                        </ListItem>
                    </List>
                </ScrollView>
                <List>
                    <ListItem>
                        <Text onPress={this.signOutUser}>Log Out</Text>
                    </ListItem>
                    <ListItem>
                        <Text onPress={() => { this.props.navigation.navigate('Auth') }}>Login</Text>
                    </ListItem>
                </List>
            </SafeAreaView>
        )
    }
}