const Transactions = [
  {
    "id": "txn_00001",
    "amount": 5412,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "AMEX",
        "last4": "8855",
        "exp_month": 12,
        "exp_year": 2030
      }
    },
    "items": [
      {
        "item_id": "44",
        "name": "아이스쿠키 앤 크림",
        "quantity": 3,
        "price": 1163
      },
      {
        "item_id": "36",
        "name": "게토레이",
        "quantity": 3,
        "price": 641
      }
    ],
    "created_at": "2024-05-29T13:39:19",
    "customer_id": "cust_3252"
  },
  {
    "id": "txn_00002",
    "amount": 20642,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "Visa",
        "last4": "3203",
        "exp_month": 10,
        "exp_year": 2023
      }
    },
    "items": [
      {
        "item_id": "11",
        "name": "빙그레 메로나",
        "quantity": 8,
        "price": 541
      },
      {
        "item_id": "34",
        "name": "환타",
        "quantity": 10,
        "price": 807
      },
      {
        "item_id": "31",
        "name": "코카콜라",
        "quantity": 6,
        "price": 671
      },
      {
        "item_id": "47",
        "name": "누가바",
        "quantity": 3,
        "price": 1406
      }
    ],
    "created_at": "2024-05-21T13:39:19",
    "customer_id": "cust_1905"
  },
  {
    "id": "txn_00003",
    "amount": 17300,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "AMEX",
        "last4": "5576",
        "exp_month": 3,
        "exp_year": 2026
      }
    },
    "items": [
      {
        "item_id": "46",
        "name": "빵빠레",
        "quantity": 10,
        "price": 1730
      }
    ],
    "created_at": "2024-05-17T13:39:19",
    "customer_id": "cust_3646"
  },
  {
    "id": "txn_00004",
    "amount": 7275,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "Visa",
        "last4": "8085",
        "exp_month": 10,
        "exp_year": 2026
      }
    },
    "items": [
      {
        "item_id": "20",
        "name": "스크류바",
        "quantity": 5,
        "price": 1455
      }
    ],
    "created_at": "2024-05-22T13:39:19",
    "customer_id": "cust_9811"
  },
  {
    "id": "txn_00005",
    "amount": 40508,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "Visa",
        "last4": "2505",
        "exp_month": 6,
        "exp_year": 2027
      }
    },
    "items": [
      {
        "item_id": "4",
        "name": "환타",
        "quantity": 10,
        "price": 1902
      },
      {
        "item_id": "47",
        "name": "누가바",
        "quantity": 3,
        "price": 1406
      },
      {
        "item_id": "22",
        "name": "해태 홈런볼",
        "quantity": 10,
        "price": 1027
      },
      {
        "item_id": "37",
        "name": "마운틴듀",
        "quantity": 5,
        "price": 1400
      }
    ],
    "created_at": "2024-06-06T13:39:19",
    "customer_id": "cust_7588"
  },
  {
    "id": "txn_00006",
    "amount": 17458,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "AMEX",
        "last4": "9514",
        "exp_month": 7,
        "exp_year": 2024
      }
    },
    "items": [
      {
        "item_id": "25",
        "name": "오리온 포카칩",
        "quantity": 2,
        "price": 980
      },
      {
        "item_id": "41",
        "name": "빙그레 메로나",
        "quantity": 1,
        "price": 832
      },
      {
        "item_id": "31",
        "name": "코카콜라",
        "quantity": 6,
        "price": 671
      },
      {
        "item_id": "33",
        "name": "칠성사이다",
        "quantity": 8,
        "price": 1330
      }
    ],
    "created_at": "2024-06-09T13:39:19",
    "customer_id": "cust_4009"
  },
  {
    "id": "txn_00007",
    "amount": 6900,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "MasterCard",
        "last4": "4470",
        "exp_month": 3,
        "exp_year": 2023
      }
    },
    "items": [
      {
        "item_id": "43",
        "name": "해태 부라보콘",
        "quantity": 5,
        "price": 1380
      }
    ],
    "created_at": "2024-06-01T13:39:19",
    "customer_id": "cust_6508"
  },
  {
    "id": "txn_00008",
    "amount": 17817,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "AMEX",
        "last4": "3653",
        "exp_month": 4,
        "exp_year": 2026
      }
    },
    "items": [
      {
        "item_id": "50",
        "name": "스크류바",
        "quantity": 10,
        "price": 669
      },
      {
        "item_id": "19",
        "name": "수박바",
        "quantity": 3,
        "price": 817
      },
      {
        "item_id": "15",
        "name": "하겐다즈",
        "quantity": 6,
        "price": 1446
      }
    ],
    "created_at": "2024-06-11T13:39:19",
    "customer_id": "cust_4030"
  },
  {
    "id": "txn_00009",
    "amount": 21028,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "MasterCard",
        "last4": "1618",
        "exp_month": 9,
        "exp_year": 2025
      }
    },
    "items": [
      {
        "item_id": "1",
        "name": "코카콜라",
        "quantity": 4,
        "price": 932
      },
      {
        "item_id": "17",
        "name": "누가바",
        "quantity": 6,
        "price": 1243
      },
      {
        "item_id": "47",
        "name": "누가바",
        "quantity": 7,
        "price": 1406
      }
    ],
    "created_at": "2024-06-10T13:39:19",
    "customer_id": "cust_4022"
  },
  {
    "id": "txn_00010",
    "amount": 17384,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "MasterCard",
        "last4": "0188",
        "exp_month": 7,
        "exp_year": 2025
      }
    },
    "items": [
      {
        "item_id": "49",
        "name": "수박바",
        "quantity": 8,
        "price": 1208
      },
      {
        "item_id": "26",
        "name": "해태 오예스",
        "quantity": 2,
        "price": 1155
      },
      {
        "item_id": "11",
        "name": "빙그레 메로나",
        "quantity": 10,
        "price": 541
      }
    ],
    "created_at": "2024-06-15T13:39:19",
    "customer_id": "cust_5593"
  },
  {
    "id": "txn_00011",
    "amount": 18378,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "AMEX",
        "last4": "6164",
        "exp_month": 9,
        "exp_year": 2027
      }
    },
    "items": [
      {
        "item_id": "48",
        "name": "죠스바",
        "quantity": 6,
        "price": 1478
      },
      {
        "item_id": "4",
        "name": "환타",
        "quantity": 5,
        "price": 1902
      }
    ],
    "created_at": "2024-06-06T13:39:19",
    "customer_id": "cust_5155"
  },
  {
    "id": "txn_00012",
    "amount": 3876,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "Visa",
        "last4": "2693",
        "exp_month": 1,
        "exp_year": 2023
      }
    },
    "items": [
      {
        "item_id": "34",
        "name": "환타",
        "quantity": 3,
        "price": 807
      },
      {
        "item_id": "20",
        "name": "스크류바",
        "quantity": 1,
        "price": 1455
      }
    ],
    "created_at": "2024-06-14T13:39:19",
    "customer_id": "cust_7969"
  },
  {
    "id": "txn_00013",
    "amount": 1560,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "AMEX",
        "last4": "9584",
        "exp_month": 2,
        "exp_year": 2026
      }
    },
    "items": [
      {
        "item_id": "3",
        "name": "칠성사이다",
        "quantity": 1,
        "price": 1560
      }
    ],
    "created_at": "2024-06-09T13:39:19",
    "customer_id": "cust_3358"
  },
  {
    "id": "txn_00014",
    "amount": 30029,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "Visa",
        "last4": "3021",
        "exp_month": 1,
        "exp_year": 2026
      }
    },
    "items": [
      {
        "item_id": "18",
        "name": "죠스바",
        "quantity": 9,
        "price": 1691
      },
      {
        "item_id": "14",
        "name": "아이스쿠키 앤 크림",
        "quantity": 8,
        "price": 1311
      },
      {
        "item_id": "16",
        "name": "빵빠레",
        "quantity": 2,
        "price": 1404
      },
      {
        "item_id": "5",
        "name": "포카리스웨트",
        "quantity": 2,
        "price": 757
      }
    ],
    "created_at": "2024-05-20T13:39:19",
    "customer_id": "cust_3017"
  },
  {
    "id": "txn_00015",
    "amount": 20160,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "AMEX",
        "last4": "1477",
        "exp_month": 10,
        "exp_year": 2029
      }
    },
    "items": [
      {
        "item_id": "49",
        "name": "수박바",
        "quantity": 5,
        "price": 1208
      },
      {
        "item_id": "11",
        "name": "빙그레 메로나",
        "quantity": 3,
        "price": 541
      },
      {
        "item_id": "31",
        "name": "코카콜라",
        "quantity": 9,
        "price": 671
      },
      {
        "item_id": "24",
        "name": "롯데 칸쵸",
        "quantity": 4,
        "price": 827
      },
      {
        "item_id": "27",
        "name": "오리온 고소미",
        "quantity": 3,
        "price": 1050
      }
    ],
    "created_at": "2024-05-21T13:39:19",
    "customer_id": "cust_6757"
  },
  {
    "id": "txn_00016",
    "amount": 14061,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "MasterCard",
        "last4": "7137",
        "exp_month": 6,
        "exp_year": 2030
      }
    },
    "items": [
      {
        "item_id": "14",
        "name": "아이스쿠키 앤 크림",
        "quantity": 5,
        "price": 1311
      },
      {
        "item_id": "6",
        "name": "게토레이",
        "quantity": 4,
        "price": 1014
      },
      {
        "item_id": "29",
        "name": "농심 양파링",
        "quantity": 5,
        "price": 690
      }
    ],
    "created_at": "2024-05-16T13:39:19",
    "customer_id": "cust_8048"
  },
  {
    "id": "txn_00017",
    "amount": 28892,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "MasterCard",
        "last4": "9481",
        "exp_month": 1,
        "exp_year": 2028
      }
    },
    "items": [
      {
        "item_id": "12",
        "name": "롯데 월드콘",
        "quantity": 4,
        "price": 1419
      },
      {
        "item_id": "25",
        "name": "오리온 포카칩",
        "quantity": 4,
        "price": 980
      },
      {
        "item_id": "40",
        "name": "탐스제주감귤",
        "quantity": 9,
        "price": 1208
      },
      {
        "item_id": "16",
        "name": "빵빠레",
        "quantity": 6,
        "price": 1404
      }
    ],
    "created_at": "2024-06-05T13:39:19",
    "customer_id": "cust_1954"
  },
  {
    "id": "txn_00018",
    "amount": 15335,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "AMEX",
        "last4": "3573",
        "exp_month": 10,
        "exp_year": 2023
      }
    },
    "items": [
      {
        "item_id": "23",
        "name": "농심 새우깡",
        "quantity": 5,
        "price": 757
      },
      {
        "item_id": "37",
        "name": "마운틴듀",
        "quantity": 3,
        "price": 1400
      },
      {
        "item_id": "27",
        "name": "오리온 고소미",
        "quantity": 7,
        "price": 1050
      }
    ],
    "created_at": "2024-06-03T13:39:19",
    "customer_id": "cust_6588"
  },
  {
    "id": "txn_00019",
    "amount": 24094,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "MasterCard",
        "last4": "8438",
        "exp_month": 8,
        "exp_year": 2027
      }
    },
    "items": [
      {
        "item_id": "17",
        "name": "누가바",
        "quantity": 2,
        "price": 1243
      },
      {
        "item_id": "31",
        "name": "코카콜라",
        "quantity": 8,
        "price": 671
      },
      {
        "item_id": "32",
        "name": "펩시",
        "quantity": 3,
        "price": 1408
      },
      {
        "item_id": "48",
        "name": "죠스바",
        "quantity": 5,
        "price": 1478
      },
      {
        "item_id": "39",
        "name": "밀키스",
        "quantity": 3,
        "price": 1542
      }
    ],
    "created_at": "2024-05-21T13:39:19",
    "customer_id": "cust_1515"
  },
  {
    "id": "txn_00020",
    "amount": 30441,
    "currency": "KRW",
    "payment_method": {
      "type": "card",
      "card": {
        "brand": "MasterCard",
        "last4": "5280",
        "exp_month": 8,
        "exp_year": 2028
      }
    },
    "items": [
      {
        "item_id": "24",
        "name": "롯데 칸쵸",
        "quantity": 3,
        "price": 827
      },
      {
        "item_id": "33",
        "name": "칠성사이다",
        "quantity": 7,
        "price": 1330
      },
      {
        "item_id": "39",
        "name": "밀키스",
        "quantity": 9,
        "price": 1542
      },
      {
        "item_id": "7",
        "name": "마운틴듀",
        "quantity": 1,
        "price": 1934
      },
      {
        "item_id": "12",
        "name": "롯데 월드콘",
        "quantity": 2,
        "price": 1419
      }
    ],
    "created_at": "2024-05-20T13:39:19",
    "customer_id": "cust_2144"
  }
];

export default Transactions;