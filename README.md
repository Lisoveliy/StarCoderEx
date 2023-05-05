# StarCoderEx

StarCoderExtension for AI Code generation


Original AI https://huggingface.co/bigcode/starcoder
## Features

AI Prompt generating code for you from selection.
![demo](https://user-images.githubusercontent.com/56991906/236499941-acd34143-beea-4e26-9a75-8c66950f7513.gif)
Usage:

***If you use extension on first time***
1. Register on https://huggingface.co

2. Generate bearer token from that page https://huggingface.co/settings/tokens


1. Select your prompt in code

2. Press Ctrl+Alt+P for generating prompt or type in shell (Ctrl+Shift+P) `starcoderex.ScanSel`

3. (If you use extension on first time) enter bearer token from https://huggingface.co/settings/tokens

4. PROFIT!

## Extension Settings

This extension contributes the following settings:

* `starcoderex.countofrequests`: Set requests count per command (Default: 3. Less count -> less answer, faster loading)
* `starcoderex.bearertoken`: Set bearer token for API https://huggingface.co

## Release Notes

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
