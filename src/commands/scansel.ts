import * as vscode from "vscode";
import request from "../request";
import { ViewColumn } from "vscode";
import { CommentMode } from "vscode";

export default async function (){
    const editor = vscode.window.activeTextEditor;
    if(!editor){
        vscode.window.showErrorMessage("Editor doesn't opened");
        return;
    }
    let selection = new vscode.Range(editor.selection.start, editor.selection.end);
    let text = editor.document.getText(selection);
    if(text === ""){
        vscode.window.showWarningMessage("Empty selection");
        return;
    }
    console.log("Prompt: ", text);
    let result: string | null;
    let requests: number = vscode.workspace.getConfiguration("starcoderex").get("countofrequests")!;
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        cancellable: false,
        title: 'Prompt executing...'
    }, async (progress) => {
        for(let i = 0; i < requests; i++){
            progress.report({  increment: ((1/requests)*100) - 1 });
            result = await request(text);
            if(!result){
                return;
            }
            text = result;
        }
        editor.edit((edBuiler) => {
            edBuiler.delete(selection);
        }).then(() => {
        progress.report({ increment: 100 });
        //Docs window <START
        // vscode.comments.createCommentController("123","123")
        // .createCommentThread(
        //     vscode.window.activeTextEditor?.document.uri!, 
        //     new vscode.Range(editor.selection.active, editor.selection.end),
        //     List));
        //vscode.window.createQuickPick();
        //vscode.window.createWebviewPanel("text","hello world", ViewColumn.Active, undefined);
        //Docs window <END
        editor.insertSnippet(new vscode.SnippetString(result!), editor.selection.start);
        vscode.window.showInformationMessage("Done!");
        });
    });
}