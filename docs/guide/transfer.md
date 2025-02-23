# Send money

This API allows you to send money to a specified account.

## Request

### HTTP Method & Endpoint

POST `/api/v1/transfers`

### Headers <Badge type="tip" text="Header" vertical="top" />

| Key          | Value              | Description                                 |
|--------------|--------------------|---------------------------------------------|
| Accept       | `application/json` | Specifies that the response format is JSON. |
| Content-Type | `application/json` | Indicates that the request body is JSON.    |

### Request Body parameters <Badge type="tip" text="Body" vertical="top" />

| Key             | Type   | Required    | Signed | Description                                             |
|-----------------|--------|-------------|--------|---------------------------------------------------------|
| client_key      | string | Yes         | Yes    | The API access key.                                     |
| amount          | string | Yes         | Yes    | The amount to send.                                     |
| channel_id      | string | Yes         | Yes    | The payment method identifier.                          |
| out_transfer_no | string | Yes         | Yes    | 	The unique transaction ID provided by you.             |
| notify_url      | string | Yes         | Yes    | The webhook URL for transaction status updates.         |
| payee_account   | string | Yes         | Yes    | The recipient's account number.                         |
| payee_name      | string | Yes         | Yes    | The full name of the recipient.                         |
| extra           | string | Required If | Yes    | Additional parameters, **MUST be a valid JSON string**. |
| signature       | string | Yes         | No     | The signed value for request verification.              |

## Request example

```shell{8,13}
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
    "amount": "100.00",
    "channel_id": "5003",
    "out_transfer_no": "20230101000000",
    "notify_url": "https://your-domain.com/webhook",
    "payee_account": "1234567890",
    "payee_name": "Sammy Shark",
    "extra": "{\"account_type\":\"CPF\", \"id_number\":\"1234567890\"}",
    "signature": ""
  }'
```

## Response

### Response parameters

| Key             | Type   | Description                                   |
|-----------------|--------|-----------------------------------------------|
| client_key      | string | The API access key.                           |
| amount          | string | The amount sent.                              |
| transfer_no     | string | The transaction ID provided by our system.    |
| out_transfer_no | string | The transaction ID provided by your system.   |
| channel_id      | string | The payment method.                           |
| payee_account   | string | The recipient's account number.               |
| payee_name      | string | The full name of the recipient.               |
| created_at      | string | The transaction creation time in `UTC±00:00`. |

### Response example

```json{4}
{
  "client_key": "01hcd0d0c2qh9wy5efm5sxrk38",
  "amount": "100.00",
  "transfer_no": "100000012023072123389872",
  "out_transfer_no": "20230101000000",
  "channel_id": "5001",
  "payee_account": "1234567890",
  "payee_name": "Sammy Shark",
  "created_at": "2023-01-01T01:01:01.000000Z"
}
```

### How to Determine if the Order Was Successfully Placed?

Check whether the HTTP response status code is `200` or `201`. Or verify if a specific field, such as `transfer_no` exists in the response.

::: code-tabs

@tab Java

```java
import com.google.gson.*;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();

        // Create the request body (example, if needed, otherwise, you can remove this)
        String requestBody = "{\"key\":\"value\"}";  // You can replace with actual data for POST request

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://example.com/api/v1/trades"))
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .header("Accept", "application/json")
                .header("Content-Type", "application/json")
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Check if the HTTP status code is 200 ~ 299
            int statusCode = response.statusCode();

            if (statusCode >= 200 && statusCode <= 299) {
                System.out.println("Success: " + statusCode);
            } else {
                System.out.println("Failed: " + statusCode);
            }

            // Check if a specific key exists in the JSON response, e.g., 'transfer_no'
            String responseBody = response.body();
            System.out.println("Response Body: " + responseBody);

            if (isValidJson(responseBody)) {
                Gson gson = new Gson();
                JsonObject jsonObject = gson.fromJson(responseBody, JsonObject.class);

                String key = "transfer_no";

                if (jsonObject.has(key)) {
                    String value = jsonObject.get(key).getAsString();
                    System.out.println(key + " found: " + value);
                } else {
                    System.out.println(key + " not found");
                }
            } else {
                System.out.println("Response body is not valid JSON.");
            }
        } catch (IOException | InterruptedException e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }

    // Check if a string is valid JSON
    private static boolean isValidJson(String json) {
        try {
            JsonElement jsonElement = JsonParser.parseString(json);
            return jsonElement.isJsonObject() || jsonElement.isJsonArray();
        } catch (JsonParseException e) {
            return false;
        }
    }
}
```
:::


## Important Notes

::: warning Important
In some cases, due to potential communication issues, you may possibly experience timeouts or not receive a response when making requests to our system. However, the request may have been processed successfully on our end. To prevent any discrepancies and ensure transaction accuracy, we recommend marking the transaction as successful and avoiding reprocessing it through other third parties.
:::

## Testing Server Communication

To analyze network latency, use the following `curl` command:

```bash
curl -X POST \
  https://example.com/api/v1/transfers \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "50000.00",
    "channel_id": "5001",
    "client_key": "01j****************7h",
    "extra": "{\"bank_code\":\"AGR\"}",
    "notify_url": "https://api.your-domain.com/webhook-for-dayangpay",
    "out_transfer_no": "20240101000000123456",
    "payee_account": "1234567890",
    "payee_name": "PAYEE NAME",
    "signature": "99c************************************de"
}' \
  -w "\n\nDNS Lookup: %{time_namelookup}s\nConnection: %{time_connect}s\nPretransfer: %{time_pretransfer}s\nStart Transfer: %{time_starttransfer}s\nTotal Time: %{time_total}s\n"
```

Example Output:

```text
DNS Lookup: 0.001148s
Connection: 0.095378s
Pretransfer: 0.241598s
Start Transfer: 0.452405s
Total Time: 0.452453s
```
