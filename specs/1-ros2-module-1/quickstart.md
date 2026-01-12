# Quickstart Guide

This guide explains how to set up the environment and run the book generation process.

## Prerequisites

-   Node.js and npm
-   Python 3.8+
-   An environment variable `GEMINI_API_KEY` with a valid Gemini API key.

## Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install Docusaurus dependencies**:
    ```bash
    npm install
    ```

3.  **Install Python dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

## Running the Book Generation

1.  **Place your spec file** in the `specs/` directory.

2.  **Run the generation script**:
    ```bash
    python scripts/generate_book.py
    ```

3.  **Start the Docusaurus development server**:
    ```bash
    npm start
    ```

The generated book will be available at `http://localhost:3000`.
