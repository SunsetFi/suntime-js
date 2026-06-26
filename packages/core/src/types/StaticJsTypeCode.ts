enum StaticJsTypeCode {
  // Flags
  IsScalarFlag = 64,
  IsObjectFlag = 128,
  IsCallableFlag = 256,

  // Scalars
  Null = IsScalarFlag + 0,
  String = IsScalarFlag + 1,
  Boolean = IsScalarFlag + 2,
  Number = IsScalarFlag + 3,
  Symbol = IsScalarFlag + 4,
  Undefined = IsScalarFlag + 5,

  // Objects
  PlainObject = IsObjectFlag + 6,
  Array = IsObjectFlag + 7,
  Function = IsObjectFlag + IsCallableFlag + 8,
  Error = IsObjectFlag + 9,
  Promise = IsObjectFlag + 10,
  Iterator = IsObjectFlag + 11,
  AsyncIterator = IsObjectFlag + 12,
  Set = IsObjectFlag + 13,
  Map = IsObjectFlag + 14,
  Generator = IsObjectFlag + 15,
  AsyncGenerator = IsObjectFlag + 16,
  Proxy = IsObjectFlag + 17,
  ProxyCallable = IsObjectFlag + IsCallableFlag + 18,
}

export { StaticJsTypeCode };
