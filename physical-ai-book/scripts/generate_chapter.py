import os
import google.generativeai as genai
import argparse

def generate_chapter(spec_path, output_path, api_key=None):
    """
    Generates a book chapter from a specification file using the Gemini API.
    """
    try:
        if api_key:
            genai.configure(api_key=api_key)
        else:
            env_api_key = os.getenv("GEMINI_API_KEY")
            if not env_api_key:
                raise ValueError("GEMINI_API_KEY environment variable not set and no API key provided as argument.")
            genai.configure(api_key=env_api_key)
        
        #
        # For this to work, you MUST have your GEMINI_API_KEY environment variable set.
        #
        # api_key = os.getenv("GEMINI_API_KEY")
        # if not api_key:
        #     raise ValueError("GEMINI_API_KEY environment variable not set.")
        
        # genai.configure(api_key=api_key)

        with open(spec_path, 'r') as f:
            spec_content = f.read()

        model = genai.GenerativeModel('gemini-pro')

        prompt = f"""
        You are an expert technical writer for a book on Physical AI and Robotics.
        Your task is to write a chapter for a Docusaurus website based on the following specification.
        The output MUST be a single, complete Markdown file.
        Adhere to all constraints in the spec.
        The content should be clear, concise, and code-first.

        SPECIFICATION:
        ---
        {spec_content}
        ---
        """

        response = model.generate_content(prompt)

        with open(output_path, 'w') as f:
            f.write(response.text)

        print(f"Chapter successfully generated at {output_path}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate a book chapter from a spec file.")
    parser.add_argument("spec_path", help="Path to the specification file.")
    parser.add_argument("output_path", help="Path to write the generated Markdown file.")
    parser.add_argument("--api-key", help="Optional: Your Gemini API key. If not provided, will use GEMINI_API_KEY environment variable.")
    args = parser.parse_args()

    generate_chapter(args.spec_path, args.output_path, args.api_key)
