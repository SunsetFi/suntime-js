// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v11.0.0 ID_Start characters are accepted as
  identifier start characters.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var ՠ;
var ֈ;
var ׯ;
var ᡸ;
var Ა;
var Ბ;
var Გ;
var Დ;
var Ე;
var Ვ;
var Ზ;
var Თ;
var Ი;
var Კ;
var Ლ;
var Მ;
var Ნ;
var Ო;
var Პ;
var Ჟ;
var Რ;
var Ს;
var Ტ;
var Უ;
var Ფ;
var Ქ;
var Ღ;
var Ყ;
var Შ;
var Ჩ;
var Ც;
var Ძ;
var Წ;
var Ჭ;
var Ხ;
var Ჯ;
var Ჰ;
var Ჱ;
var Ჲ;
var Ჳ;
var Ჴ;
var Ჵ;
var Ჶ;
var Ჷ;
var Ჸ;
var Ჹ;
var Ჺ;
var Ჽ;
var Ჾ;
var Ჿ;
var ㄯ;
var 鿫;
var 鿬;
var 鿭;
var 鿮;
var 鿯;
var ꞯ;
var Ꞹ;
var ꞹ;
var ꣾ;
var 𐨴;
var 𐨵;
var 𐴀;
var 𐴁;
var 𐴂;
var 𐴃;
var 𐴄;
var 𐴅;
var 𐴆;
var 𐴇;
var 𐴈;
var 𐴉;
var 𐴊;
var 𐴋;
var 𐴌;
var 𐴍;
var 𐴎;
var 𐴏;
var 𐴐;
var 𐴑;
var 𐴒;
var 𐴓;
var 𐴔;
var 𐴕;
var 𐴖;
var 𐴗;
var 𐴘;
var 𐴙;
var 𐴚;
var 𐴛;
var 𐴜;
var 𐴝;
var 𐴞;
var 𐴟;
var 𐴠;
var 𐴡;
var 𐴢;
var 𐴣;
var 𐼀;
var 𐼁;
var 𐼂;
var 𐼃;
var 𐼄;
var 𐼅;
var 𐼆;
var 𐼇;
var 𐼈;
var 𐼉;
var 𐼊;
var 𐼋;
var 𐼌;
var 𐼍;
var 𐼎;
var 𐼏;
var 𐼐;
var 𐼑;
var 𐼒;
var 𐼓;
var 𐼔;
var 𐼕;
var 𐼖;
var 𐼗;
var 𐼘;
var 𐼙;
var 𐼚;
var 𐼛;
var 𐼜;
var 𐼧;
var 𐼰;
var 𐼱;
var 𐼲;
var 𐼳;
var 𐼴;
var 𐼵;
var 𐼶;
var 𐼷;
var 𐼸;
var 𐼹;
var 𐼺;
var 𐼻;
var 𐼼;
var 𐼽;
var 𐼾;
var 𐼿;
var 𐽀;
var 𐽁;
var 𐽂;
var 𐽃;
var 𐽄;
var 𐽅;
var 𑅄;
var 𑜚;
var 𑠀;
var 𑠁;
var 𑠂;
var 𑠃;
var 𑠄;
var 𑠅;
var 𑠆;
var 𑠇;
var 𑠈;
var 𑠉;
var 𑠊;
var 𑠋;
var 𑠌;
var 𑠍;
var 𑠎;
var 𑠏;
var 𑠐;
var 𑠑;
var 𑠒;
var 𑠓;
var 𑠔;
var 𑠕;
var 𑠖;
var 𑠗;
var 𑠘;
var 𑠙;
var 𑠚;
var 𑠛;
var 𑠜;
var 𑠝;
var 𑠞;
var 𑠟;
var 𑠠;
var 𑠡;
var 𑠢;
var 𑠣;
var 𑠤;
var 𑠥;
var 𑠦;
var 𑠧;
var 𑠨;
var 𑠩;
var 𑠪;
var 𑠫;
var 𑪝;
var 𑵠;
var 𑵡;
var 𑵢;
var 𑵣;
var 𑵤;
var 𑵥;
var 𑵧;
var 𑵨;
var 𑵪;
var 𑵫;
var 𑵬;
var 𑵭;
var 𑵮;
var 𑵯;
var 𑵰;
var 𑵱;
var 𑵲;
var 𑵳;
var 𑵴;
var 𑵵;
var 𑵶;
var 𑵷;
var 𑵸;
var 𑵹;
var 𑵺;
var 𑵻;
var 𑵼;
var 𑵽;
var 𑵾;
var 𑵿;
var 𑶀;
var 𑶁;
var 𑶂;
var 𑶃;
var 𑶄;
var 𑶅;
var 𑶆;
var 𑶇;
var 𑶈;
var 𑶉;
var 𑶘;
var 𑻠;
var 𑻡;
var 𑻢;
var 𑻣;
var 𑻤;
var 𑻥;
var 𑻦;
var 𑻧;
var 𑻨;
var 𑻩;
var 𑻪;
var 𑻫;
var 𑻬;
var 𑻭;
var 𑻮;
var 𑻯;
var 𑻰;
var 𑻱;
var 𑻲;
var 𖹀;
var 𖹁;
var 𖹂;
var 𖹃;
var 𖹄;
var 𖹅;
var 𖹆;
var 𖹇;
var 𖹈;
var 𖹉;
var 𖹊;
var 𖹋;
var 𖹌;
var 𖹍;
var 𖹎;
var 𖹏;
var 𖹐;
var 𖹑;
var 𖹒;
var 𖹓;
var 𖹔;
var 𖹕;
var 𖹖;
var 𖹗;
var 𖹘;
var 𖹙;
var 𖹚;
var 𖹛;
var 𖹜;
var 𖹝;
var 𖹞;
var 𖹟;
var 𖹠;
var 𖹡;
var 𖹢;
var 𖹣;
var 𖹤;
var 𖹥;
var 𖹦;
var 𖹧;
var 𖹨;
var 𖹩;
var 𖹪;
var 𖹫;
var 𖹬;
var 𖹭;
var 𖹮;
var 𖹯;
var 𖹰;
var 𖹱;
var 𖹲;
var 𖹳;
var 𖹴;
var 𖹵;
var 𖹶;
var 𖹷;
var 𖹸;
var 𖹹;
var 𖹺;
var 𖹻;
var 𖹼;
var 𖹽;
var 𖹾;
var 𖹿;
var 𘟭;
var 𘟮;
var 𘟯;
var 𘟰;
var 𘟱;
