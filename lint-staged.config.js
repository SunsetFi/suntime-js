export default {
  "*.ts": [
    "prettier --write",
    "eslint",
    () => "tsc -p tsconfig.lib.json --noEmit",
  ],
};
