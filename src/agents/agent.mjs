import OpenAI from "openai";
import "dotenv/config";
import { tools, tool_handlers } from "./tools/index.mjs";


const client = new OpenAI({apiKey: process.env.OPENAI_API_KEY });

const response = await client.responses.create({
    model: "gpt-5",
    tools: tools,
    input: "sacame un turno para mañana. Mi dni es 46871500",
})

console.log(response.output);

for(const item of response.output) {
    if(item.type == "function_call"){
        const handler = tool_handlers[item.name];
        if(!handler) throw new Error(`No handler for ${item.name}`);

        const args = JSON.parse(item.arguments || "{}");
        const result = await handler(args.dni, args.fecha);
        const toolOutput = result === undefined ? "ok" : JSON.stringify(result);

        const followup = await client.responses.create({
            model: "gpt-5",
            previous_response_id: response.id,
            input: [{
                type: "function_call_output",
                call_id: item.call_id,
                output: toolOutput,
            }],
        });
        console.log(followup.output)
        console.log(followup.output_text);
    }
}

console.log(response.output_text);
