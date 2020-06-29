import React from 'react';
import { Link } from 'react-router-dom';
import LayoutWrapper from '@sirius/components/utility/layoutWrapper';
import PageHeader from '@sirius/components/utility/pageHeader';
import IntlMessages from '@sirius/components/utility/intlMessages';
import Button from '@sirius/components/uielements/button';
import TableWrapper from '@sirius/containers/Tables/AntTables/AntTables.styles';
import CardWrapper, { Box } from './Enterprise.styles';
import Switch from '@sirius/components/uielements/switch';

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        rowKey: 'name',
        width: '20%',
        render: text => <span>{text}</span>,
      },
      {
        title: 'Rubro',
        dataIndex: 'item',
        rowKey: 'item',
        width: '20%',
        render: text => <span>{text}</span>,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        rowKey: 'email',
        width: '20%',
        render: text => <span>{text}</span>,
      },
      {
        title: 'Contacto',
        dataIndex: 'contact',
        rowKey: 'contact',
        width: '20%',
        render: text => <span>{text}</span>,
      },
      {
        title: 'Acciones',
        dataIndex: 'actions',
        rowKey: 'actions',
        width: '10%',
        render: () => (
            <>
                <Button key={100}>
                    <i className="ion-edit" />
                </Button>
                <Button className="invoiceDltBtn" key={100}>
                    <i className="ion-android-delete" />
                </Button>
            </>
        ),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        rowKey: 'status',
        width: '10%',
        render: () => <Switch key={1}/>,
      }
]

const data = [
    {
        name: 'prueba',
        item: 'prueba',
        email: 'prueba@test.com',
        contact: '12345678',
    },
    {
        name: 'prueba',
        item: 'prueba',
        email: 'prueba@test.com',
        contact: '12345678',
    },
    {
        name: 'prueba',
        item: 'prueba',
        email: 'prueba@test.com',
        contact: '12345678',
    }
]

const Enterprise = () => {
    return (
        <LayoutWrapper>
            <PageHeader>
                <IntlMessages id="page.enterprise" />
            </PageHeader>
            <Box>
                <div className="isoInvoiceTableBtn">
                    <Link to={'/'}>
                        <Button type="primary" className="mateAddInvoiceBtn">
                            + Agregar
                        </Button>
                    </Link>
                </div>
                <CardWrapper>
                    <TableWrapper
                    rowSelection={[]}
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                    className="invoiceListTable"
                    />
                </CardWrapper>
            </Box>
        </LayoutWrapper>
    );
}

export default Enterprise;