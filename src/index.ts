export {};

// Example 1 - Convert an Enum to a Union Type in TypeScript

enum StringEnum {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

// 👇️ type ValuesUnion = "S" | "M" | "L"
type ValuesUnion = `${StringEnum}`;

// 👇️ type KeysUnion = "Small" | "Medium" | "Large"
type KeysUnion = keyof typeof StringEnum;

// ---------------------------------------------------

// // EXAMPLE 2 - template literal types

// type T = 'read';
// type D = 'draft';

// // 👇️ type AllIDs = "read_id" | "draft_id"
// type AllIDs = `${T | D}_id`;

// ---------------------------------------------------

// // EXAMPLE 3 - using keyof typeof

// enum StringEnum {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }

// // 👇️ type KeysUnion = "Small" | "Medium" | "Large"
// type KeysUnion = keyof typeof StringEnum;
