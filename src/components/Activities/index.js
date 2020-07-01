import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png'

export default function Activities() {
    return(
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@alexsilva</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Diego Ferreira L.G.Oliveira</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 150,00</Value>

                        <Divider />

                        <Feather name="lock" color="#FFF" size={14} />
                        <Date>Há 2 dias</Date>
                      
                    </Details>

                    <Actions>
                         <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel> 2 </OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="heart" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}