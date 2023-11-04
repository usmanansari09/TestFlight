import { Constants } from "../Environment";

const axios = require('axios').default
const postRequest = async (api, paylaod, myCallback) => {
  const constApiLink = `${Constants.authUrl}/${api}`;
  let options = {
    "Content-Type": "application/json",
  };
  let option = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer 1195|fmityMG4am7WuDD5IIsz1FBXW0vOLu2Ispt2wAoU",
  };
  axios({
    method: 'post',
    url: constApiLink,
    data: paylaod,
    headers: api == 'flights_search' ? option : options,
  }).then((response) => {
    myCallback({ sucess: response.data });
  })
    .catch((error) => {
      const res = error.response.data;
      let message = "";
      if (res.non_field_errors) {
        message = res.non_field_errors[0];
      } else {
        for (const [key, value] of Object.entries(res)) {
          message = message + `${key} : ${JSON.stringify(value)} `;
        }
      }
      myCallback({ error: message });
    });
}

export const LoginApi = (payload, myCallback) => {
  postRequest("login", payload, myCallback);
};
export const Register = (payload, myCallback) => {
  postRequest("register", payload, myCallback);
};
export const OTPVerify = (payload, myCallback) => {
  postRequest("loginOtp", payload, myCallback);
};
export const FlightSearch = (payload, myCallback) => {
  postRequest("flights_search", payload, myCallback);
};