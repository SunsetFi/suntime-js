import type { Node } from "@babel/types";

import type { StaticJsLoadedModuleRequestRecord } from "#modules/implementation/StaticJsLoadedModuleRequestRecord.js";
import type { StaticJsScriptRecord } from "#scripts/StaticJsScriptRecord.js";

import {
  StaticJsSourceRecordImpl,
  type StaticJsSourceRecordCreateParams,
} from "#sources/implementation/StaticJsSourceRecordImpl.js";

export interface StaticJsScriptRecordCreateParams extends StaticJsSourceRecordCreateParams {
  sourceName: string;
  ecmaScriptCode: Node;
}

export class StaticJsScriptRecordImpl
  extends StaticJsSourceRecordImpl
  implements StaticJsScriptRecord
{
  private readonly _sourceName: string;
  private readonly _ecmaScriptCode: Node;
  private readonly _loadedModules: StaticJsLoadedModuleRequestRecord[] = [];

  constructor({ sourceName, ecmaScriptCode, ...rest }: StaticJsScriptRecordCreateParams) {
    super(rest);
    this._sourceName = sourceName;
    this._ecmaScriptCode = ecmaScriptCode;
  }

  get sourceName() {
    return this._sourceName;
  }

  get ecmaScriptCode() {
    return this._ecmaScriptCode;
  }

  get loadedModules() {
    return this._loadedModules;
  }

  _pushLoadedModule(module: StaticJsLoadedModuleRequestRecord): void {
    this._loadedModules.push(module);
  }
}
