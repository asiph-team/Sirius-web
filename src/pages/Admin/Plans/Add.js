import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import LayoutWrapper from '@sirius/components/utility/layoutWrapper';
import PageHeader from '@sirius/components/utility/pageHeader';
import IntlMessages from '@sirius/components/utility/intlMessages';
import Button from '@sirius/components/uielements/button';
import AddPlan from '@sirius/containers/Forms/AddPlan';
import { Box } from './Plans.styles';

export default function Add(){
    const match = useRouteMatch();
    const redirectPath = match.url.replace('create', '');
    return(
        <LayoutWrapper>
            <PageHeader>
                <IntlMessages id="page.plans.add" />
            </PageHeader>
            <Box>
                <AddPlan/>
                <div className="bottomActions">
                    <Link to={redirectPath}>
                        <Button className="mateAddInvoiceBtn">
                            Cancelar
                        </Button>
                    </Link>
                    <Link to={redirectPath}>
                        <Button type="primary" className="mateAddInvoiceBtn">
                            Agregar
                        </Button>
                    </Link>
                </div>
            </Box>
        </LayoutWrapper>
    )
}