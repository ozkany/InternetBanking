import { Injectable } from '@angular/core';
import * as authCreateToken from './jsons/login/authCreateToken.json'
import * as authLoginUser from './jsons/login/authLoginUser.json'
import * as authCreateOtp from './jsons/login/authCreateOtp.json'
import * as getAccounts from './jsons/account/getAccounts.json'
import * as getAccountActivities from './jsons/account/getAccountActivities.json'
import * as getReceipt from './jsons/account/getReceipt.json'
import * as getAssets from './jsons/account/getAssets.json'
import * as getCards from './jsons/card/getCards.json'
import * as getIntermRecords from './jsons/card/getIntermRecords.json'
import * as getRecentTransfers from './jsons/account/getRecentTransfers.json'
import * as getPaymentActivities from './jsons/payment/getPaymentActivities.json'

import { GetAssetsRootResponse } from '../models/accounts/assets.model.js';
import { CardListRootResponse } from '../models/cards/card.model.js';
import { CardIntermListRootObject } from '../models/cards/card-interm-list.model.js';

@Injectable({ providedIn: 'root' })
export class MockDataService {

    jsonData: {path: string, method: string, data: any}[];

    constructor() {

        this.jsonData = [
          { path: "/auth/token", method: "POST", data: <any>authCreateToken.default },
          { path: "/auth/token", method: "PATCH", data: <any>authLoginUser.default },
          { path: "/auth/otp", method: "POST", data: <any>authCreateOtp.default },
          { path: "/auth/token?validationType=sms", method: "PATCH", data: null },
          { path: "/accounts", method: "GET", data: <Account[]>getAccounts.default },
          { path: "/activities?limit=20", method: "GET", data: <Account[]>getAccountActivities.default },
          { path: "/receipt", method: "GET", data: <any>getReceipt.default },
          { path: "/assets?currencyCode=TRY", method: "GET", data: <GetAssetsRootResponse>getAssets.default },
          { path: "/cards", method: "GET", data: <CardListRootResponse>getCards.default },
          { path: "/transfer/activities", method: "GET", data: <any>getRecentTransfers.default },
          { path: "/payments/activities?typeGroup=invoice&limit=50", method: "GET", data: <any>getPaymentActivities.default },
          { path: "GetIntermRecords", method: "GET", data: <CardIntermListRootObject>getIntermRecords.default },
        ];

    }

    

}