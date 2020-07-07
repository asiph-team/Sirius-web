import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import LayoutWrapper from '@sirius/components/utility/layoutWrapper';
import PageHeader from '@sirius/components/utility/pageHeader';
import IntlMessages from '@sirius/components/utility/intlMessages';
import Button from '@sirius/components/uielements/button';
import HelperText from '@sirius/components/utility/helper-text';
import SimpleView from '@sirius/containers/Tables/AntTables/TableViews/SimpleView';
import CardWrapper, { Box } from './Programs.styles';

export default function Programs() {
    const match = useRouteMatch();
    const _data_1 = [
        {
            id: 0,
            key: 0,
            name: 'Nombre de programa',
            program: 'Programa',
            status: 'Pendiente'
        },
        {
            id: 1,
            key: 1,
            name: 'Nombre de programa',
            program: 'Programa',
            status: 'Pendiente'
        },
        {
            id: 2,
            key: 2,
            name: 'Nombre de programa',
            program: 'Programa',
            status: 'Pendiente'
        },
    ];

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            rowKey: 'name',
            width: '25%',
            render: (text) => <span>{text}</span>
        },
        {
            title: 'Programa',
            dataIndex: 'program',
            rowKey: 'program',
            width: '25%',
            render: text => <span>{text}</span>
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            rowKey: 'status',
            width: '25%',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Acciones',
            dataIndex: 'actions',
            rowKey: 'actions',
            width: '25%',
            render: () => (
                <div className="isoInvoiceBtnView">
                    <Button color="primary" className="invoiceViewBtn">
                        <i className="ion-edit" />
                    </Button>
                    <Button className="invoiceDltBtn">
                        <i className="ion-android-delete" />
                    </Button>
                </div>
            ),
        }
    ];
    return(
        <LayoutWrapper>
            <PageHeader>
                <IntlMessages id="page.workers" />
            </PageHeader>
            <Box>
                <div className="isoInvoiceTableBtn">
                    <Link to={`${match.path}/create`}>
                        <Button type="primary" className="mateAddInvoiceBtn">
                            + Agregar
                        </Button>
                    </Link>
                </div>
                <CardWrapper>
                    {
                        _data_1.length === 0 ? (
                            <HelperText text="Aun no se han agregado programas de vigilancia para trabajadores" />
                        ) : (
                            <SimpleView
                                columns={columns}
                                dataSource={_data_1}
                                className="isoSimpleTable"
                            />
                        )
                    }
                </CardWrapper>
            </Box>
            <PageHeader>
                <IntlMessages id="page.jobPositions" />
            </PageHeader>
            <Box>
                <CardWrapper>
                    {
                        _data_1.length === 0 ? (
                            <HelperText text="Aun no se han agregado programas de vigilancia para trabajadores" />
                        ) : (
                            <SimpleView
                                columns={columns}
                                dataSource={_data_1}
                                className="isoSimpleTable"
                            />
                        )
                    }
                </CardWrapper>
            </Box>
        </LayoutWrapper>
    )
}