import { defineMcp } from "@lovable.dev/mcp-js";
import getBusinessInfo from "./tools/get-business-info";
import listServices from "./tools/list-services";
import submitQuoteRequest from "./tools/submit-quote-request";

export default defineMcp({
  name: "arman-it-mcp",
  title: "Arman IT",
  version: "0.1.0",
  instructions:
    "Tools for Arman IT Solutions, a mobile IT support business in Perth, WA. Use `get_business_info` for contact details, `list_services` for what Arman IT offers, and `submit_quote_request` to send a quote request on behalf of a customer (with their explicit consent).",
  tools: [getBusinessInfo, listServices, submitQuoteRequest],
});
