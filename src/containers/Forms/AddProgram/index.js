import React from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@sirius/assets/styles/constants';
import Form from '@sirius/components/uielements/form';
import Input from '@sirius/components/uielements/input';
import Select, { SelectOption } from '@sirius/components/uielements/select';

const FormItem = Form.Item;
const Option = SelectOption;
const frequency = ['frecuencia 1', 'frecuencia 2', 'frecuencia 3', 'frecuencia 4'];

export default function() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Form>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Nombre examen"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Capacitaciones Asociadas"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar capacitaciones asociadas">
                        {
                            frequency.map((item, key) => (
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