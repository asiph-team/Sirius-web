import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import LayoutWrapper from '@sirius/components/utility/layoutWrapper';
import PageHeader from '@sirius/components/utility/pageHeader';
import IntlMessages from '@sirius/components/utility/intlMessages';
import Button from '@sirius/components/uielements/button';
import HelperText from '@sirius/components/utility/helper-text';
import SimpleView from '@sirius/containers/Tables/AntTables/TableViews/SimpleView';
import Switch from '@sirius/components/uielements/switch';
import CardWrapper, { Box } from './Workers.styles';

export default function Workers() {
    const match = useRouteMatch();
    const _data = [
        {
            id: 0,
            key: 0,
            name: 'Jorge',
            lastname: 'Almonacid aburto',
            phone: '+56912345678',
            job: 'Frontend Developer',
            email: 'jorge@test.com',
            actions: 'acciones',
            status: 'inactive',
        },
        {
            id: 1,
            key: 1,
            name: 'Sergio',
            lastname: 'Bustamante Müller',
            phone: '+56912345678',
            job: 'Backend Developer',
            email: 'sergio@test.com',
            actions: 'acciones',
            status: 'inactive',
        },
    ]

    const columns = [
        {
            title: 'Nombres',
            dataIndex: 'name',
            rowKey: 'name',
            width: '20%',
            render: (text, value) => (
                <Link to={'/admin'}>
                    <span id="company">{text}</span>
                </Link>
            )
        },
        {
            title: 'Apellidos',
            dataIndex: 'lastname',
            rowKey: 'lastname',
            width: '15%',
            render: text => <span>{text}</span>
        },
        {
            title: 'Teléfono',
            dataIndex: 'phone',
            rowKey: 'phone',
            width: '15%',
            render: text => <span>{text}</span>
        },
        {
            title: 'Email',
            dataIndex: 'email',
            rowKey: 'email',
            width: '15%',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Puesto',
            dataIndex: 'job',
            rowKey: 'job',
            width: '15%',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Acciones',
            dataIndex: 'actions',
            rowKey: 'actions',
            width: '10%',
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
        },
        {
            title: 'Status',
            dataIndex: 'status',
            rowKey: 'status',
            width: '10%',
            render: () => <Switch defaultChecked />,
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
                        _data.length === 0 ? (
                            <HelperText text="Aun no se han agregado empresas" />
                        ) : (
                            <SimpleView
                                columns={columns}
                                dataSource={_data}
                                className="isoSimpleTable"
                            />
                        )
                    }
                </CardWrapper>
            </Box>
        </LayoutWrapper>
    )
}