# Get a Transaction for Receiving Money

This API retrieves details of a specific transaction, including its status and payment details.

## Request

### HTTP Method & Endpoint

GET `/api/v1/trades/:trade`

### HTTP Headers <Badge type="tip" text="Header" vertical="top" />

| Key    | Value              | Description                                        |
|--------|--------------------|----------------------------------------------------|
| Accept | `application/json` | Specifies that the response format should be JSON. |

### Path parameters <Badge type="tip" text="Path" vertical="top" />

| Key   | Type   | Required | Signed | Description                                               |
|-------|--------|----------|--------|-----------------------------------------------------------|
| trade | string | Yes      | No     | The transaction ID provided by your system or our system. |

### Query parameters <Badge type="tip" text="Query" vertical="top" />

| Key        | Type   | Required | Signed | Description                  |
|------------|--------|----------|--------|------------------------------|
| client_key | string | Yes      | Yes    | The API access key.          |
| signature  | string | Yes      | No     | Signed value for validation. |

## Request example

```shell
curl -X GET \
  https://example.com/api/v1/trades/20230101000000?client_key=01h6tn69wfcpy5q5x3vpb3x9me&signature=ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 \
  -H "Accept: application/json"
```

## Response

### Response parameters

| Key          | Type    | Description                                   |
|--------------|---------|-----------------------------------------------|
| client_key   | string  | The API access key.                           |
| amount       | string  | The transaction amount received.              |
| trade_no     | string  | The transaction ID provided by our system.    |
| out_trade_no | string  | The transaction ID provided by your system.   |
| payment_url  | string  | The URL of the cashier payment page.          |
| created_at   | string  | The transaction creation time in `UTC±00:00`. |
| paid_at      | string  | The transaction payment time in `UTC±00:00`.  |
| status       | integer | The transaction status.                       |

#### Transaction Status Codes

| Status Code | Description |
|-------------|-------------|
| 0           | Unpaid      |
| 1           | Paid        |
| 2           | Expired     |

### Response example

```json{8}
{
  "client_key": "01h6tn69wfcpy5q5x3vpb3x9me",
  "amount": "100.00",
  "trade_no": "100000012023072123389872",
  "out_trade_no": "1698896652712",
  "created_at": "2023-01-01T01:01:01.000000Z",
  "paid_at": "2023-01-01T01:02:03.000000Z",
  "status": 1
}
```
