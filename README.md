# opencode-auto-background

OpenCode plugin that forces every `shell`/`bash` tool call to run in the
background. This avoids the "press Ctrl+B to run in background" prompt and
keeps long-running commands from blocking the agent.

## Install

Copy `index.js` (and optionally `package.json`) into your OpenCode plugins
directory:

```sh
mkdir -p ~/.config/opencode/plugins
cp index.js ~/.config/opencode/plugins/auto-background.js
```

Then reload OpenCode:

```sh
opencode reload
```

Or add the plugin path to `plugins` in `opencode.json(c)`:

```jsonc
{
  "plugins": ["./path/to/opencode-auto-background"]
}
```

## Usage

Once loaded, all shell/bash commands issued by agents are automatically
started with `background: true`. OpenCode will notify the session when each
command finishes.

To disable, remove the plugin file and run `opencode reload`.

## License

MIT License (See [LICENSE](LICENSE) for more info).