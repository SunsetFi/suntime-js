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
  IsObjectLikeFlag = 128,
  Object = IsObjectLikeFlag + 0,
  Array = IsObjectLikeFlag + 1,
  Function = IsObjectLikeFlag + 2,
  Promise = IsObjectLikeFlag + 3,
  Iterator = IsObjectLikeFlag + 4,
  Set = IsObjectLikeFlag + 5,
  Map = IsObjectLikeFlag + 6,
}

export default StaticJsTypeCode;
