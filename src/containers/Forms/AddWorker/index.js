import React from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@sirius/assets/styles/constants';
import Form from '@sirius/components/uielements/form';
import Input from '@sirius/components/uielements/input';
import Select, { SelectOption } from '@sirius/components/uielements/select';
import Switch from '@sirius/components/uielements/switch';
import DatePicker from '@sirius/components/uielements/datePicker';

const FormItem = Form.Item;
const Option = SelectOption;
const enterprises = ['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4', 'Empresa 5'];
const jobs = ['puesto 1', 'puesto 2', 'puesto 3', 'puesto 4', 'puesto 5'];

export default function() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Form>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Nombres"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Apellidos"}>
                        <Input />
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"RUT"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Email"}>
                        <Input type="email"/>
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Empresa Asociada"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar empresa asociada">
                        {
                            enterprises.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Puesto de trabajo"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar puesto de trabajo">
                        {
                            jobs.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Fecha ingreso laboral:"}>
                        <DatePicker placeholder={"Seleccionar fecha"} style={{ width: '100%' }}/>
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Estado"}>
                        <Switch />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    )
}