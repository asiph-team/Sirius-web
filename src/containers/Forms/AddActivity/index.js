import React from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@sirius/assets/styles/constants';
import Form from '@sirius/components/uielements/form';
import Input, {Textarea} from '@sirius/components/uielements/input';
import Select, { SelectOption } from '@sirius/components/uielements/select';

const FormItem = Form.Item;
const Option = SelectOption;
const jobPosition = ['Puesto de trabajo 1', 'Puesto de trabajo 2', 'Puesto de trabajo 3', 'Puesto de trabajo 4'];

export default function() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
        <Form>
            <Row style={rowStyle} gutter={gutter} jusity="start">
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Nombre Actividad"}>
                        <Input />
                    </FormItem>
                </Col>
                <Col md={12} sm={12} xs={24} style={colStyle}>
                    <FormItem label={"Puesto de trabajo"}>
                    <Select style={{ width: '100%' }} placeholder="Seleccionar puesto de trabajo">
                        {
                            jobPosition.map((item, key) => (
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
                            placeholder={"Descrición de la actividad"}
                            type="textarea"
                            rows={5}
                        />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    )
}