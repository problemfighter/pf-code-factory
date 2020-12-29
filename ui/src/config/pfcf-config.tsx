import React from 'react';
import AppConfig from "react-material-app/src/config/app-config";


export default class PfCfConfig extends AppConfig {

    public getBaseURL(): string {
        return "http://localhost/";
    }

}