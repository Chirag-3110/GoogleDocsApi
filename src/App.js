import React,{useEffect,useState} from 'react'
import './App.css';
import Login from './Components/Login';
import Logout from './Components/Logout';
import { gapi} from 'gapi-script';
const Client_ID="376014326376-vn2k9jsmaomo2osbgl6vqllllsn3ll46.apps.googleusercontent.com";
const API_Key="AIzaSyAYL8O5uhjok8CeuqWxY5-idMLmNr-scNI";
const DISCOVERY_DOC = 'https://docs.googleapis.com/$discovery/rest?version=v1';
const SCOPES="https://www.googleapis.com/auth/documents.readonly";



function App() {

  const [docID,setdocId]=useState(null);
  const [docsUrl,setDocsUrl]=useState(null);
  useEffect(()=>{
    async function start(){
     try {
      await gapi.client.init({
        apikey:API_Key,
        clientId:Client_ID,
        // discoveryDocs: [DISCOVERY_DOC],
        scope:SCOPES
      });
     } catch (error) {
      console.log("error is"+error)
     }
    }
    gapi.load('client',start());
    // gisLoaded()
  },[]);

// create a document under this user
  function createFile(){
    var accessoken=gapi.auth.getToken().access_token;
    fetch(`https://docs.googleapis.com/v1/documents`,{
      method:"POST",
      headers:new Headers({'Authorization':"Bearer " + accessoken}),
    }).then((res)=>{
      return res.json();
    }).then(function(val){
// at this moment out document is created and we can use it newly or with existing files
      setdocId(val.documentId)
      console.log(val)
      console.log("id",docID)
    })
    console.log(accessoken)
  }

  async function getDocument(){
    // console.log(docID)
    var accessoken=gapi.auth.getToken().access_token;
    await fetch(`https://docs.googleapis.com/v1/documents/${docID}`,{
      method:"GET",
      headers:new Headers({'Authorization':"Bearer " + accessoken}),
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log("result",result)
      setDocsUrl(`https://docs.google.com/document/d/${docID}/edit`)
    })
    .catch((error)=>{
      console.log(error)
    });
  }

  return (
    <div className="App">
      <h1>Google Cloud</h1>
      <div>
        <Login/>
        <Logout/>
        <div style={{display:'flex',flexDirection:'column'}}>
          {docsUrl==null?null:<iframe src={docsUrl} style={{width:'100%',height:600}} ></iframe>}
          <button style={{width:200,height:50}} onClick={()=>createFile()}>create document</button>
          <button style={{width:200,height:50}} onClick={()=>getDocument()}>Get document</button>
        </div>
      </div>
    </div>
  );
}

export default App;
