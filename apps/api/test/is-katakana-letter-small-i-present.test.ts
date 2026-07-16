import assert from "node:assert/strict";
import { test } from "node:test";

import { isKatakanaLetterSmallIPresent } from "../src/utils/is-katakana-letter-small-i-present.ts";

test("returns true when the Katakana letter small I character is present", () => {
  assert.equal(isKatakanaLetterSmallIPresent("キャラィ"), true);
  assert.equal(isKatakanaLetterSmallIPresent("ィ"), true);
});

test("returns false when the Katakana letter small I character is absent", () => {
  assert.equal(isKatakanaLetterSmallIPresent("キャライ"), false);
  assert.equal(isKatakanaLetterSmallIPresent(""), false);
});
