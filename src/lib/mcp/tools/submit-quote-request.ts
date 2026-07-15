import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "submit_quote_request",
  title: "Submit quote request",
  description:
    "Submit a quote request to Arman IT. Sends the same email as the website contact form. Use only with the customer's explicit consent.",
  inputSchema: {
    name: z.string().trim().min(1).describe("Customer full name."),
    email: z.string().trim().email().describe("Customer email address."),
    phone: z.string().trim().min(1).describe("Customer mobile number."),
    address: z.string().trim().min(1).describe("Service address in Perth."),
    description: z
      .string()
      .trim()
      .min(1)
      .describe("Description of the IT issue or service needed."),
  },
  annotations: { readOnlyHint: false, openWorldHint: true },
  handler: async (input) => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const anonKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || !anonKey) {
      return {
        content: [{ type: "text", text: "Server is not configured to send emails." }],
        isError: true,
      };
    }

    const res = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify({
        template: "quote-request",
        data: input,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return {
        content: [
          { type: "text", text: `Failed to submit quote request (${res.status}): ${text}` },
        ],
        isError: true,
      };
    }

    return {
      content: [
        {
          type: "text",
          text: `Quote request submitted for ${input.name}. Arman IT will be in touch shortly.`,
        },
      ],
      structuredContent: { ok: true },
    };
  },
});
