# Webhook for sending money

This webhook is triggered when a transaction status updates to `paid` or `failed`.

## Request

### HTTP Method

`POST`

### Headers

| Key          | Value              | Description                                        |
|--------------|--------------------|----------------------------------------------------|
| Accept       | `application/json` | Specifies that the response format should be JSON. | 
| Content-Type | `application/json` | Indicates that the request body is in JSON format. |

:::warning NOTE
We will send a request to your webhook URL when the transaction status changes to `paid` or `failed`.
:::

### Request Body Parameters <Badge type="tip" text="Body" vertical="top" />

| Key             | Type    | Sign | Description                                      |
|-----------------|---------|------|--------------------------------------------------|
| client_key      | string  | Yes  | The API access key.                              |
| signature       | string  | No   | The signed value for request validation.         |
| amount          | string  | Yes  | The transaction amount.                          |
| channel_id      | string  | Yes  | The payment method identifier.                   |
| transfer_no     | string  | Yes  | The transaction ID provided by our system.       |
| out_transfer_no | string  | Yes  | The transaction ID provided by your system.      |
| created_at      | string  | Yes  | The transaction creation time in `UTC±00:00`.    |
| paid_at         | string  | Yes  | The transaction payment time in `UTC±00:00`.     |
| message         | string  | Yes  | Error message (only included when `status = 3`). |
| status          | integer | Yes  | The transaction status.                          |

#### Transaction Status Codes

| Status Code | Description |
|-------------|-------------|
| 1           | Paid        |
| 3           | Failed      |

## Request examples

### Successful Transaction Example

```shell{11,13,14}
curl -X POST \
  https://your-domain.com/webhook \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h349bd08hk3ze70h3zyytaq6",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "amount": "50000.00",
    "channel_id": "5001",
    "transfer_no": "100000012023072123389872",
    "out_transfer_no": "20230101000000",
    "created_at": "2023-01-01T01:01:01.000000Z",
    "paid_at": "2023-01-01T01:02:03.000000Z",
    "status": 1
  }'
```

### Failed Transaction Example

```shell{11,13,14}
curl -X POST \
  https://your-domain.com/webhook \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01h349bd08hk3ze70h3zyytaq6",
    "signature": "c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2",
    "amount": "50000.00",
    "channel_id": "5001",
    "transfer_no": "100000012023072123389872",
    "out_transfer_no": "20230101000000",
    "created_at": "2023-01-01T01:01:01.000000Z",
    "message": "Failed.",
    "status": 3
  }'
```

## Response

### Response parameters

| Key  | Value   | Description                               |
|------|---------|-------------------------------------------|
| code | SUCCESS | `SUCCESS` means the request was accepted. |

The `code` is `SUCCESS` means the request is accepted. other code means that is failed.

#### Response Example

HTTP Status code: `200`

```json
{
  "code": "SUCCESS"
}
```
