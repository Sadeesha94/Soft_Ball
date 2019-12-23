import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderBar } from '../../Header/HeaderBar'
import { Text, Container, Button } from 'native-base';

export class HomeDetailsScreen extends React.Component {
    render() {
        return (
            <Container>
                <View>
                    <HeaderBar navigation={this.props.navigation} headerTitle='Home Details'/>
                </View>
                <View>
                    <Button style={{ justifyContent: "center", alignItems: "center" }} 
                    onPress={() => this.props.navigation.goBack()}>
                        <Text>Back to Home</Text>
                    </Button>
                </View>
                <View style={styles.MainContainer}>
                    <Text>This is Home Details Screen</Text>
                </View>
            </Container>
        );
    }
}
const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
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