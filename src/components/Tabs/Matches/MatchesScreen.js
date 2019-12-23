import React from 'react';
import { View } from 'react-native';
import { HeaderBar } from '../../Header/HeaderBar'
import { Text, Container } from 'native-base';

export class MatchesScreen extends React.Component {
  render() {
    return (
      <Container>
        <View>
          <HeaderBar navigation={this.props.navigation} headerTitle='Matches' />
      </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> This is my Matches screen </Text>

      </View>
      </Container>
    );
  }
}