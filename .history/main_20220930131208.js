const axios = require("axios"); // to fetch the url
const cheerio = require("cheerio"); // to extract
require ("dotenv").config()

const accountsid = process.env.ACCOUNTSID
const auth = process.env.AUTH

const url = "https://www.amazon.com/Seagate-Touch-External-Hard-Drive/dp/B08GRT1JMR/?_encoding=UTF8&pd_rd_w=0fgCJ&content-id=amzn1.sym.8cf3b8ef-6a74-45dc-9f0d-6409eb523603&pf_rd_p=8cf3b8ef-6a74-45dc-9f0d-6409eb523603&pf_rd_r=6FZN6VDEJ19J2DSS833V&pd_rd_wg=hejXA&pd_rd_r=8f35dcc9-1b1a-467a-b2ae-027abb70e68a&ref_=pd_gw_ci_mcx_mi&th=1"

const productDetails = { name: "", price: "", link: "" };

async function scrape() {
  const { data } = await axios.get(url); // just to fetch the data
  const $ = cheerio.load(data); // getting the html
  const item = $("div#ppd");
  productDetails.name = $(item).find("h1 span#productTitle");
  productDetails.link = url;
  const price = $(item)
    .find("span .a-price-whole")
    .first()
    .text()
    .replace(/[,.]/g, "");
    const priceNo = parseInt(price)
    productDetails.price = priceNo;
}

scrape();
