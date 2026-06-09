# User Stories and Acceptance Criteria

## Chat assistant

### Story

As a NOC operator, I want to ask configuration questions in Thai or English so that I can get a grounded answer quickly without searching large PDFs manually.

### Acceptance criteria

- User can submit a free-text question from the main page
- Assistant response shows answer text, confidence level, and at least one citation
- User sees copy and feedback actions on each assistant response

## Checklist generation

### Story

As a NOC operator, I want a step-by-step checklist for a customer change so that I can reduce configuration mistakes.

### Acceptance criteria

- UI exposes a checklist section on the main page
- Checklist contains ordered steps and required parameters
- Checklist content can be regenerated from a structured request payload

## Version visibility

### Story

As a NOC operator, I want to know which release is currently active so that I do not follow archived instructions by mistake.

### Acceptance criteria

- Active release badge is visible in the primary header
- Admin section displays both active and archived document versions

## Admin review

### Story

As an admin user, I want to review document status and answer feedback so that I can keep the knowledge base current and identify weak answers.

### Acceptance criteria

- Admin section shows document inventory with version and status
- Feedback section highlights low-confidence or negative responses
- Upload area is visibly reserved for the future ingestion flow
