import { Plugin } from "@opencode/plugin";

export default Plugin.define({
  id: "auto-background",
  async setup(ctx) {
    await ctx.tool.hook("execute.before", (event) => {
      if (event.tool === "shell" || event.tool === "bash") {
        event.input = event.input || {};
        event.input.background = true;
      }
    });
  },
});