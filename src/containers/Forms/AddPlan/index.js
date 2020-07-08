import React from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@sirius/assets/styles/constants';
import Form from '@sirius/components/uielements/form';
import Input from '@sirius/components/uielements/input';
import Select, { SelectOption } from '@sirius/components/uielements/select';
import DatePicker from '@sirius/components/uielements/datePicker';

const FormItem = Form.Item;
const Option = SelectOption;
const origin = ['CHPS', 'OAL', 'SS', 'IDT', 'Auditoría interna', 'Auditoría externa', 'Incidente', 'Observación actividad'];
const priority = ['Alta', 'Media', 'Baja'];

export default function() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Form>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Nombre acción"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                   <FormItem label={"Responsable"}>
                        <Input />
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Fecha ingreso"}>
                        <DatePicker style={{width: '100%'}} placeholder={"Seleccionar fecha"}/>
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Origen"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar origen">
                        {
                            origin.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Fecha compromiso"}>
                        <DatePicker style={{width: '100%'}} placeholder={"Seleccionar fecha"}/>
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Prioridad"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar prioridad">
                        {
                            priority.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
            </Row>
        </Form>
    )
}