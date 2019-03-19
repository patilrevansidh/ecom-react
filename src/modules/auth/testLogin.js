// import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
// import FacebookLogin from 'react-facebook-login';
// import { HTTPService } from '../../common/services/HttpService';

class TestLogin extends EcomPureComponent {

    // handleFacebookReponse = (fbres) => {
    //     const formDatsa = new FormData(fbres)
    //     HTTPService.post('/customers/facebook', { access_token: fbres.accessToken })
    //         .then(rep => console.log('resp', rep))
    //         .catch(err => console.log('err', err))
    // }

    render() {
        return (
            null
            // <FacebookLogin
            //     appId="352854622106208"
            //     autoLoad={true}
            //     callback={this.handleFacebookReponse}
            // />
        );
    }
}

export default TestLogin;