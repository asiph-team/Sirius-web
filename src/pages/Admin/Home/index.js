import React from 'react';
import Wrapper from './Home.styles';
import basicStyle from '@sirius/assets/styles/constants';
import IsoWidgetsWrapper from '@sirius/containers/Widgets/WidgetsWrapper';
import StickerWidget from '@sirius/containers/Widgets/Sticker/StickerWidget';
import { Row, Col } from 'antd';

const STICKER_WIDGET = [
    {
        number: '70/430',
        text: 'Acciones Abiertas',
        icon: 'ion-cube',
        fontColor: '#ffffff',
        bgColor: '#DAE21E',
    },
    {
        number: '0',
        text: 'Acciones expiradas',
        icon: 'ion-chatbubbles',
        fontColor: '#ffffff',
        bgColor: '#1EBDE2',
    },
    {
        number: '10/200',
        text: 'Programas de vigilancia',
        icon: 'ion-android-plane',
        fontColor: '#ffffff',
        bgColor: '#1EE24F',
    },
    {
        number: '70%',
        text: 'Asistencia a capacitaciones',
        icon: 'ion-android-plane',
        fontColor: '#ffffff',
        bgColor: '#E2961E',
    },
];

const Home = () => {
    const { rowStyle, colStyle } = basicStyle;
    return (
        <Wrapper>
            <Row style={rowStyle} gutter={0} justify="start">
                {
                    STICKER_WIDGET.map((widget, idx) => (
                        <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
                            <IsoWidgetsWrapper>
                                {/* Sticker Widget */}
                                <StickerWidget
                                number={widget.number}
                                text={widget.text}
                                icon={widget.icon}
                                fontColor={widget.fontColor}
                                bgColor={widget.bgColor}
                                />
                            </IsoWidgetsWrapper>
                        </Col>
                    ))
                }
            </Row>
        </Wrapper>
    );
};

export default Home;