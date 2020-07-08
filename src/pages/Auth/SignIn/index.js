import React from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@sirius/components/uielements/button';
import Checkbox from '@sirius/components/uielements/checkBox';
import Input from '@sirius/components/uielements/input';
import IntlMessages from '@sirius/components/utility/intlMessages';
import SignInStyleWrapper from './SignIn.styles';
import authAction from '@sirius/redux/auth/actions';
import appAction from '@sirius/redux/app/actions';

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn(){
    let history = useHistory();
    let location = useLocation();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.Auth.idToken);

    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
    React.useEffect(() => {
        if (isLoggedIn) {
            setRedirectToReferrer(true);
        }
    }, [isLoggedIn]);

    function handleLogin(e, token = false) {
        e.preventDefault();
        if (token) {
            dispatch(login(token));
        } else {
            dispatch(login());
        }
        dispatch(clearMenu());
        history.push('/superadmin');
    }

    let { from } = location.state || { from: { pathname: '/superadmin' } };
    if (redirectToReferrer) {
        return <Redirect to={from} />;
    }
    return(
        <SignInStyleWrapper className="siriusSignInPage">
            <div className="siriusLoginContentWrapper">
                <div className="siriusLoginContent">
                    <div className="siriusLogoWrapper">
                        <IntlMessages id="page.signInTitle" />
                    </div>
                    <div className="siriusSignInForm">
                        <form>
                            <div className="siriusInputWrapper">
                                <Input
                                size="large"
                                placeholder="Correo electrónico"
                                autoComplete="true"
                                />
                            </div>

                            <div className="siriusInputWrapper">
                                <Input
                                size="large"
                                type="password"
                                placeholder="Contraseña"
                                autoComplete="false"
                                />
                            </div>

                            <div className="siriusInputWrapper isoLeftRightComponent">
                                <Checkbox>
                                    <IntlMessages id="page.signInRememberMe" />
                                </Checkbox>
                                <Button type="primary" onClick={handleLogin}>
                                    <IntlMessages id="page.signInButton" />
                                </Button>
                            </div>
                        </form>
                        <div className="isoCenterComponent siriusHelperWrapper">
                            <Link to="/forgotpassword" className="siriusForgotPass">
                                <IntlMessages id="page.signInForgotPass" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </SignInStyleWrapper>
    );
}