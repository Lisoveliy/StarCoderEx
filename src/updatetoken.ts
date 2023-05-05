import * as vscode from 'vscode';

export default function(){
    let options: vscode.InputBoxOptions = {
        prompt: "Insert bearer token from https://huggingface.co"
    };
    vscode.window.showInputBox(options).then(value => {
        vscode.workspace.getConfiguration("starcoderex").update("bearertoken", value, vscode.ConfigurationTarget.Global);
    }); 
    return;
}