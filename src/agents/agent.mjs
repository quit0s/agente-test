import OpenAI from "openai";
import "dotenv/config";
import { tools_descriptions, tools_handlers } from "./tools/index.mjs";


const client = new OpenAI({apiKey: process.env.OPENAI_API_KEY });


try {

    const response = await client.responses.create({
        model: "gpt-5",
        tools: tools_descriptions,
        input: "Dame la info sobre le medico con id 9008",
    })

    const function_call_output = [];

    for(let i = 0; i < response.output.length; i++){
        const item = response.output[i];

        if(item.type == "function_call"){
            const handler = tools_handlers[item.name];

            if(!handler){
                console.error(`Error: no handler for ${item.name}`);
                function_call_output.push({
                        type:"function_call_output",
                        call_id:item.call_id,
                        output: JSON.stringify({success:false, error: `Error: no handler for ${item.name}` }),                        
                    });
            }else{
                const args = JSON.parse(item.arguments||"{}");
                const handler_output = await handler(args);

                if(!handler_output){
                    console.error(`Error: handler returned nothing ${item.name}.`);
                    function_call_output.push({
                        type:"function_call_output",
                        call_id:item.call_id,
                        output: JSON.stringify({
                            success:false,
                            error: `Error: handler returned nothing ${item.name}`,
                         }),                        
                    });
                }else if(handler_output.success == false){
                    console.error(`Error: handler returned error ${item.name}.`,handler_output.error);
                    function_call_output.push({
                        type:"function_call_output",
                        call_id:item.call_id,
                        output: JSON.stringify(handler_output),                        
                    });
                }else{
                    function_call_output.push({
                        type:"function_call_output",
                        call_id:item.call_id,
                        output: JSON.stringify(handler_output)
                    });
                };
            };
        };
    };

    if(function_call_output.length > 0){
    const followup = await client.responses.create({
            model: "gpt-5",
            previous_response_id: response.id,
            input: function_call_output,
        });
        console.log(followup.output_text);

    }else{
        console.log(response.output_text);
    }

} catch (error) {
    console.error("Agent error:", error.message);
}




