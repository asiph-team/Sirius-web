import React from 'react';
import { Link } from 'react-router-dom';
import Input from '@sirius/components/uielements/input';
import Button from '@sirius/components/uielements/button';
import IntlMessages from '@sirius/components/utility/intlMessages';
import ForgotPasswordStyleWrapper from './ForgotPassword.styles';

export default function() {
    return(
        <ForgotPasswordStyleWrapper className="isoForgotPassPage">
            <div className="siriusFormContentWrapper">
                <div className="siriusFormContent">
                    <div className="siriusLogoWrapper">
                        <IntlMessages id="page.forgetPassTitle" />
                    </div>

                    <div className="siriusFormHeadText">
                        <h3>
                        <IntlMessages id="page.forgetPassSubTitle" />
                        </h3>
                        <p>
                        <IntlMessages id="page.forgetPassDescription" />
                        </p>
                    </div>

                    <div className="siriusForgotPassForm">
                        <div className="siriusInputWrapper">
                        <Input size="large" placeholder="Correo electrónico" />
                        </div>

                        <div className="siriusInputWrapper">
                        <Button type="primary">
                            <IntlMessages id="page.sendRequest" />
                        </Button>
                        </div>
                    </div>
                    <div className="isoCenterComponent siriusHelperWrapper">
                        <Link to="/" className="siriusForgotPass">
                            <IntlMessages id="page.signInButton" />
                        </Link>
                    </div>
                </div>
            </div>
        </ForgotPasswordStyleWrapper>
    )
}