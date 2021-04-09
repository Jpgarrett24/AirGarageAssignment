const { response } = require('express');
const yelp = require('yelp-fusion');

const apiKey = '<API KEY HERE>';

const client = yelp.client(apiKey);

module.exports = {
    getLots(req, res) {
        client.search(
            {
                term: 'parking',
                location: req.params._location
            }
        )
            .then(response => {
                let allResults = response.jsonBody.businesses;
                allResults = allResults.map((lot) => {
                    let finalScore = (lot.review_count * lot.rating) / (lot.review_count + 1);
                    finalScore = finalScore.toFixed(2);
                    return {
                        ...lot,
                        finalScore
                    }
                })
                allResults = allResults.sort((a, b) => (a.finalScore > b.finalScore) ? 1 : -1);
                return res.json(allResults)
            })
            .catch(err => res.status(400).json(err))
    }
}