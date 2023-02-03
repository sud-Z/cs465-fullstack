const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if(!(responseBody instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    }
    else {
        if(!responseBody.length){
            message = 'No trips exist in our database!';
        }
    }
    res.render('travel',
        {
            title: pageTitle,
            trips: responseBody,
            message
        }
    );
};

/* GET Travel List View*/
const travelList = (req, res) => {
    const path = '/api/trips';
    const requesetOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> travelController.travelList calling' + requesetOptions.url);
    request(
        requesetOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};

module.exports = {
    travelList
};









/*
var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
/* GET travel view */
/*
const travel = (req, res) => {
    console.log('Inside app_server, controllers, travel.js, travel function');
    res.render('travel', {title: 'Travlr Getaways', trips});
}
module.exports = {
    travel
}
 */