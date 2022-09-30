const axios = require('axios') // to fetch the url
const cheerio  = require('cheerio') // to extract 

const url = 'https://www.amazon.com/Seagate-Touch-External-Hard-Drive/dp/B08GRT1JMR/ref=sr_1_4?crid=3GZQFXB0HVF5G&keywords=seagate%2Bexternal%2Bhard%2Bdrive&nav_sdd=aps&qid=1664518196&qu=eyJxc2MiOiI0LjU5IiwicXNhIjoiMy40NCIsInFzcCI6IjIuOTAifQ%3D%3D&refinements=p_n_feature_two_browse-bin%3A5446812011&rnid=562234011&s=pc&sprefix=seagate%2B&sr=1-4&th=1'

async function scrape() {
    const {data} = await axios.get(url); // just to fetch the data
    const $ = cheerio.load(data) // getting the html 
}

scrape()