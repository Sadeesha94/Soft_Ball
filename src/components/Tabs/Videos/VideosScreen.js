import React from 'react';
import { View } from 'react-native';
import { HeaderBar } from '../../Header/HeaderBar'
import { Text, Container } from 'native-base';

export class VideosScreen extends React.Component {
  render() {
    return (
      <Container>
        <View>
          <HeaderBar navigation={this.props.navigation} headerTitle='Videos'/>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text> This is my Videos screen </Text>

        </View>
      </Container>
    );
  }
}