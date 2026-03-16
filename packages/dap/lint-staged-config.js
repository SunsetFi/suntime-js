export default {
  "*.ts": [
    "pnpm run --filter @suntie-js/dap format",
    "pnpm run --filter @suntime-js/dap lint",
    () => "pnpm run --filter @suntime-js/dap check",
  ],
};
