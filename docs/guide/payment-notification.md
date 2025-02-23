# Webhook for Receiving Money

This webhook is triggered when a transaction status updates to `Paid`.

## Request

### Request method

`POST`

### Headers

| Key          | Value              | Description                                        |
|--------------|--------------------|----------------------------------------------------|
| Accept       | `application/json` | Specifies that the response format should be JSON. | 
| Content-Type | `application/json` | Indicates that the request body is in JSON format. |

:::warning NOTE
We will send a request to your webhook URL when the transaction status changes to `Paid`.
:::

### Request Body Parameters <Badge type="tip" text="Body" vertical="top" />

| Key          | Type    | Signed | Description                                   |
|--------------|---------|--------|-----------------------------------------------|
| client_key   | string  | Yes    | The API access key.                           |
| signature    | string  | No     | The signed value for request validation.      |
| amount       | string  | Yes    | The transaction amount received.              |
| channel_id   | string  | Yes    | The payment method identifier.                |
| trade_no     | string  | Yes    | The transaction ID provided by our system.    |
| out_trade_no | string  | Yes    | The transaction ID provided by your system.   |
| created_at   | string  | Yes    | The transaction creation time in `UTC±00:00`. |
| paid_at      | string  | Yes    | The transaction payment time in `UTC±00:00`.  |
| status       | integer | Yes    | The transaction status.                       |

### Transaction Status Codes

| Status Code | Description |
|-------------|-------------|
| 1           | Paid        |

## Request example

```shell{11,14}
curl -X POST \
  https://your-domain.com/webhook \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h349bd08hk3ze70h3zyytaq6",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "amount": "100.00",
    "channel_id": "1000",
    "trade_no": "100000012023072123389872",
    "out_trade_no": "20230101000000",
    "created_at": "2023-01-01T01:01:01.000000Z",
    "paid_at": "2023-01-01T01:02:03.000000Z",
    "status": 1
  }'
```

## Response

### Response parameters

| Key  | Value   | Description                               |
|------|---------|-------------------------------------------|
| code | SUCCESS | `SUCCESS` means the request was accepted. |

### Response example

HTTP Status code: `200`

```json
{
  "code": "SUCCESS"
}
```
