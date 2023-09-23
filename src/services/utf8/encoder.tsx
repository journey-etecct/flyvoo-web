export default function utf8Encode(unicodeString: string) {
  if (typeof unicodeString != "string")
    throw new TypeError("parameter ‘unicodeString’ is not a string");

  const utf8String = unicodeString
    .replace(/[\u0080-\u07ff]/g, (c) => {
      let cc = c.charCodeAt(0);
      return String.fromCharCode(0xc0 | (cc >> 6), 0x80 | (cc & 0x3f));
    })
    .replace(/[\u0800-\uffff]/g, (c) => {
      let cc = c.charCodeAt(0);
      return String.fromCharCode(
        0xe0 | (cc >> 12),
        0x80 | ((cc >> 6) & 0x3f),
        0x80 | (cc & 0x3f)
      );
    });
  return utf8String;
}
