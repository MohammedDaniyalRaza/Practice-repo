# Tasks: AI-Driven Book Creation

**Input**: Design documents from `/specs/1-ros2-module-1/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure.

- [X] T001 Initialize a new Docusaurus project in the repository root.
- [X] T002 [P] Create a `requirements.txt` file for Python dependencies (e.g., `google-generativeai`).
- [X] T002a Install Python dependencies from requirements.txt.
- [X] T003 [P] Create a `scripts/` directory for automation scripts.
- [X] T004 [P] Create a `data/` directory for storing citation data.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T005 Implement a custom React component for citations in `src/components/CitationList.js`.
- [X] T006 [P] Create a Python script `scripts/prepare_citations.py` to process Zotero-exported CSL JSON into a format usable by the React component and save it to `data/citations.json`.

**Checkpoint**: Foundation ready - chapter generation can now begin.

---

## Phase 3: User Story 1 - ROS 2 Core Concepts (Priority: P1) 🎯 MVP

**Goal**: Create the first chapter of the book, "Module 1: The Robotic Nervous System (ROS 2)".

**Independent Test**: The "ROS 2 Core Concepts" chapter is viewable in the Docusaurus site.

### Implementation for User Story 1

- [X] T007 [US1] Create a placeholder file `docs/ros-2-core-concepts.md`.
- [X] T008 [US1] Add the `ros-2-core-concepts.md` chapter to the Docusaurus sidebar in `sidebars.ts`.

**Checkpoint**: At this point, the first chapter should be viewable in the Docusaurus development server.

---

## Phase 4: User Story 2 - Python Agents to ROS Controllers (Priority: P2)

**Goal**: Create the second chapter of the book.

**Independent Test**: The "Python Agents to ROS Controllers" chapter is viewable in the Docusaurus site.

### Implementation for User Story 2
- [X] T009 [US2] Create a new spec file `specs/2-python-agents/spec.md` for this chapter.
- [X] T010 [US2] Create a placeholder file `docs/python-agents-to-ros-controllers.md`.
- [X] T011 [US2] Add the new chapter to the Docusaurus sidebar in `sidebars.ts`.

**Checkpoint**: At this point, the first two chapters should be viewable.

---

## Phase 5: User Story 3 - Humanoid Modeling with URDF (Priority: P3)

**Goal**: Create the third chapter of the book.

**Independent Test**: The "Humanoid Modeling with URDF" chapter is viewable in the Docusaurus site.

### Implementation for User Story 3
- [X] T012 [US3] Create a new spec file `specs/3-humanoid-modeling/spec.md` for this chapter.
- [X] T013 [US3] Create a placeholder file `docs/humanoid-modeling-with-urdf.md`.
- [X] T014 [US3] Add the new chapter to the Docusaurus sidebar in `sidebars.ts`.

**Checkpoint**: All three chapters should now be independently functional.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [X] T015 Define and document the Human-in-the-Loop (HITL) content review process in `CONTRIBUTING.md`.
- [X] T016 [P] Perform a full review of all generated content for technical accuracy and clarity. (Note: This is a manual review task for the user.)
- [X] T017 Build the Docusaurus site for production (`npm run build`) and check for any errors.
- [X] T018 Configure GitHub Actions to deploy the built site to GitHub Pages.
- [X] T019 Run a final validation of the deployed site, checking for broken links and rendering issues. (Note: This is a manual validation task for the user after the GitHub Action runs.)

---

## Dependencies & Execution Order

- **Setup (Phase 1)** must complete before **Foundational (Phase 2)**.
- **Foundational (Phase 2)** must complete before any **User Story (Phase 3+)**.
- User Stories (chapters) can be implemented sequentially as their specs are written.
- **Polish (Phase N)** begins after all desired chapters are generated and reviewed.

### Parallel Opportunities

- Once Phase 2 is complete, different authors could write specs for different chapters in parallel.
- The creation of placeholder chapters (US1, US2, US3) could be run in parallel if their specs are ready.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational
3.  Complete Phase 3: User Story 1
4.  **STOP and VALIDATE**: Deploy the single-chapter book to demonstrate the pipeline.

### Incremental Delivery

1.  Complete the MVP.
2.  For each new chapter (US2, US3, etc.), create the spec, generate the content, and deploy the updated book. Each chapter adds incremental value.