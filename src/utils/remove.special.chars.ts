import { REMOVE_ALL_SPECIAL_CHARS_REGEX } from "../constants/regex.constants";

export const removeSpecialChars = (v: string) => v?.replace(REMOVE_ALL_SPECIAL_CHARS_REGEX, '');