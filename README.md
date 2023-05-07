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

2. Press Ctrl+Alt+P for generating prompt OR type in shell (Ctrl+Shift+P) `StarCoderEx: Init prompt with selected code`

3. (If you use extension on first time) enter bearer token from https://huggingface.co/settings/tokens (page will be opened)

4. PROFIT!

5. ***If you want to continue request select all output including original prompt and repeat steps***
## Notes for prompt

Good prompt: 

                //POST Request on JSON to url variable
                //Params: url, object
                function /* Good variant use Language syntax */
               
Result: 

![image](https://user-images.githubusercontent.com/56991906/236544392-e170c33e-11c4-489a-bf76-004c95f57526.png)

Bad prompt:

                //Create JavaScript function for send POST request using fetch

Result:

![image](https://user-images.githubusercontent.com/56991906/236544491-c60991d1-3038-4177-b182-be2e8919eae8.png)

## Extension Settings

This extension contributes the following settings:

* `starcoderex.countofrequests`: Set requests count per command (Default: 4. Less count -> less answer, faster loading)
* `starcoderex.bearertoken`: Set bearer token for API https://huggingface.co

## Release Notes

### 1.0.22
Added cancel button
### 1.0.2
Fixed blinking code when output was adding to editor

Added message error when internet is disconnected

Added commands in command palette
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
