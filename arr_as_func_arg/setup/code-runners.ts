import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async c(code) {
      const JUDGE0_API = "http://localhost:2358/submissions?base64_encoded=true&wait=true"
      
      // Matches "// input: {value}" anywhere in the line
      const inputRegex = /\/\/\s*input:\s*([^\r\n]+)/gi
      const matches = [...code.matchAll(inputRegex)]
      
      // Join all found inputs with a newline for Judge0's stdin
      const stdin = matches.map(m => m[1].trim()).join('\n')
      
      const body = {
        source_code: btoa(code),
        language_id: 50,
        stdin: btoa(stdin),
      }
      
      try {
        const response = await fetch(JUDGE0_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        
        const result = await response.json()
        
        // Decode results from Judge0 (Base64)
        const output = result.stdout ? atob(result.stdout) : ''
        const error = result.stderr ? atob(result.stderr) : ''
        const compileErr = result.compile_output ? atob(result.compile_output) : ''
        
        const text = output || error || compileErr || "Program executed (no output)."
        
        return {
          // Wrap in <pre> tag to ensure newlines are preserved
          html: `<pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word;" class="${
            result.stdout ? 'text-green-400' : 'text-red-400'
          }">${escapeHtml(text)}</pre>`,
        }
      } catch (e) {
        return {
          html: `<pre style="margin: 0; white-space: pre-wrap;" class="text-red-500 font-bold">Error connecting to Judge0: ${escapeHtml(e.message)}</pre>`,
        }
      }
    },
  }
})

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}
