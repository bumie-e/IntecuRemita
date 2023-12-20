import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import random
import string
from decouple import config


def generate_random_code(length=10):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

def codes(number_of_cards):

    card_list = []
    for i in range(number_of_cards):
        card_code = generate_random_code
        card_list.append(f"Card {i}: {card_code}")

    return card_list


def send_email(pay_to, service, amount, currency, number_of_cards, payers_name, payers_email):
    # SMTP settings
    subject = f"Receipt and Payment Confirmation for {service}"

    from_email = config('GMAIL_USERNAME')
    password = config('GMAIL_PASSWORD') # Consider using a secure method to store this

    card_list = codes(number_of_cards)

    body = f"""
Hello {payers_name},

Thank you for using Remita service to purchase {service}

Here are your purchase details

Name: {payers_name}
Time of purchase: 0.00CET
Purchase Made to: {pay_to}
Amount: {amount}
Currency: {currency}
Number of Cards Bought: {number_of_cards}

Code Links:
{card_list}

If you have any questions, please contact the customer support

Regards,

    """
    
    # Setting up the MIME
    message = MIMEMultipart()
    message['From'] = from_email
    message['To'] = payers_email
    message['Subject'] = subject

    # The body and the attachments for the mail
    message.attach(MIMEText(body, 'plain'))

    # Create SMTP session for sending the mail
    session = smtplib.SMTP('smtp.gmail.com', 587)  # use gmail with port
    session.starttls()  # enable security
    session.login(from_email, password)  # login with mail_id and password
    text = message.as_string()
    session.sendmail(from_email, payers_email, text)
    session.quit()
    # Close SMTP client