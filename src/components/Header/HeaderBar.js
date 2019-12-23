import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header, Left, Body, Right, Button, Title } from 'native-base';

export class HeaderBar extends React.Component {
    render() {
        let { headerTitle } = this.props
        return (
            <Header>
                <Left>
                    <Button transparent
                        onPress={() => {
                            this.props.navigation.openDrawer();
                        }}>
                        <Icon name='menu' size={23} color='black' />
                    </Button>
                </Left>
                <Body>
                    <Title>{headerTitle}</Title>
                </Body>
                <Right>

                </Right>
            </Header>
        );
    }
}