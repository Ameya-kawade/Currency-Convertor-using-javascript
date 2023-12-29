// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
const amount = document.getElementById("amount-input");
const from_img = document.getElementById("from-img");
const to_img = document.getElementById("to-img");
const msg = document.getElementById("msg");
const from_select = document.getElementById("from-select");
const to_select = document.getElementById("to-select");
const btn = document.getElementById("btn");


function renderOptions(){
    const fragment = document.createDocumentFragment();
    for(let country in countryList){
        let option = document.createElement("option");
        option.textContent = country;
        option.value = countryList[country];
        fragment.appendChild(option);
    }
    from_select.appendChild(fragment.cloneNode(true));
    to_select.appendChild(fragment);
    from_select.value = "US";
    to_select.value = "IN";
}
renderOptions();

from_select.addEventListener("change",()=>{
    let img_src = `https://flagsapi.com/${from_select.value}/flat/64.png`;
    from_img.src = img_src;
});

to_select.addEventListener("change",()=>{
    let img_src = `https://flagsapi.com/${to_select.value}/flat/64.png`;
    to_img.src = img_src;
});

const resetInput = ()=>{
    amount.value = 1;
    alert("Please enter valid input.");
};

const validateInput = ()=>{
    let amountVal = amount.value;
    if(isNaN(amountVal)){
        resetInput();
        return null;
    }
    else{
        if(amountVal < 1){
            resetInput();
            return null;
        }
        else{
            return amountVal;
        }
    }
};

async function convertCurrency(){
    try{
        let amountVal = validateInput();
        if (amountVal != null){
            let from_curr = from_select.options[from_select.selectedIndex].text.toLowerCase();
            let to_curr = to_select.options[to_select.selectedIndex].text.toLowerCase();
            const url = `${BASE_URL}${from_curr}/${to_curr}.json`
            let response = await fetch(url);
            let data = await response.json();
            let val = data[to_curr];
            let result = (amountVal * val).toFixed(3);
            msg.textContent = `${amountVal} ${from_curr.toUpperCase()} = ${result} ${to_curr.toUpperCase()}`;
        }
    }
    catch(err){
        console.error(err);
    }
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    convertCurrency();
});
window.addEventListener("load",convertCurrency);
