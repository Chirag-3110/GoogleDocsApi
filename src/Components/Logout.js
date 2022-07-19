import React from 'react';
import {GoogleLogout} from 'react-google-login'
const clientID="376014326376-vn2k9jsmaomo2osbgl6vqllllsn3ll46.apps.googleusercontent.com";

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