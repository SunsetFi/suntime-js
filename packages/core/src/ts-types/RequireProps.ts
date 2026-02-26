export type RequireProps<TO, TProps extends keyof TO> = Omit<TO, TProps> &
  Required<Pick<TO, TProps>>;
