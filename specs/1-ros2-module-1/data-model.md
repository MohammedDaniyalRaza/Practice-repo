# Data Model

This document defines the key entities for the AI/Spec-Driven Book Creation project.

## Entity: Book

Represents the entire book.

-   **Fields**:
    -   `title`: string
    -   `subtitle`: string
    -   `authors`: array of strings
    -   `version`: string
-   **Relationships**:
    -   Has many `Chapter`s.

## Entity: Chapter

Represents a chapter in the book.

-   **Fields**:
    -   `number`: integer
    -   `title`: string
    -   `summary`: string
-   **Relationships**:
    -   Belongs to a `Book`.
    -   Has many `Section`s.
    -   Corresponds to one `Spec`.

## Entity: Section

Represents a section within a chapter.

-   **Fields**:
    -   `number`: string (e.g., "1.1", "1.2.3")
    -   `title`: string
    -   `content`: Markdown string
-   **Relationships**:
    -   Belongs to a `Chapter`.

## Entity: Spec

Represents the specification for a chapter.

-   **Fields**:
    -   `featureName`: string
    -   `content`: Markdown string
-   **Relationships**:
    -   Is the source for one `Chapter`.

## Entity: Citation

Represents a bibliographic citation.

-   **Fields**:
    -   `id`: string (e.g., from Zotero)
    -   `type`: string (e.g., "book", "article")
    -   `title`: string
    -   `author`: array of objects
    -   `issued`: date parts
    -   `publisher`: string
    -   `URL`: string
-   **Relationships**:
    -   Can be referenced in multiple `Section`s.
