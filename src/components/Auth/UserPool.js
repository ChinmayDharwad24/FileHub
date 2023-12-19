import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_O0fHUTu2Y",
    ClientId: "22p7lvr91225be2avbe2iqkkj1"
}

export default new CognitoUserPool(poolData);

