
'use strict';
import * as vscode from 'vscode';
import request, * as req from "./request.js";

export function activate(context: vscode.ExtensionContext) {
	let globalLine = 0;
	let globalLines = 0;
	var globalRet = "";
	console.log('Congratulations, your extension "starcoderex" is now active!');
	let scandoc = vscode.commands.registerCommand('starcoderex.ScanDoc', async () => {
		const editor = vscode.window.activeTextEditor;
		if(editor){
			let doc = editor.document;
			let line = doc.lineAt(editor.selection.active.line);
			if(!line)
			{
				vscode.window.showInformationMessage("Line empty");
			}else{
				vscode.window.showInformationMessage(`input: ${line.text}`);
				let ret = await request(line.text);
				let snip = new vscode.SnippetString(ret!);
				editor.edit((edit) => {
					edit.delete(new vscode.Selection(editor.selection.anchor, editor.selection.anchor.translate(1,0)));
					setTimeout(() => editor.insertSnippet(snip, editor.selection.anchor), 10);
				});
				globalRet = ret!;
				globalLine = line.lineNumber;
			}
			}else {vscode.window.showInformationMessage('No code in workspace');}
	});
	context.subscriptions.push(scandoc);
	let contdoc = vscode.commands.registerCommand('starcoderex.ContinueDoc', async () => {
		const editor = vscode.window.activeTextEditor;
		if(editor){
			let doc = editor.document;
			let line = globalRet;
			if(!line)
			{
				vscode.window.showInformationMessage("Line empty");
			}else{
				vscode.window.showInformationMessage(`input: ${line}`);
				let ret = await request(line);
				editor.edit((edit) => {
					edit.delete(new vscode.Selection(editor.selection.active, new vscode.Position(globalLine, 0)));
					setTimeout(() => editor.insertSnippet(new vscode.SnippetString(ret!), editor.selection.anchor), 10);
				});
				globalRet = ret!;
			}
			}else {vscode.window.showInformationMessage('No code in workspace');}
	});
	context.subscriptions.push(contdoc);
}

// This method is called when your extension is deactivated
export function deactivate() {}
