export default {
  "*.ts": [
    "pnpm run --filter @suntime-js/core format:staged",
    "pnpm run --filter @suntime-js/core lint",
    () => "pnpm run --filter @suntime-js/core check",
  ],
};
