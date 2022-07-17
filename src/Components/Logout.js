import React from 'react';
import {GoogleLogout} from 'react-google-login'
const clientID="376014326376-bo46i0lcg7hunn9bqsga481oblmnmbmm.apps.googleusercontent.com";

function Logout(){
    const onSuccess=()=>{
        console.log("Logout");
    }
    return(
        <div>
            <GoogleLogout
                clientID={clientID}
                buttonText={"LogOut"}
                onLogoutSuccess={onSuccess}
            />  
        </div>
    )
}
export default Logout;  