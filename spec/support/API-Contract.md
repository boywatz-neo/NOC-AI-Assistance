# API Contract

All APIs are implemented as Next.js Route Handlers under `/app/api/*`. Responses use JSON. Request validation should be enforced with Zod or equivalent schema validation.

## `POST /api/chat`

Request:

```json
{
  "conversationId": "uuid-or-null",
  "message": "How do I configure a new live streaming customer?",
  "releaseVersionId": "optional-admin-filter"
}
```

Response:

```json
{
  "conversationId": "uuid",
  "messageId": "uuid",
  "answer": "Step-by-step answer...",
  "confidence": "high",
  "citations": [
    {
      "documentId": "uuid",
      "documentName": "config_manual.pdf",
      "version": "v2025.1",
      "pageStart": 12,
      "pageEnd": 13,
      "chunkId": "uuid"
    }
  ]
}
```

## `POST /api/checklist`

Request:

```json
{
  "serviceType": "Live Streaming",
  "action": "Add new customer",
  "customerContext": "optional details"
}
```

Response:

```json
{
  "checklist": [
    {
      "order": 1,
      "title": "Verify service profile",
      "details": "Confirm the profile exists before assigning customer parameters.",
      "requiredParameters": ["serviceProfileId"]
    }
  ],
  "citations": []
}
```

## `POST /api/documents`

Request:

- `multipart/form-data`
- `file`: PDF.
- `name`: document name.
- `version`: release version.
- `releaseDate`: ISO date.
- `category`: document category.
- `language`: `th`, `en`, or `mixed`.

Response:

```json
{
  "documentId": "uuid",
  "jobId": "uuid",
  "status": "pending"
}
```

## `GET /api/documents`

Response:

```json
{
  "documents": [
    {
      "id": "uuid",
      "name": "config_manual.pdf",
      "version": "v2025.1",
      "status": "indexed",
      "category": "config",
      "createdAt": "2026-06-09T00:00:00.000Z"
    }
  ]
}
```

## `POST /api/documents/[id]/activate`

Response:

```json
{
  "releaseVersionId": "uuid",
  "version": "v2025.1",
  "status": "active"
}
```

## `POST /api/feedback`

Request:

```json
{
  "messageId": "uuid",
  "rating": "up",
  "comment": "optional"
}
```

Response:

```json
{
  "feedbackId": "uuid",
  "status": "saved"
}
```

## Error Shape

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request.",
    "details": {}
  }
}
```

