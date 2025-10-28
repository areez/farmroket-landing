# API Endpoint: [Endpoint Name]

## Overview

Brief description of what this endpoint does and its purpose.

## Endpoint Details

### HTTP Method & URL

```
[METHOD] /api/[endpoint-path]
```

### Authentication

- **Required**: Yes/No
- **Type**: Bearer Token/API Key/Session
- **Permissions**: Admin/User/Public

## Request

### Headers

```
Content-Type: application/json
Authorization: Bearer [token]
```

### Path Parameters

| Parameter | Type   | Required | Description              |
| --------- | ------ | -------- | ------------------------ |
| `param1`  | string | Yes      | Description of parameter |
| `param2`  | number | No       | Description of parameter |

### Query Parameters

| Parameter | Type   | Required | Default | Description               |
| --------- | ------ | -------- | ------- | ------------------------- |
| `limit`   | number | No       | 10      | Number of items to return |
| `offset`  | number | No       | 0       | Number of items to skip   |

### Request Body

```json
{
  "field1": "string",
  "field2": 123,
  "field3": {
    "nested": "object"
  }
}
```

#### Request Schema

| Field    | Type   | Required | Validation       | Description |
| -------- | ------ | -------- | ---------------- | ----------- |
| `field1` | string | Yes      | min: 1, max: 100 | Description |
| `field2` | number | No       | min: 0           | Description |

## Response

### Success Response (200/201)

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "field1": "value",
    "field2": 123,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  },
  "message": "Success message"
}
```

### Error Responses

#### 400 Bad Request

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "field1",
        "message": "Field is required"
      }
    ]
  }
}
```

#### 401 Unauthorized

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Authentication required"
  }
}
```

#### 403 Forbidden

```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Insufficient permissions"
  }
}
```

#### 404 Not Found

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
```

#### 500 Internal Server Error

```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred"
  }
}
```

## Examples

### cURL Example

```bash
curl -X [METHOD] \
  'http://localhost:3000/api/[endpoint-path]' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer your-token-here' \
  -d '{
    "field1": "example value",
    "field2": 123
  }'
```

### JavaScript Example

```javascript
const response = await fetch('/api/[endpoint-path]', {
  method: '[METHOD]',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    field1: 'example value',
    field2: 123,
  }),
});

const data = await response.json();
```

### Python Example

```python
import requests

url = 'http://localhost:3000/api/[endpoint-path]'
headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {token}'
}
data = {
    'field1': 'example value',
    'field2': 123
}

response = requests.[method](url, headers=headers, json=data)
result = response.json()
```

## Rate Limiting

- **Limit**: X requests per minute
- **Headers**:
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Requests remaining
  - `X-RateLimit-Reset`: Time when limit resets

## Implementation Notes

- Implementation detail 1
- Implementation detail 2
- Performance considerations

## Testing

- [ ] Unit tests for endpoint logic
- [ ] Integration tests with database
- [ ] Authentication/authorization tests
- [ ] Error handling tests
- [ ] Performance tests

## Related Endpoints

- [Related Endpoint 1](./related-endpoint.md)
- [Related Endpoint 2](./another-endpoint.md)

## Changelog

- **v1.0.0** (YYYY-MM-DD): Initial implementation
- **v1.1.0** (YYYY-MM-DD): Added new field
