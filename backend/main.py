from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from utils import send_email

class Item(BaseModel):
    pay_to: Optional[str] = 'Obafemi Awolowo University'
    service: Optional[str] = 'OAU Internet Connectivity by INTECU (For Students)'
    amount: Optional[str] = '100'
    currency: Optional[str] = 'NGN - NIGERIAN NAIRA'
    number_of_cards: Optional[str] = '1 card'
    payers_name: str
    payers_phone: str
    payers_email: str

# Load the app
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Define root
@app.get("/")
async def root():
    return {"message": "Hello Welcome to Remita"}

# Define root
@app.post("/pay_intecu")
async def pay(item: Item):
    pay_to = item.pay_to
    service = item.service
    amount = item.amount
    currency = item.currency
    number_of_cards = item.number_of_cards
    payers_name = item.payers_name
    payers_email = item.payers_email
    
    if number_of_cards == '1 card':
        number_of_cards = 1
    elif number_of_cards == '2 card':
        number_of_cards = 2
    

    send_email(pay_to, service, amount, currency, number_of_cards, payers_name, payers_email)

    return {"message": "Success!"}