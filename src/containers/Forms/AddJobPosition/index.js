import React from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@sirius/assets/styles/constants';
import Form from '@sirius/components/uielements/form';
import Input, {Textarea} from '@sirius/components/uielements/input';
import Select, { SelectOption } from '@sirius/components/uielements/select';

const FormItem = Form.Item;
const Option = SelectOption;
const activities = ['actividad 1', 'actividad 2', 'actividad 3', 'actividad 4'];
const trainings = ['capacitación 1', 'capacitación 2', 'capacitación 3', 'capacitación 4'];
const programs = ['Programa 1', 'Programa 2', 'Programa 3', 'Programa 4'];

export default function() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Form>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Nombre puesto de trabajo"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Actividades asociadas"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar actividades asociadas">
                        {
                            activities.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Capacitaciones Asociadas"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar capacitaciones asociadas">
                        {
                            trainings.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Programas de vigilancia"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar programas de vigilancia">
                        {
                            programs.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={24} sm={24} xs={24} style={colStyle}>
                    <FormItem label={"Descripción"}>
                        <Textarea
                            placeholder={"Descrición del puesto de trabajo"}
                            type="textarea"
                            rows={5}
                        />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    )
}