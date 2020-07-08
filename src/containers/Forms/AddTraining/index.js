import React from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@sirius/assets/styles/constants';
import Form from '@sirius/components/uielements/form';
import Input, {Textarea} from '@sirius/components/uielements/input';
import Select, { SelectOption } from '@sirius/components/uielements/select';
import DatePicker from '@sirius/components/uielements/datePicker';

const FormItem = Form.Item;
const Option = SelectOption;
const workers = ['trabajadores 1', 'trabajadores 2', 'trabajadores 3', 'trabajadores 4'];
const frequency = ['1 vez mes', '1 vez por semana', '1 vez al día'];

export default function() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Form>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Nombre del curso/capacitación"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Fecha del curso"}>
                        <DatePicker style={{width: '100%'}} placeholder={"Seleccionar fecha"}/>
                    </FormItem>
                </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Trabajadores"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar Trabajadores">
                        {
                            workers.map((item, key) => (
                                <Option key={key}>{item}</Option>
                            ))
                        }
                    </Select>
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Frecuencia"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar frecuencia">
                        {
                            frequency.map((item, key) => (
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