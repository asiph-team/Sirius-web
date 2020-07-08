import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import LayoutWrapper from '@sirius/components/utility/layoutWrapper';
import PageHeader from '@sirius/components/utility/pageHeader';
import IntlMessages from '@sirius/components/utility/intlMessages';
import Button from '@sirius/components/uielements/button';
import HelperText from '@sirius/components/utility/helper-text';
import SimpleView from '@sirius/containers/Tables/AntTables/TableViews/SimpleView';
import CardWrapper, { Box } from './Trainings.styles';

export default function Trainings() {
    const match = useRouteMatch();
    const _data = [
        {
            id: 0,
            key: 0,
            name: 'Manejo de residuos',
            description: 'Capacitación orientada al buen manejo de residuos tóxicos por parte de los trabajadores',
            workersInvited: '30',
            date: '10/09/20',
            frequency: '1 vez al mes',
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
            title: 'Descripción',
            dataIndex: 'description',
            rowKey: 'description',
            width: '15%',
            render: text => <span>{text}</span>
        },
        {
            title: 'Trabajadores invitados',
            dataIndex: 'workersInvited',
            rowKey: 'workersInvited',
            width: '15%',
            render: text => <span>{text}</span>
        },
        {
            title: 'Fecha',
            dataIndex: 'date',
            rowKey: 'date',
            width: '15%',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Frecuencia',
            dataIndex: 'frequency',
            rowKey: 'frequency',
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
                <IntlMessages id="page.trainings" />
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