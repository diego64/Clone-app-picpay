import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native'

import { AntDesign } from '@expo/vector-icons';

import { Wrapper, Container, Header, BalanceContainer, Balance } from './styles';

export default function Setting() {
    return(
        <Wrapper> 
        <Container>
          <Header>
            <AntDesign name="setting" size={30} color="#10C86E" />
  
            <BalanceContainer>
                <Balance>Ajustes</Balance>
            </BalanceContainer>
  
            <AntDesign name="setting" size={30} color="#10C86E" />
          </Header>

          <View style={styles.container}>
              <SectionList 
                sections={[
                   {title: 'Para o meu negócio', data: ['PicPay PRO', 'Para estabelecimentos', 'Venda por assiantura']},
                   {title: 'Configurações', data: ['Usar digital para pagar', 'Alterar senha', 'Privacidade', 'Notificações', 'Contas Vinculadas']},
                   {title: 'Geral', data: ['Precisa de ajuda ?', 'Sobre o PicPay', 'Desativar a minha conta']},
                   {title: 'Sair', data: ['Sair da conta @diegoferreira', 'Sair de todas as contas']},
                ]} 
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}

            ItemSeparatorComponent={() => <Separator />}
              />
          </View>
        </Container>
      </Wrapper>
);
}

const Separator = () => <View style={{ flex: 1, height: 1, backgroundColor: '#1C1C1C' }} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    item: {
        padding: 10,
        fontSize: 19,
        height: 55,
        color: '#FFF'
    },
    sectionHeader: {
        color: '#10C86E',
        paddingTop: 10,
        paddingLeft:10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold'
    },
})