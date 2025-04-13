// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: prod-PrivateIdentifier
description: |
  Test that Unicode v6.1.0 ID_Continue characters are accepted as
  identifier part characters in private class fields.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
features: [class, class-fields-private]
---*/

class _ {
  #_ࣰࣱࣲࣦࣩ࣭࣮࣯ࣶࣹࣺࣤࣥࣧࣨ࣪࣫࣬ࣳࣴࣵࣷࣸࣻࣼࣽࣾ឴឵᮫ᮬᮭᳳ᳴ꙴꙵꙶꙷꙸꙹꙺꙻꚟꫫꫬꫭꫮꫯꫵ꫶𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹𑄀𑄁𑄂𑄧𑄨𑄩𑄪𑄫𑄬𑄭𑄮𑄯𑄰𑄱𑄲𑄳𑄴𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿𑆀𑆁𑆂𑆳𑆴𑆵𑆶𑆷𑆸𑆹𑆺𑆻𑆼𑆽𑆾𑆿𑇀𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙𑚫𑚬𑚭𑚮𑚯𑚰𑚱𑚲𑚳𑚴𑚵𑚷𑚶𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉𖽑𖽒𖽓𖽔𖽕𖽖𖽗𖽘𖽙𖽚𖽛𖽜𖽝𖽞𖽟𖽠𖽡𖽢𖽣𖽤𖽥𖽦𖽧𖽨𖽩𖽪𖽫𖽬𖽭𖽮𖽯𖽰𖽱𖽲𖽳𖽴𖽵𖽶𖽷𖽸𖽹𖽺𖽻𖽼𖽽𖽾𖾏𖾐𖾑𖾒;
};
