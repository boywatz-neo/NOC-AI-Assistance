# API Contract

## Purpose

Define stable request and response contracts so the prototype UI can evolve independently from the eventual FastAPI backend.

## `POST /api/chat`

Request:

```json
{
  "question": "เพิ่ม customer ใหม่ประเภท live streaming ต้องทำอะไรบ้าง"
}
```

Response:

```json
{
  "message": {
    "id": "msg-123",
    "role": "assistant",
    "content": "สำหรับงานนี้ ผมแนะนำให้เริ่มจาก...",
    "confidence": "High",
    "citations": [
      {
        "documentName": "config_manual.pdf",
        "page": 34,
        "version": "v2025.1"
      }
    ]
  }
}
```

Validation rules:

- `question` is required
- response must always include `content`
- `confidence` must be one of `High`, `Medium`, `Low`

## `POST /api/checklist`

Request:

```json
{
  "serviceType": "Live Streaming",
  "action": "Add new customer",
  "customerName": "Acme Media"
}
```

Response:

```json
{
  "items": [
    {
      "step": 1,
      "title": "Validate active release",
      "detail": "Confirm the current active release...",
      "requiredParameters": ["release version", "change window"]
    }
  ]
}
```

Validation rules:

- `serviceType` is required
- `action` is required
- `items` must be sorted in execution order

## `GET /api/documents`

Response:

```json
{
  "activeVersion": "v2025.1",
  "documents": [
    {
      "id": "doc-1",
      "docName": "config_manual.pdf",
      "version": "v2025.1",
      "effectiveDate": "2025-06-03",
      "category": "config",
      "language": "mixed",
      "status": "active",
      "pages": 214
    }
  ]
}
```

## Production API deltas

When FastAPI is introduced:

- add auth or network-origin enforcement for admin routes
- add pagination for document and feedback lists
- add audit log and feedback submission endpoints
- add upload and indexing job endpoints
