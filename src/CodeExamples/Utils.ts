// Typescript intro
// What is Typescript
// WHy we should use it
// TS finds 15% of JS bugs
// Maintainability
// Refactor
// Simple function example
// Typescript usage - you can use without using any of the benefits
// Type safe API usage // changed data object to content
// Type safe component usage
// Type safe redux // talk about type safe actions
// Working with third party libraries
//
// Other
// swagger
// autocomplete themed styled components
// storybook
///
// Maintained and future plans

// Cons
// some error messages can be harder to decrypt
// some advanced concepts can be mind bending, and probably doesn't add that much benefit

//
// Union types and simple type guards
export function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  // padding is string here
  return padding + value;
}

//
// User defined type guards
interface Cat {
  kind: "cat";
  numberOfLives: number;
}

interface Dog {
  kind: "dog";
  isAGoodBoy: boolean; // example usage of Rename symbol
}

function isCat(animal: Cat | Dog): animal is Cat {
  return animal.kind === "cat";
}

function animalLogger(animal: Cat | Dog) {
  if (isCat(animal)) {
    // cat here
    console.log(animal.numberOfLives);
  } else {
    // dog here
    console.log(animal.isAGoodBoy);
  }
}

//
// Strict null checks
// interface Member {
//   name: string;
//   age?: number;
// }

// function setMember(member: Member) {
//   const stringifyAge = member.age?.toString(); // Cannot read property 'toString' of undefined
// }

//
// Discriminated Unions
// type NetworkState = {
//   status: "loading" | "success" | "failed";
//   code?: number; // available only when request has failed
//   response?: {
//     title: string;
//     duration: number;
//     summary: string;
//   }; // available only when request successful
// };

// function logger(state: NetworkState) {
//   switch (state.status) {
//     case "loading":
//       return "Downloading...";
//     case "failed":
//       // The type must be NetworkFailedState here,
//       // so accessing the 'code' field is safe
//       return "Error  downloading " + state.code;
//     case "success":
//       return "Downloaded " + state.response.title;
//   }
// }
