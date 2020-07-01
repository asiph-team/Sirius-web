import React from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@sirius/assets/styles/constants';
import Form from '@sirius/components/uielements/form';
import Input from '@sirius/components/uielements/input';
import Select, { SelectOption } from '@sirius/components/uielements/select';

const FormItem = Form.Item;
const Option = SelectOption;
const children = ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100', 'sobre 100'];

export default function() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Form>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Nombre de empresa/Razón Social"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Email"}>
                        <Input type="email" />
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Giro"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Tamaño"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar tamaño">
                        {
                            children.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Dirección"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Teléfono"}>
                        <Input />
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Representante Legal"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Contacto Representante Legal"}>
                        <Input />
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Representante Técnico"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Contacto Representante Técnico"}>
                        <Input />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    )
}