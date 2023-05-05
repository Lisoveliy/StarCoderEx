# StarCoderEx

StarCoderExtension for AI Code generation


Original AI: https://huggingface.co/bigcode/starcoder
## Features

AI prompt generating code for you from cursor selection.
![demo](https://user-images.githubusercontent.com/56991906/236499941-acd34143-beea-4e26-9a75-8c66950f7513.gif)
Usage:

***If you use extension on first time***
1. Register on https://huggingface.co

2. Generate bearer token from this page https://huggingface.co/settings/tokens

***After***

1. Select your prompt in code using cursor selection

2. Press Ctrl+Alt+P for generating prompt OR type in shell (Ctrl+Shift+P) `starcoderex.ScanSel`

3. (If you use extension on first time) enter bearer token from https://huggingface.co/settings/tokens

4. PROFIT!
## Notes for prompt

Good prompt: 
                //POST Request on JSON to url variable
                //Params: url, object
                function /* Good variant use Language syntax */
Bad prompt:
                //Create JavaScript function for send POST request using fetch

## Extension Settings

This extension contributes the following settings:

* `starcoderex.countofrequests`: Set requests count per command (Default: 4. Less count -> less answer, faster loading)
* `starcoderex.bearertoken`: Set bearer token for API https://huggingface.co

## Release Notes

### 1.0.0
Fixed sometimes removing code
### 0.9.54
Downgraded VS Code engine supported to 1.67.0
### 0.9.5
Minor Fixes

Added progress
### 0.9.42
Fix reset with bearer token

Fix reset with bearer token when selection is empty
### 0.9.3
Fix reset with bearer token

### 0.9.0

First beta release
