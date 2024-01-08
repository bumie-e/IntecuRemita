# API Backend

Built with python, and deployed on Azure Static web apps using Docker.

## Functionality
- Receive client payemnt request details
- Generate Intecu card code for the number of cards requested
- Send an email to the client containing the requested card codes

Please note that we won't be processing real payments as we do not have access to Intecu's API to generate real codes.

## Endpoints:

`/`

The home page

`/pay_intecu`

Make a post request containing all the required parameters. This include:
`pay_to`: Who are you making the payments to? Response should be sent as a string. Default -  'Obafemi Awolowo University'
`service`: What are you paying for? Response should be sent as a string. Default -  'OAU Internet Connectivity by INTECU (For Students)'
`amount`: How much do you want to buy? Select from a prredefined list. Response should be sent as a string. Default -  '100'
`currency`: The currency the payment is made. Response should be sent as a string. Default - 'NGN - NIGERIAN NAIRA'
`number_of_cards`: The number of Intecu cards you want to buy. Response should be sent as a string. Default -  '1 card'
`payers_name`: The name of the client wanting to purchase. Response should be sent as a string.
`payers_phone`: The name of the phone number wanting to purchase. Response should be sent as a string.
`payers_email`: The name of the email wanting to purchase. Response should be sent as a string.

### Deployment Endpoint

Will be added soon

## Deployment Platform

Docker & Azure Static Web apps
