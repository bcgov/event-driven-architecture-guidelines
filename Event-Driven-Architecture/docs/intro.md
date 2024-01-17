---
sidebar_position: 1
---

# Event Driven Architecture

```mermaid
sequenceDiagram
    participant Client
    participant Service1
    participant EventQueue
    participant Service2

    Client->>Service1: Request
    Service1->>EventQueue: Publish event
    EventQueue->>Service2: Notify event
    Service2->>Client: Response
```