export default {
  "*.ts": [
    "pnpm run --filter static-js format",
    "pnpm run --filter static-js lint",
    () => "pnpm run --filter static-js check",
  ],
};
