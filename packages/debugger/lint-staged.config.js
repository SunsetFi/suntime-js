export default {
  "*.ts": [
    "pnpm run --filter @suntime-js/debugger format",
    "pnpm run --filter @suntime-js/debugger lint",
    () => "pnpm run --filter @suntime-js/debugger check",
  ],
};
