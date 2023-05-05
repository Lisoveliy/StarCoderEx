import * as vscode from "vscode";
import request from "../request";

export default async function () {
    const editor = vscode.window.activeTextEditor;
    let currentline: string | undefined;
    let prom = new Promise(() => {
            setInterval(async ()=>{
                currentline = editor?.document.getText(new vscode.Range(new vscode.Position(editor.selection.start.line, 0), editor.selection.active.translate(1,0)));
                if(currentline?.includes("@Prompt")){
                    await realtimeCheck(currentline);
                }
            }, 1000);
        });
}
async function realtimeCheck(prompt: string) {
    let result = await request(prompt.replace("@Prompt", ""));
    vscode.window.activeTextEditor?.edit((edBuiler) => {
        
    });
}