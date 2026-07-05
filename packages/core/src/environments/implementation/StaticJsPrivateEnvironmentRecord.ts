import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";
import { staticJsPrivateName, type StaticJsPrivateName } from "#types/StaticJsPrivateName.js";

export interface StaticJsPrivateEnvironmentRecordCreateParams {
  realm: StaticJsRealm;
  outerPrivateEnv: StaticJsPrivateEnvironmentRecord | null;
}

export class StaticJsPrivateEnvironmentRecord implements StaticJsAllocation {
  private readonly _names: StaticJsPrivateName[] = [];

  static create(
    params: StaticJsPrivateEnvironmentRecordCreateParams,
  ): StaticJsPrivateEnvironmentRecord {
    return allocated(new StaticJsPrivateEnvironmentRecord(params.realm, params.outerPrivateEnv));
  }

  private constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _outerPrivateEnv: StaticJsPrivateEnvironmentRecord | null,
  ) {}

  get names(): readonly StaticJsPrivateName[] {
    return this._names;
  }

  hasPrivateName(description: string): boolean {
    return this._names.some((name) => name.description === description);
  }

  addPrivateName(description: string): StaticJsPrivateName {
    const privateName = staticJsPrivateName(description);
    this._realm.memory.allocate(StaticJsMemoryAllocationTag.RawString, description);
    this._names.push(privateName);
    return privateName;
  }

  resolvePrivateIdentifier(identifier: string): StaticJsPrivateName {
    const names = this._names;
    for (const pn of names) {
      if (pn.description === identifier) {
        return pn;
      }
    }

    if (!this._outerPrivateEnv) {
      throw new StaticJsEngineError(
        "Assert failure: Ran out of private environments looking for private identifier",
      );
    }
    return this._outerPrivateEnv.resolvePrivateIdentifier(identifier);
  }

  mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);

    if (this._outerPrivateEnv) {
      this._outerPrivateEnv.mark(marks);
    }
  }

  allocateSelf(
    allocate: StaticJsAllocator = this._realm.memory.allocate.bind(this._realm.memory),
  ): void {
    for (const name of this._names) {
      allocate(StaticJsMemoryAllocationTag.RawString, name.description);
    }
  }
}
