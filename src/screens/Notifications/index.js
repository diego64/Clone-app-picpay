import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { Wrapper, Container, Header, BalanceContainer, Balance } from './styles';

import Notification from '../../components/Notification';

export default function Notifications(){
    return (
        <Wrapper> 
        <Container>
          <Header>
          <Ionicons name="ios-menu" size={30} color="#10C86E" />
  
            <BalanceContainer>
                <Balance>Notificações</Balance>
            </BalanceContainer>
  
            <Ionicons name="ios-notifications-outline" size={30} color="#10C86E" />
          </Header>

        <Notification />
          
        </Container>
        </Wrapper>
    );
} 