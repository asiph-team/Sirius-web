import React from 'react';
import Wrapper from './Home.styles';
import basicStyle from '@sirius/assets/styles/constants';
import IsoWidgetsWrapper from '@sirius/containers/Widgets/WidgetsWrapper';
import StickerWidget from '@sirius/containers/Widgets/Sticker/StickerWidget';
import { Row, Col } from 'antd';

const STICKER_WIDGET = [
    {
        number: '300',
        text: 'Empresas',
        icon: 'ion-cube',
        fontColor: '#ffffff',
        bgColor: '#DAE21E',
    },
    {
        number: '700',
        text: 'Trabajadores',
        icon: 'ion-android-people',
        fontColor: '#ffffff',
        bgColor: '#1E7AE2',
    },
    {
        number: '600',
        text: 'Actividades',
        icon: 'ion-chatbubbles',
        fontColor: '#ffffff',
        bgColor: '#7ED320',
    },
    {
        number: '200',
        text: 'Planes de acción',
        icon: 'ion-android-plane',
        fontColor: '#ffffff',
        bgColor: '#E2541E',
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