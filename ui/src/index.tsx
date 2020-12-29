import ReactDOM from "react-dom";
import React from "react";
import TRPageManager from "tm-react/src/artifacts/manager/tr-page-manager";
import PfCfConfig from "./config/pfcf-config";
import PfCfUrlMapping from "./config/pfcf-url-mapping";
import {AppMessage} from "react-material-app/src/system/app-message";

const appConfig = new PfCfConfig();
const urlMapping = new PfCfUrlMapping();
AppMessage.appName = "PF CF";
AppMessage.loginLabel = "PF CF";
ReactDOM.render(<TRPageManager appConfig={appConfig} urlMapping={urlMapping}/>, document.getElementById('root'));
