# Research & Decisions

This document outlines the research conducted to resolve the "NEEDS CLARIFICATION" points in the implementation plan.

## 1. AI Model for Content Generation

### Research
-   **Gemini 1.5 Flash**: Optimized for speed and cost-effectiveness. Ideal for high-volume, less complex tasks like summarization and data extraction.
-   **Gemini 1.5 Pro**: Offers higher quality and more nuanced content generation. Better suited for complex reasoning, creative writing, and detailed analysis.

### Decision
-   **Use Gemini 1.5 Pro**.

### Rationale
-   The goal is to create a high-quality technical book. The superior reasoning and content generation capabilities of Gemini 1.5 Pro are better aligned with this goal, even if it comes at a slightly higher cost and slower speed compared to Flash. The quality of the content is paramount.

## 2. Content Validation Workflow

### Research
-   **Fully Automated**: Can use tools to check for grammar, style, and plagiarism, but cannot validate technical accuracy or nuanced context.
-   **Human-in-the-Loop (HITL)**: Combines AI efficiency with human judgment. Best practices recommend a hybrid approach where automated tools perform an initial screening, and human reviewers conduct a deeper analysis, especially for high-risk or complex content.

### Decision
-   **Implement a Human-in-the-Loop (HITL) workflow**.

### Rationale
-   The project's constitution requires technical accuracy and no hallucinations. A fully automated process cannot guarantee this. A HITL workflow, where human experts review AI-generated content, is essential to ensure the quality, accuracy, and credibility of the book. The workflow will involve an initial AI generation pass, followed by a human review and editing stage.

## 3. Citation Management

### Research
-   Docusaurus does not have a native Zotero plugin.
-   The recommended approach is to export citations from Zotero (or another manager) to a structured format like BibTeX or CSL JSON.
-   This data can then be rendered in Docusaurus using custom React components embedded in MDX files.

### Decision
-   **Export Zotero library to CSL JSON and render with a custom React component**.

### Rationale
-   This approach provides a good balance between automation and implementation complexity. It avoids purely manual citation management while not requiring the development of a full-fledged Docusaurus plugin. The CSL JSON format is structured and can be easily consumed by a React component to display citations consistently throughout the book.
