## Running the example

- Open this example in VS Code 1.47+
- `npm install`
- `npm run watch` or `npm run compile`
- `F5` to start debugging

Scenario:
1. Run the `Title Bug: Start title bug` to create the webview.
2. Run the `Title Bug: Change title of webview tab`.

In VSCode - counter will keep old value.
In VSCode Insiders - counter will be reset, because iframe is reloaded after title change in - (Change title)[https://github.com/815are/title-bug/blob/main/src/extension.ts#L21]
