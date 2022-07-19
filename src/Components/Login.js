import React from 'react';
import {GoogleLogin} from 'react-google-login'
const clientID="376014326376-vn2k9jsmaomo2osbgl6vqllllsn3ll46.apps.googleusercontent.com";

function Login(){
    const onSuccess=(res)=>{
        console.log("login success",res);
    }
    const onFailure=(res)=>{
        console.log("failure",res)
    }
    return(
        <div>
            <GoogleLogin
                clientID={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookeiePolicy={"single_host_origin"}
                inSignedIn={true}
            />
        </div>
    )
}   
export default Login;