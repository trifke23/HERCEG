import os
import openai

# To install the OpenAI package, run this in your shell (not in the Python file):
# python -m pip install --upgrade openai
#
# Set the API key in your environment instead of hardcoding:
# (Unix/macOS)   export OPENAI_API_KEY="YOUR_API_KEY"
# (PowerShell)   $env:OPENAI_API_KEY="YOUR_API_KEY"

openai.api_key = os.getenv("OPENAI_API_KEY", "YOUR_API_KEY")

response = openai.Completion.create(
    engine="code-davinci-002",  # Codex engine
    prompt="def hello_world():",
    max_tokens=50
)

print(response.choices[0].text)