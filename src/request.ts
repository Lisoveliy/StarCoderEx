import fetch, { FetchError, Response } from "node-fetch";
import * as vscode from "vscode";
import updatetoken from "./updatetoken";

export default async (input: string): Promise<string | null> =>{
	console.log(`Input: ${input}`);
	let promise: Promise<Response>;
	try {
		const config = vscode.workspace.getConfiguration("starcoderex");
		const bearerToken = config.get("bearertoken");
		const model = config.get("model");
		const isStream = config.get("stream") === "true";
		const isLocal = config.get("is_local") === "true";

		if (isLocal) {
			promise = fetch(vscode.workspace.getConfiguration("starcoderex").get("apiurl") as string,
				{
					// eslint-disable-next-line @typescript-eslint/naming-convention
					headers: { "content-type": "application/json" },
					method: "POST",
					body: JSON.stringify({
						model: model,
						prompt: input,
						stream: isStream
					}),
				});
		} else {
			promise = fetch(vscode.workspace.getConfiguration("starcoderex").get("apiurl") as string,
				{
					// eslint-disable-next-line @typescript-eslint/naming-convention
					headers: { authorization: `Bearer ${bearerToken}`, "content-type": "application/json" },
					method: "POST",
					body: JSON.stringify({ inputs: input }),
				});
		}

		let response = await promise;
		if(response.status !== 200){
			if(response.status === 400){
			vscode.window.showErrorMessage("Bearer invalid!");
			vscode.workspace.getConfiguration("starcoderex").update("bearertoken", "", vscode.ConfigurationTarget.Global);
			updatetoken();
			return null;
			}else {
				vscode.window.showWarningMessage("Service turned off right now. Try later!");
			}
		}

		let output: string;
		if (isLocal) {
			output = ((await response.json()) as LocalResponseModel).response;
		}
		else
		{
			output = ((await response.json()) as ResponseModel[])[0].generated_text;
		}

		console.log(`Output: ${output.length}`);
		return output;
	}catch(exception: any)
	{
		if(exception instanceof FetchError)
			{
				vscode.window.showErrorMessage(exception.message);
			}
		return null;
	}
};