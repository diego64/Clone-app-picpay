import React from 'react';
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons, Feather  } from '@expo/vector-icons';

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
    ValueNegative,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
    Wrapper,
} from './styles';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';
import img11 from '../../images/11.png';


import avatar from '../../images/avatar.png'

export default function Notification() {
    return(
        <Wrapper> 
        <Container>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@alexsilva</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Compra do curso de JavaScript na Rockseat</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <ValueNegative>R$ 150,00</ValueNegative>

                        <Divider />

                        <SimpleLineIcons name="people" color="#FFF" size={14} />
                        <Date>Há 15 minutos atás</Date>
                      
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

            <Card>
                <CardHeader>
                    <Avatar source={img6} />
                    <Description>
                        <Bold>Você</Bold> pagou um <Bold>boleto</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Pagamento da mensalidade de Julho da Faculdade</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <ValueNegative>R$ 373,68</ValueNegative>

                        <Divider />

                        <Feather name="lock" color="#FFF" size={14} />
                        <Date>Há 55 mitutos atás</Date>
                      
                    </Details>

                    <Actions>
                         <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="heart" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>
                    </Actions>
                    
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Avatar source={img1} />
                    <Description>
                        <Bold>Você</Bold> fez uma <Bold>recarga de celular</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Recarca no meu numero da claro</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <ValueNegative>R$ 15,00</ValueNegative>

                        <Divider />

                        <Feather name="lock" color="#FFF" size={14} />
                        <Date>Há 1 dia atás</Date>
                      
                    </Details>

                    <Actions>
                         <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>

                        <Option>
                        <AntDesign name="hearto" size={14} color="#FFF" />
                            <OptionLabel> 0 </OptionLabel>
                        </Option>
                    </Actions>
                    
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>@marciogomes</Bold> pagou a <Bold>você</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Valor referente ao almoço de quinta-feira</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 45,00</Value>

                        <Divider />

                        <SimpleLineIcons name="people" color="#FFF" size={14} />
                        <Date>Há 2 dia atás</Date>
                      
                    </Details>

                    <Actions>
                         <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="heart" size={14} color="#FFF" />
                            <OptionLabel> 2 </OptionLabel>
                        </Option>
                    </Actions>
                    
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Avatar source={img7} />
                    <Description>
                        <Bold>@jmm</Bold> pagou a <Bold>você</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Reembolso do Uber</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 50,00</Value>

                        <Divider />

                        <SimpleLineIcons name="people" color="#FFF" size={14} />
                        <Date>Há 2 dia atás</Date>
                      
                    </Details>

                    <Actions>
                         <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="heart" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Avatar source={img2} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>Uber</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Corrida do Trabalho para Casa</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <ValueNegative>R$ 50,00</ValueNegative>

                        <Divider />

                        <SimpleLineIcons name="people" color="#FFF" size={14} />
                        <Date>Há 3 dia atás</Date>
                      
                    </Details>

                    <Actions>
                         <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel> 3 </OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="heart" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>
                    </Actions>
                    
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Avatar source={img11} />
                    <Description>
                        <Bold>Você</Bold> pagou uma <Bold>conta</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Pagamento da conta da Luz</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <ValueNegative>R$ 110,00</ValueNegative>

                        <Divider />

                        <SimpleLineIcons name="people" color="#FFF" size={14} />
                        <Date>Há 3 dia atás</Date>
                      
                    </Details>

                    <Actions>
                         <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="heart" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>
                    </Actions>
                    
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Avatar source={img7} />
                    <Description>
                        <Bold>@jmm</Bold> pagou a <Bold>você</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Pagamento do salário do mes de Junho</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 3.578,62</Value>

                        <Divider />

                        <SimpleLineIcons name="people" color="#FFF" size={14} />
                        <Date>Há 5 dia atás</Date>
                      
                    </Details>

                    <Actions>
                         <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="heart" size={14} color="#FFF" />
                            <OptionLabel> 1 </OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
       </Wrapper>
    );
}