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
  Set = IsObjectFlag + 11,
  Map = IsObjectFlag + 12,
  Generator = IsObjectFlag + 13,
  AsyncGenerator = IsObjectFlag + 14,
  Proxy = IsObjectFlag + 15,
  ProxyCallable = IsObjectFlag + IsCallableFlag + 16,
}

export { StaticJsTypeCode };
