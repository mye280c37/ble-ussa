import json
import random
from datetime import datetime, timedelta

# Load the product data
file_path = 'dummy_products_category_names.json'
with open(file_path, 'r', encoding='utf-8') as file:
    products = json.load(file)

# Generate 20 dummy transactions
transactions = []
base_time = datetime.now()

for i in range(1, 21):
    transaction = {
        "id": f"txn_{i:05d}",
        "amount": 0,
        "currency": "KRW",
        "payment_method": {
            "type": "card",
            "card": {
                "brand": random.choice(["Visa", "MasterCard", "AMEX"]),
                "last4": ''.join([str(random.randint(0, 9)) for _ in range(4)]),
                "exp_month": random.randint(1, 12),
                "exp_year": random.randint(2023, 2030)
            }
        },
        "items": [],
        "created_at": (base_time - timedelta(days=random.randint(0, 30))).strftime('%Y-%m-%dT%H:%M:%S'),
        "customer_id": f"cust_{random.randint(1000, 9999)}",
    }
    
    # Add random items to the transaction
    num_items = random.randint(1, 5)
    selected_products = random.sample(products, num_items)
    for product in selected_products:
        item = {
            "item_id": product["id"],
            "name": product["name"],
            "quantity": random.randint(1, 10),
            "price": int(product["price"])
        }
        transaction["items"].append(item)
        transaction["amount"] += item["quantity"] * item["price"]
    
    transactions.append(transaction)

# Convert the transactions to JSON format
transactions_json = json.dumps(transactions, indent=2, ensure_ascii=False)

# Save to a file
transactions_file_path = 'dummy_transactions.json'
with open(transactions_file_path, 'w', encoding='utf-8') as file:
    file.write(transactions_json)

transactions_file_path
