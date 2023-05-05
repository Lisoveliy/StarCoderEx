import fetch from "node-fetch";
import * as vscode from "vscode";
import updatetoken from "./updatetoken";

export default async (input: string): Promise<string | null> =>{
	
	console.log(`Input: ${input}`);
	let response = await fetch("https://api-inference.huggingface.co/models/bigcode/starcoder",
		{
			headers: { authorization: `Bearer ${vscode.workspace.getConfiguration("starcoderex").get("bearertoken")}`, "content-type": "application/json" },
			method: "POST",
			body: JSON.stringify({inputs: input}),
		});
	if(response.status !== 200){
		vscode.window.showErrorMessage("Bearer invalid!");
		vscode.workspace.getConfiguration("starcoderex").update("bearertoken", "", vscode.ConfigurationTarget.Global);
		updatetoken();
		return null;
	}
	let output = ((await response.json()) as ResponseModel[])[0].generated_text;
	console.log(`Output: ${output}`);
	return output;
};