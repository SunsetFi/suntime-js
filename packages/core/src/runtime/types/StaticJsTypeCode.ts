enum StaticJsTypeCode {
  // Scalars
  IsScalarFlag = 64,
  Null = IsScalarFlag + 0,
  String = IsScalarFlag + 1,
  Boolean = IsScalarFlag + 2,
  Number = IsScalarFlag + 3,
  Symbol = IsScalarFlag + 4,
  Undefined = IsScalarFlag + 5,

  // Objects
  IsObjectFlag = 128,
  IsCallableFlag = 256,
  Object = IsObjectFlag + 0,
  Array = IsObjectFlag + 1,
  Function = IsObjectFlag + IsCallableFlag + 2,
  Promise = IsObjectFlag + 3,
  Iterator = IsObjectFlag + 4,
  Set = IsObjectFlag + 5,
  Map = IsObjectFlag + 6,
  Generator = IsObjectFlag + 7,
  AsyncGenerator = IsObjectFlag + 8,
  Proxy = IsObjectFlag + 9,
  ProxyCallable = IsObjectFlag + IsCallableFlag + 10,
}

export { StaticJsTypeCode };
