import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import LayoutWrapper from '@sirius/components/utility/layoutWrapper';
import PageHeader from '@sirius/components/utility/pageHeader';
import IntlMessages from '@sirius/components/utility/intlMessages';
import Button from '@sirius/components/uielements/button';
import HelperText from '@sirius/components/utility/helper-text';
import SimpleView from '@sirius/containers/Tables/AntTables/TableViews/SimpleView';
import CardWrapper, { Box } from './Activities.styles';

export default function Activities() {
    const match = useRouteMatch();
    const _data = [
        {
            id: 0,
            key: 0,
            name: 'Actividad número uno',
            description: 'Descripción asociada a actividad uno',
            jobPosition: 'Puesto de trabajo'
        },
        {
            id: 1,
            key: 1,
            name: 'Actividad número uno',
            description: 'Descripción asociada a actividad uno',
            jobPosition: 'Puesto de trabajo'
        },
        {
            id: 1,
            key: 1,
            name: 'Actividad número uno',
            description: 'Descripción asociada a actividad uno',
            jobPosition: 'Puesto de trabajo'
        },
        {
            id: 1,
            key: 1,
            name: 'Actividad número uno',
            description: 'Descripción asociada a actividad uno',
            jobPosition: 'Puesto de trabajo'
        },
    ]

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            rowKey: 'name',
            width: '25%',
            render: (text) => <span>{text}</span>
        },
        {
            title: 'Descripción',
            dataIndex: 'description',
            rowKey: 'description',
            width: '45%',
            render: text => <span>{text}</span>
        },
        {
            title: 'Puesto de trabajo',
            dataIndex: 'jobPosition',
            rowKey: 'jobPosition',
            width: '20%',
            render: text => <span>{text}</span>
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
                <IntlMessages id="page.activities" />
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