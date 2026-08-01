import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsSourceRecord } from "#sources/StaticJsSourceRecord.js";

export interface StaticJsSourceRecordCreateParams {
  realm: StaticJsRealm;
  ecmaScriptSource: string;
}

export abstract class StaticJsSourceRecordImpl implements StaticJsSourceRecord {
  private readonly _realm: StaticJsRealm;

  private readonly _ecmaScriptSource: string;

  constructor({ realm, ecmaScriptSource }: StaticJsSourceRecordCreateParams) {
    this._realm = realm;
    this._ecmaScriptSource = ecmaScriptSource;
  }

  get realm(): StaticJsRealm {
    return this._realm;
  }

  get ecmaScriptSource(): string {
    return this._ecmaScriptSource;
  }
}
