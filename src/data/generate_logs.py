import json
import random
from datetime import datetime, timedelta

# Load the product data
file_path = 'dummy_transactions.json'
with open(file_path, 'r', encoding='utf-8') as file:
    transactions = json.load(file)

# Generate dummy 20+a logs
logs = []
base_time = datetime.now()

transactions_cnt = 0

while transactions_cnt < len(transactions):
    # Generate a random token
    token = ''.join([random.choice('0123456789ABCDEF') for _ in range(16)])
    # Randomly generate whether a user does payment or not
    do_payment = random.choice([True, False])
    # Create a log
    if do_payment:
        transaction = transactions[transactions_cnt]
        transaction_created_at = datetime.strptime(transaction["created_at"], '%Y-%m-%dT%H:%M:%S')
        log = {
            "id": transaction["customer_id"],
            "token": token,
            "time_in": (transaction_created_at - timedelta(minutes=random.randint(3, 20))).strftime('%Y-%m-%dT%H:%M:%S'),
            "time_out": (transaction_created_at + timedelta(minutes=random.randint(1, 4))).strftime('%Y-%m-%dT%H:%M:%S'),
            "do_payment": "true",
            "transaction_id": transaction["id"],
        }
        transactions_cnt += 1
    else:
        # Randomly generate the time_in
        time_in = base_time - timedelta(days=random.randint(0, 30))
        # Randomly generate wheter a arbitary user connects to BLE device or not
        token = random.choice(["none", token])
        log = {
            "id": f"cust_{random.randint(1000, 9999)}",
            "token": token,
            "time_in": time_in.strftime('%Y-%m-%dT%H:%M:%S'),
            "time_out": "none" if token == "none" else (time_in + timedelta(minutes=random.randint(1, 10))).strftime('%Y-%m-%dT%H:%M:%S'),
            "do_payment": "false",
            "transaction_id": "none",
        }
    logs.append(log)

# Convert the logs to JSON format
logs_json = json.dumps(logs, indent=2, ensure_ascii=False)

# Save to a file
logs_file_path = 'dummy_logs.json'
with open(logs_file_path, 'w', encoding='utf-8') as file:
    file.write(logs_json)

logs_file_path
