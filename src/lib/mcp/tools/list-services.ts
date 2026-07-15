import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "Return the full list of home and small business IT services Arman IT offers in Perth.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = {
      home: [
        "Computer troubleshooting (Windows & macOS)",
        "Printer and scanner setup",
        "WiFi and internet issues",
        "Mesh WiFi setup",
        "Email setup/recovery (Gmail, Outlook, Apple ID)",
        "Phone setup (iPhone & Android)",
        "Virus removal",
        "Smart TV setup",
      ],
      smallBusiness: [
        "Office network and WiFi setup",
        "Printer and scanner deployment",
        "Email configuration and recovery",
        "New workstation setup",
        "On-site troubleshooting and support",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: services,
    };
  },
});
