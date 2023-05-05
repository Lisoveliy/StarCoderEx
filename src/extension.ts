
'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "starcoderex" is now active!');
	let disposable = vscode.commands.registerCommand('starcoderex.ScanDoc', () => {
		const editor = vscode.window.activeTextEditor;
		if(editor){
			let doc = editor.document;
			vscode.window.showInformationMessage(doc.getText());
		}else {vscode.window.showInformationMessage('No code in workspace');}
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
