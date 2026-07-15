import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description:
    "Return Arman IT contact details, service area, phone, WhatsApp, email, and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Arman IT Solutions",
      tagline: "On-site IT Support – we come to you",
      serviceArea: "Perth, WA and all surrounding suburbs",
      phone: "0424 558 244",
      whatsapp: "https://wa.me/61424558244",
      email: "arman@armanitsolutions.com",
      website: "https://www.armanitsolutions.com",
      facebook: "https://facebook.com/armanitsolutions",
      guarantee: "No fix, no fee",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
