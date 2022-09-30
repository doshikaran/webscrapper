const axios = require("axios"); // to fetch the url
const cheerio = require("cheerio"); // to extract

const url =
"https://www.amazon.co.uk/Apple-24-inch-8%E2%80%91core-ports-512GB/dp/B0932XW18F/ref=sr_1_1?crid=25D0BUGS6DYX9&keywords=apple+24+inch+imac&qid=1664519979&qu=eyJxc2MiOiIyLjI4IiwicXNhIjoiMS42NiIsInFzcCI6IjEuMzcifQ%3D%3D&sprefix=apple+24%2Caps%2C200&sr=8-1"
const productName = { name: "", price: "", link: "" };
async function scrape() {
  const { data } = await axios.get(url); // just to fetch the data
  const $ = cheerio.load(data); // getting the html
  const item = $('h1 span#productTitle')
  productName.name = $(item).find('h1 span#productTitle')
  console.log(productName.name)
}

scrape();
