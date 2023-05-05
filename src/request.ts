import fetch from "node-fetch";
export default async (input: string): Promise<string | null> =>{
	
	console.log(`Input: ${input}`);
	let response = await fetch(
		"https://api-inference.huggingface.co/models/bigcode/starcoder",
		{
			headers: { Authorization: "Bearer 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", "Content-type": "application/json" },
			method: "POST",
			body: JSON.stringify({ inputs: input}),
		});
	let output = ((await response.json()) as ResponseModel[])[0].generated_text;
	console.log(`Output: ${output}`);
	return output;
};