<!-- Sync Impact Report:
Version change: None -> 1.0.0
List of modified principles: All (initial creation)
Added sections: Standards, Scope & RAG Chatbot, Tech Stack & Success Criteria
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md ⚠ pending
- .specify/templates/spec-template.md ⚠ pending
- .specify/templates/tasks-template.md ⚠ pending
- .specify/templates/commands/*.md ⚠ pending
Follow-up TODOs: None
-->
# AI-Native Book on Physical AI & Humanoid Robotics with Embedded RAG Chatbot Constitution

## Core Principles

### I. Technical Accuracy
Every tool, concept, and implementation described MUST be technically accurate and reflect real-world usage (real tools only).

### II. Clear, Code-First Explanations
Explanations MUST be clear, concise, and prioritize executable code examples. Code MUST be the primary means of demonstration.

### III. Spec-Driven Structure
The project MUST adhere to a Spec-Driven Development (SDD) structure using Spec-Kit Plus conventions for all design artifacts (spec, plan, tasks).

### IV. No Hallucinations, No Assumptions
Content and responses MUST be factual, verifiable, and derived from explicit, authoritative sources. Assumptions and fabricated information are strictly prohibited.

## Standards

- Use official documentation only (ROS 2, Gazebo, NVIDIA Isaac, OpenAI, FastAPI).
- All code MUST be executable, minimal, and well-commented.
- Documentation MUST be Docusaurus-compatible Markdown.
- Follow Spec-Kit Plus repository conventions for file structure and content.

## Scope & RAG Chatbot

### Scope: Physical AI & Embodied Intelligence
- **Modules:**
  1. ROS 2 (nodes, topics, URDF, rclpy)
  2. Gazebo & Unity (physics, sensors, digital twins)
  3. NVIDIA Isaac (Sim, Isaac ROS, Nav2)
  4. Vision-Language-Action (LLMs → ROS actions)
  5. Capstone: Autonomous Humanoid Robot

### RAG Chatbot
- Answers MUST only be derived from indexed book content.
- Highlighted-text–only answering MUST be supported.
- No content outside the provided context.
- Responses MUST be deterministic.

## Governance

### Tech Stack
- **Book:** Docusaurus → GitHub Pages
- **Backend:** FastAPI
- **AI:** OpenAI Agents / ChatKit
- **DB:** Neon Postgres + Qdrant
- **Language:** Python, TypeScript

### Success Criteria
- The book MUST build and deploy successfully.
- All code examples MUST run without modification.
- RAG chatbot answers MUST be accurate and bounded by the indexed content.

**Version**: 1.0.0 | **Ratified**: 2025-12-28 | **Last Amended**: 2025-12-28
