enum StaticJsTypeCode {
  // Scalars
  ScalarMask = 32,
  Null = ScalarMask + 0,
  String = ScalarMask + 1,
  Boolean = ScalarMask + 2,
  Number = ScalarMask + 3,
  Symbol = ScalarMask + 4,
  Undefined = ScalarMask + 5,

  // Objects
  ObjectMask = 1024,
  Object = ObjectMask + 0,
  Array = ObjectMask + 1,
  Function = ObjectMask + 2,
  Set = ObjectMask + 3,
  Map = ObjectMask + 4,
  Promise = ObjectMask + 5,
  Iterator = ObjectMask + 6,
}

export default StaticJsTypeCode;
