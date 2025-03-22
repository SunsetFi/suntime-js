import { StaticJsValue } from "../../primitives/index.js";

export default interface StaticJsEnvironmentBinding {
  readonly name: string;
  readonly isMutable: boolean;
  readonly isInitialized: boolean;
  readonly isDeletable: boolean;
  initialize(value: StaticJsValue): void;
  value: StaticJsValue;
  delete(): void;
}
