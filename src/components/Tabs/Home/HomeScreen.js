import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderBar } from '../../Header/HeaderBar'
import { Text, Container, Button, Card, CardItem, Body, Content } from 'native-base';

export class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <View>
                    <HeaderBar navigation={this.props.navigation} headerTitle='Home'/>
                </View>
                
                <View style={styles.MainContainer}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('HomeDetails') }}>
                        <Card style={styles.cardViewStyle}>
                            <CardItem header bordered>
                                <Text>SL vs IND</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        NativeBase is a free and open source framework that enable
                                        developers to build
                                        high-quality mobile apps using React Native iOS and Android
                                        apps
                                        with a fusion of ES6.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text>Sadeesha</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        backgroundColor: '#FFFFFF',
        alignItems: 'center',

    },

    cardViewStyle: {
        
        width: 250,
        height: 150,

    },

    cardView_InsideText: {

        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginTop: 50

    }

});