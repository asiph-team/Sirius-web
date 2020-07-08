import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import LayoutWrapper from '@sirius/components/utility/layoutWrapper';
import PageHeader from '@sirius/components/utility/pageHeader';
import IntlMessages from '@sirius/components/utility/intlMessages';
import Button from '@sirius/components/uielements/button';
import HelperText from '@sirius/components/utility/helper-text';
import SimpleView from '@sirius/containers/Tables/AntTables/TableViews/SimpleView';
import CardWrapper, { Box } from './Plans.styles';

export default function Plans() {
    const match = useRouteMatch();
    const _data = [
        {
            id: 0,
            key: 0,
            name: 'Nombre plan de acción',
            date_start: '10/09/20',
            owner: 'Nombre responsable',
            origin: 'Nombre origen',
            priority: 'Alta',
            date_end: '10/10/20',
        },
        {
            id: 1,
            key: 1,
            name: 'Nombre plan de acción',
            date_start: '10/09/20',
            owner: 'Nombre responsable',
            origin: 'Nombre origen',
            priority: 'Alta',
            date_end: '10/10/20',
        },
        {
            id: 2,
            key: 2,
            name: 'Nombre plan de acción',
            date_start: '10/09/20',
            owner: 'Nombre responsable',
            origin: 'Nombre origen',
            priority: 'Alta',
            date_end: '10/10/20',
        },
        {
            id: 3,
            key: 3,
            name: 'Nombre plan de acción',
            date_start: '10/09/20',
            owner: 'Nombre responsable',
            origin: 'Nombre origen',
            priority: 'Alta',
            date_end: '10/10/20',
        },
    ]

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            rowKey: 'name',
            width: '20%',
            render: (text) => <span>{text}</span>
        },
        {
            title: 'Fecha Ingreso',
            dataIndex: 'date_start',
            rowKey: 'date_start',
            width: '15%',
            render: text => <span>{text}</span>
        },
        {
            title: 'Responsable',
            dataIndex: 'owner',
            rowKey: 'owner',
            width: '15%',
            render: text => <span>{text}</span>
        },
        {
            title: 'Origen',
            dataIndex: 'origin',
            rowKey: 'origin',
            width: '15%',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Prioridad',
            dataIndex: 'priority',
            rowKey: 'priority',
            width: '15%',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Fecha Compromiso',
            dataIndex: 'date_end',
            rowKey: 'date_end',
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
        }
    ];
    return(
        <LayoutWrapper>
            <PageHeader>
                <IntlMessages id="page.plans" />
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