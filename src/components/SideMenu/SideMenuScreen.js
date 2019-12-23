import React from 'react';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { List, ListItem, Text } from 'native-base';
import * as firebase from 'firebase'

export class SideMenuScreen extends React.Component {

    state = {
        email: "",
        displayName: ""
    };

    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    signOutUser = () => {
        firebase.auth().signOut().then(() => {
            //alert("You are now logged in");
            this.setState({ currentUser: null });
        });
    }

    render() {
        const { currentUser } = this.state
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
                            <Text>Hi {currentUser && currentUser.displayName}</Text>
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