import React from 'react';
import { 
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Imagem,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody2
} from './styles';

import img6 from '../../images/06.png';
import creditCard from '../../images/11.png';
import img12 from '../../images/12.png';

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header colors={['#006857', '#3A7452']}>
          <HeaderContainer>
            <Imagem source={img6} />
          </HeaderContainer>
        </Header>

        <UseBalance>
        <UseBalanceTitle>
          Pagar Conta
        </UseBalanceTitle>
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          COMO DESEJA PAGAR SUA CONTA?
        </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>
                Use leitor de código de barras
              </CardTitle>
              <CardInfo>
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <CardBody2>
            <CardDetails>
              <CardTitle>
                Digite o cógigo de barras manualmente
              </CardTitle>
              <CardInfo>
              </CardInfo>
            </CardDetails>

            <Img source={img12} resizeMode="contain" />
          </CardBody2>
          </Card>
        
        </PaymentMethods>
      </Container>
    </Wrapper>
  );
}