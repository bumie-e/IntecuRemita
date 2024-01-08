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

### To create Azure web app service

- Login to Azure portal
- Create a resource group and Azure Container Registry
`az acr create --name $registryName --resource-group $resourceGroup --sku Basic --location $location`
  In this command:
  
  --name is the name you want to give to your Azure Container Registry.
  --resource-group is the name of the resource group where you want to create the Azure Container Registry.
  --sku is the SKU for the Azure Container Registry. In this example, we're using the Basic SKU.
  --location is the Azure region where you want to create the Azure Container Registry.
  Please replace $registryName, $resourceGroup, and $location with your actual values.
- 
### To build the docker image

1. Add Dockerfile and .dockerignore files to your project
2. Configure gunicorn.conf.py file
3. Build and run the image locally `docker build --tag flask-demo .`
4. 
1. docker build --tag fastapi-demo .
2. docker run --detach --publish 3100:3100 fastapi-demo.  docker login innovatexapi.azurecr.io -u innovatexapi -p H0zT83XSLntt3F0uFg8KMEZpeV0EVYwijHiAMTn8aT+ACRD2BxsP
4. docker build -t innovatexapi.azurecr.io/innovatexapiapp:build-tag-
5. docker push innovatexapi.azurecr.io/innovatexapiapp:build-tag-2
