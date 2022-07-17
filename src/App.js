import React,{useEffect} from 'react'
import './App.css';
import Login from './Components/Login';
import Logout from './Components/Logout';
import { gapi} from 'gapi-script';
const Client_ID="376014326376-bo46i0lcg7hunn9bqsga481oblmnmbmm.apps.googleusercontent.com";
const API_Key="AIzaSyAzd2O1iX-Fj7w0UJheBaK8eVp8gDjCSLg";
const DISCOVERY_DOC = 'https://docs.googleapis.com/$discovery/rest?version=v1';
const SCOPES="https://www.googleapis.com/auth/documents.readonly";

let tokenClient;
let gapiInited = false;
let gisInited = false;

function App() {

  useEffect(()=>{

    async function start(){
      await gapi.client.init({
        apikey:API_Key,
        clientId:Client_ID,
        discoveryDocs: [DISCOVERY_DOC],
        scope:SCOPES
      });
      gapiInited = true;
    }
    gapi.load('client',start);
    // gisLoaded()
  },[]);

// create a document under this user
  function createFile(){
    var accessoken=gapi.auth.getToken().access_token;
    fetch("https://docs.googleapis.com/v1/documents",{
      method:"POST",
      headers:new Headers({'Authorization':"Bearer " + accessoken}),
    }).then((res)=>{
      return res.json();
    }).then(function(val){
// at this moment out document is created and we can use it newly or with existing files
      // window.open("https://docs.googleapis.com/v1/documents/"+val.documentId);
      console.log(val)
    })
    console.log(accessoken)
  }

  async function printDocTitle() {
    try {
      const response = await gapi.client.docs.documents.get({
        documentId: '195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE',
      });
      const doc = response.result;
      const output = `Document ${doc.title} successfully found.\n`;
      // document.getElementById('content').innerText = output;
      console.log(doc)
      // window.open("https://docs.googleapis.com/v1/documents/"+doc.documentId);
    } catch (error) {
      // document.getElementById('content').innerText = err.message;
      console.log(error);
      return;
    }
  }


  return (
    <div className="App">
      <h1>Google Cloud</h1>
      <div>
        <Login/>
        <Logout/>
        <button onClick={()=>createFile()}>create document</button>
      </div>
    </div>
  );
}

export default App;
