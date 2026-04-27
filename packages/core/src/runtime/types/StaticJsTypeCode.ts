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
  Promise = IsObjectFlag + 9,
  Iterator = IsObjectFlag + 10,
  AsyncIterator = IsObjectFlag + 11,
  Set = IsObjectFlag + 12,
  Map = IsObjectFlag + 13,
  Generator = IsObjectFlag + 14,
  AsyncGenerator = IsObjectFlag + 15,
  Proxy = IsObjectFlag + 16,
  ProxyCallable = IsObjectFlag + IsCallableFlag + 17,
}

export { StaticJsTypeCode };
