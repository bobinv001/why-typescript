import React from "react";
import {
  FullScreen,
  Progress,
  Box,
  FlexBox,
  Deck,
  Slide as Slidee,
  Text,
  Heading,
  CodePane,
  UnorderedList,
  ListItem,
  Image,
  Notes,
  Link,
  Appear,
  OrderedList,
  CodeSpan,
} from "spectacle";
import "./App.css";
const theme = {
  colors: {
    primary: "#3077c6",
    secondary: "white",
  },
  fonts: {
    header: '"Nanum Gothic", Helvetica, Arial, sans-serif',
    text: '"Nanum Gothic", Helvetica, Arial, sans-serif',
  },
};

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

const Slide = (props: any) => (
  <Slidee backgroundColor="secondary">{props.children}</Slidee>
);

const BodyText = ({ children, ...rest }: any) => (
  <Text fontSize="1.8rem" color="black" {...rest}>
    {children}
  </Text>
);

// function greeter(person: Person) {
//   return "Hello " + person.firstName + " " + person.lastName;
// }

// greeter({ firstName: "" });

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color={"primary"} size={10} />
    </Box>
    <Box padding="1em">
      <Progress color={"primary"} size={10} />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide backgroundColor="secondary">
        <FlexBox height="100%" flexDirection="column">
          <Heading color="primary" fontSize="h1">
            TypeScript
          </Heading>
          <Text color="black" paddingTop="10" fontSize="2.2em">
            is JavaScript with syntax for types.
          </Text>
          <Notes>
            I was going to say, TypeScript JS on steroids, or javascript file
            with a .ts extension
          </Notes>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="secondary">
        <Image src="https://img.ifunny.co/images/c83197b2c08dd00874daac4fb3b536f998037ee264254b91298558ff652687dc_1.webp" />
      </Slide>
      <Slide backgroundColor="secondary">
        <CodePane language="typescript" theme="prism" highlightRanges={[]}>{`
        function greeter(name) {
          return 'HELLO ' + name.toUpperCase();
        }        
        `}</CodePane>
        <Appear>
          <CodePane language="typescript" theme="prism" highlightRanges={[]}>
            {`
              greeter('Jon Estes') 
            `}
          </CodePane>
        </Appear>
        <Appear>
          <CodePane language="typescript" theme="prism" highlightRanges={[]}>
            {`
              greeter(['Jon', 'Estes'])  
              // Runtime error
              
            `}
          </CodePane>
        </Appear>
        <Notes>
          So here I have a simple function which takes a name parameter.
          :::pause::: It's easy enough to understand what the intended use of
          this function is. name parameter is supposed to be a string, so we
          should only pass string. :::pause:::<strong>But</strong> what if we
          pass an array :::pause::: JS is not going to complain at compile time.
          Once it hits PROD, We will get a nice bug passed to us by a QA saying
          that the app is broken. We want to avoid silly bugs like this
        </Notes>
      </Slide>
      <Slide backgroundColor="secondary">
        <CodePane language="typescript" theme="prism" highlightRanges={[]}>{`
        function greeter(name: string) {
          return 'Hello ' + name;
        }
        greeter(['Jon', 'Estes'])
        ^^^^^^^^^^^^^^^^^^^^^^^^^
       // Argument of type 'string[]' is not assignable to parameter of type 'string'. 
        `}</CodePane>
        <Notes>
          So with TS you will annotate your argument, and TS will yell at you if
          you don't pass the right type of argument
        </Notes>
      </Slide>
      <Slide backgroundColor="secondary">
        <CodePane language="typescript" theme="prism" highlightRanges={[]}>{`

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

function greeter(person: Person) {
  return 'Hello '  + person.firstName + ' ' + person.lastName;
}

        `}</CodePane>
        <Appear>
          <CodePane language="typescript" theme="prism" highlightRanges={[]}>{`

  greeter({ firstName: 'Jon', }) 
  // Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'Person'.
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        `}</CodePane>
        </Appear>
        <Appear>
          <CodePane language="typescript" theme="prism" highlightRanges={[]}>{`

greeter({ firstName: 'Jon',  lastName: 'Estes', age: 'unknown'}) 
// Type 'string' is not assignable to type 'number | undefined'.
                                                ^^^^^^^^^^^^^
        `}</CodePane>
        </Appear>
        <Appear>
          <CodePane language="typescript" theme="prism" highlightRanges={[2]}>{`

function greeter(person: Person) {
  const { postalAddress } = person // @Luke
  // Property 'postalAddress' does not exist on type 'Person'.
}

        `}</CodePane>
        </Appear>
        <Notes>
          Here we have an example usage of an interface, we use it define and
          name a object type. <br />
          greeter function is expecting an object in shape of Person interface
          type. age is an optional property but others are required
          <br />
          <br />
          &gt;&gt; If we don't pass lastName, we are breaking the contract of
          the function input and TS will notify you <br />
          <br />
          &gt;&gt; If we pass a wrong type, we are breaking the contract of the
          function input and TS will notify you <br />
          <br />
          &gt;&gt; If we try to change the function and try to pick a property
          which doesn't exist, TS will notify you
        </Notes>
      </Slide>
      <Slide backgroundColor="secondary" textColor="white">
        <Text>What is TypeScript</Text>
        <Text fontSize="1.8rem" color="black">
          TypeScript is a superset of the JavaScript language and is developed
          by Microsoft. The goal of TypeScript is to help catch mistakes early
          through a type system and to make JavaScript development more
          efficient.
          <p>
            Essentially TypeScript achieves its goals in three ways:
            <UnorderedList fontSize="1.8rem" color="black">
              <Appear>
                <ListItem>Advanced type system</ListItem>
              </Appear>
              <Appear>
                <ListItem>Support for modern JavaScript features</ListItem>
              </Appear>
              <Appear>
                <ListItem>Amazing dev tools and IDE integration </ListItem>
              </Appear>
            </UnorderedList>
          </p>
        </Text>

        <Notes>
          <p>
            Advanced type system - The type support is not part of the
            ECMAScript standard and will likely never be due to the interpreted
            nature instead of compiled nature of JavaScript. The type system of
            TypeScript is incredibly rich and includes: interfaces, enums,
            hybrid types, generics, union/intersection types, access modifiers
            and much more.
          </p>
          <p>
            TypeScript allows for the use of many of the latest ECMAScript
            features and translates them to older ECMAScript targets of your
            choosing, and remaining backwards compatible with older browsers
          </p>
          <p>
            Compiler can run as a background process to support both incremental
            compilation and IDE integration such that you can more easily
            navigate, identify problems, inspect possibilities and refactor your
            codebase. Intellisense autocompletion is an amazing and valuable
            tool
          </p>
        </Notes>
      </Slide>
      <Slide backgroundColor="secondary">
        <Text>What makes TypeScript a good fit for large projects</Text>
        <UnorderedList fontSize="1.8rem" color="black">
          <Appear>
            <ListItem>
              ☔️ Avoid common pitfalls and find bugs earlier - Researchers
              found that TypeScript detects 15% of common bugs at the compile
              stage.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              🤩 Self documenting: Easier to maintain and review
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              🤖 TypeScript will keep track of the context for you
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>⚡️ Fast refactoring</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              🤝 Encourages API-driven development and seemless third party
              library intergration
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>🥷 Completely optional static typing</ListItem>
          </Appear>
          <Appear>
            <ListItem>📈 Increased team performance</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              💙 Loved by developers: According to{" "}
              <Link
                color="black"
                href="https://insights.stackoverflow.com/survey/2021#technology-most-loved-dreaded-and-wanted"
                fontSize="1.8rem"
              >
                StackOverflow’s 2021 Developer Survey
              </Link>
              , TypeScript is currently the 5th most popular tehcnologies and
              third most loved programming language
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              🦾 Trusted by the biggest players in the industry
            </ListItem>
          </Appear>
        </UnorderedList>
        <Notes>
          <p>
            <strong>Avoid common pitfalls and find bugs earlier:</strong>
            Far from a 100 percent result, this amount is still significant
            enough to save developers time and let them focus on correcting
            mistakes in the logic — rather than catching common bugs. Pushing
            the code through a compiler also decreases the volume of quality
            assurance and testing activities.
            <br />
            JavaScript is a dynamically typed language which means that the
            types are checked, and datatype errors are spotted only at the
            runtime :::pause::: Runtime type checking is not, per se, a
            disadvantage: It offers more flexibility, enables components to
            adapt and change on the fly. <strong>But</strong> the larger the
            project and the team, the more undefined variables are added and the
            more potential mistakes the code amasses. At large scale projects
            you want the predictability and security of types. :::pause:::
            <br />
            With TypeScript, I can rely on the type definition to tell me
            everything I need to know. Once declared, a variable doesn’t change
            its type and can take only certain values. The compiler alerts
            developers to type-related mistakes, so there is no opportunity for
            simple little bugs to reach the production environment.
          </p>
          <p>
            <strong>Self document:</strong>DO you ever look at a piece of
            function or variable and think to yourself what is this supposed to
            do. :::pause::: With TS I can just hover the variable and can
            understand what exactly it is. :::pause::: In the input component in
            our component library there is a prop called `errors` ....... <br />
            I can tell you from personal experience that whenever I write
            something new in JavaScript, I usually need to run the code first in
            order to see exactly what a particular function does and returns. I
            am able to understand what the code is intended to do. I don't have
            to look through mocks or tests to understand the structure of a
            payload. Sorry Matt, mocks are the best. I love Mocks
          </p>
          <p>
            <strong>Fast Refactoring: </strong> or updating the app without
            changing its behavior is needed to keep the codebase robust and
            maintainable. TypeScript makes this important process less painful.
            With IDEs knowing much about your code, you are equipped with
            navigation tools like “find all references” or “go to definition.”
            Besides, a lot of mistakes are spotted automatically. For example,
            if you rename a function and later forget to change the name
            somewhere, TS will alert you to the issue. This simplifies and
            accelerates refactoring, which is especially beneficial when you
            deal with large portions of the codebase.
          </p>
          <p>
            <strong>API &amp; Third party</strong> - You work off based on the
            API. Be it using a feature from a third party library or writing
            data structure model for a new api you are working with.
            <br /> So unit tests :::pause::: TypeScript doesn't eliminate unit
            tests but It actually reduces the need to create unit tests which
            check the structure of static data received, these unit tests are
            tedious and can require significant effort to update when the data
            structure needs change.
          </p>
          <p>
            <i>Optional static typing: </i>
            A valid JavaScript program is technically valid TypeScript. You can
            migrate to TypeScript gradually and adopt the level of strictness
            that suits you. :::pause::: It’s important to note that TS doesn’t
            force declaring types everywhere. Developers are free to change the
            level of type strictness in different parts of the project. This
            approach distinguishes TS from other statically typed languages and
            allows you to find the right balance between flexibility and
            correctness.
            <br />
            <br /> But static typing is not only about catching bugs. It also
            gives the code more structure, makes it self-documenting and more
            readable, speeds up debugging and refactoring. All told increases
            productivity across a large team.
          </p>
          <p>
            <strong>Increased Team Performance:</strong>
            TypeScript allows you to introduce new developers to your project
            faster. Explicitly defined data structures and type annotations make
            it incomparably easier to understand the decisions made by the
            engineers originally writing your code.
          </p>
          <p>
            <strong>Love</strong>
          </p>
          <p>
            <strong>Trust:</strong>
            Popularity doesn’t necessarily mean that something is of high
            quality and should be trusted. Fortunately, TypeScript also enjoys
            support from some truly formidable players in the tech world. The
            language is widely used in software products such as Slack, or
            Visual Studio Code. What’s more, many great JavaScript tools are
            written in TypeScript, including frameworks like Angular. <br />{" "}
            :::pause::: Most of the popular react packages are already has types
            defined or they are in the process of converting to TypeScript
          </p>
        </Notes>
      </Slide>
      <Slide backgroundColor="secondary">
        <Heading color="primary" fontSize="h3">
          Testimonials
        </Heading>
      </Slide>
      <Slide backgroundColor="secondary">
        <Image
          width="1067"
          alt="Screenshot 2021-09-22 at 18 46 11"
          src="https://user-images.githubusercontent.com/17121750/134395288-a8333ee5-52ad-499a-8fd4-3020385487a7.png"
        />
      </Slide>
      <Slide backgroundColor="secondary">
        <Image
          width="1069"
          alt="Screenshot 2021-09-22 at 18 46 48"
          src="https://user-images.githubusercontent.com/17121750/134395290-59355dbe-2cd7-4b05-9e2b-3076e5820cc8.png"
        />
      </Slide>
      <Slide backgroundColor="secondary">
        <Image
          width="1058"
          alt="Screenshot 2021-09-22 at 18 47 24"
          src="https://user-images.githubusercontent.com/17121750/134395293-77e940cc-b7ac-42db-a1d3-abf06026e01a.png"
        />
      </Slide>
      <Slide>
        <Text>Strictness</Text>
        <UnorderedList fontSize="1.8rem" color="black">
          <Appear>
            <ListItem>
              <CodeSpan fontSize="inherit">strict</CodeSpan> - Sets maximum
              strictness, setting all the flags below to true.
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <CodeSpan fontSize="inherit">noImplicitAny</CodeSpan> - Compiler
              option will raise errors in expressions and declarations with an
              implied <CodeSpan fontSize="inherit">any</CodeSpan> type.
              <CodePane
                language="javascript"
                theme="prism"
                highlightRanges={[]}
              >{`
              const greeter = (name) => 'Hello' + name
              // Instead
              const greeter = (name: string) => 'Hello' + name
              `}</CodePane>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <CodeSpan fontSize="inherit">strictNullChecks</CodeSpan> - Means
              that null and undefined values are not valid values in types.
              <CodePane
                language="javascript"
                theme="prism"
                highlightRanges={[]}
              >{`
              let person: Person = new Person();
              person = null;
              // Instead
              let person: Person | null = new Person();
              person = null;
              `}</CodePane>
            </ListItem>
            <ListItem>more flags available...</ListItem>
          </Appear>
        </UnorderedList>
        <Notes>
          So you can control the strictness you want in your project by using
          these flags. <br />
          <br />
          &lt;&lt;strict flag means you are giving the control to TS, the most
          strictest. Others flags will be turned on bny turnning this on
          <br />
          <br />
          &lt;&lt;TS will tell you if it's missing context, so it will ask you
          to be nice and add a type where you have missed &lt;&lt;This catches a
          great deal of bug. THis will make you be precise with your code.
        </Notes>
      </Slide>
      <Slide backgroundColor="secondary">
        <Text>.d.ts / Declaration files</Text>
        <BodyText>
          The "d.ts" file is used to provide typescript type declaration about
          an API that's written in JavaScript. The idea is that you're using
          something like jQuery or underscore, an existing javascript library.
          You want to consume those from your typescript code.
          <br />
          <br />
          Large collections of declaration files for popular JavaScript
          libraries are hosted on GitHub in DefinitelyTyped repository. You can
          install a package's types by
          <CodeSpan fontSize="inherit">
            npm install --save-dev @types/package-name
          </CodeSpan>
        </BodyText>
      </Slide>
      <Slide>
        <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcode.visualstudio.com%2Fdocs%2Feditor%2Fintellisense&psig=AOvVaw3W8njaDo-U79P7jUvHEZb0&ust=1632571302882000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiEtaLIl_MCFQAAAAAdAAAAABAJ" />
      </Slide>
      <Slide backgroundColor="secondary">
        <Text>There will be days...</Text>
        <Image src="https://img.ifunny.co/images/d8dd945a71b9bb92b9dc40e41c50de3691c7a7e85b4ff94fd6809bc72d44932d_1.webp" />
      </Slide>
      <Slide>
        <Text>TypeScript cons: what problems it creates</Text>
        <UnorderedList fontSize="1.8rem" color="black">
          <Appear>
            <ListItem>One more JavaScript to learn</ListItem>
          </Appear>
          <Appear>
            <ListItem>Learning curve</ListItem>
          </Appear>
          <Appear>
            <ListItem>Not all libraries are typed</ListItem>
          </Appear>
          <Appear>
            <ListItem>Unhelpful error messages</ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Notes>
          Mental Model. Still beginner. Huge docs. I follow few good bloggers.
          Lots of good information hidden in Release notes. I initally hated it,
          but I love it now. But I hate the fact that I still only know 10% of
          it.
        </Notes>
      </Slide>
      <Slide>
        <Heading>Helpful sites</Heading>
        <OrderedList>
          <ListItem>
            <Link href="https://www.typescriptlang.org/play">
              TypeScript playground
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://astexplorer.net/">AST explorer</Link>
          </ListItem>
        </OrderedList>
      </Slide>

      <Slide>
        <Heading>Union types 🤔</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`
      function padLeft(value: string, padding: any) {
        if (typeof padding === "number") {
          return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
          return padding + value;
        }
        throw new Error('Only number or string type are supported');
      }
      `}
        </CodePane>
      </Slide>

      <Slide>
        <Heading>Union types 💡</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`
      function padLeft(value: string, padding: number | string) {

        if (typeof padding === "number") {
          return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
          return padding + value;
        }
        throw new Error('Only number or string type are supported');
      }
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Nullable types 🤔</Heading>
        <CodePane highlightRanges={[]} language="javascript" theme="prism">
          {`
  interface Member {
      name: string,
      age?: number
  }

  function setMember(member: Member) {
    const stringifyAge = member.age.toString(); // Cannot read property 'toString' of undefined
  }
      `}
        </CodePane>
      </Slide>

      <Slide>
        <Heading>Discriminated Unions 🤔</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`
type NetworkState = {
  state: 'loading' | 'success' | 'failed';
  code?: number; // available only when request has failed
  response?: {
    title: string;
    duration: number;
    summary: string;
  }; // available only when request successful
}

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      // The type must be NetworkFailedState here,
      // so accessing the 'code' field is safe
      return "Error  downloading " + state.code;
    case "success":
      return "Downloaded " + state.response.title;
  }
}
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Discriminated Unions 💡</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`
type NetworkLoadingState = {
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};
// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      // The type must be NetworkFailedState here,
      // so accessing the 'code' field is safe
      return "Error  downloading " + state.code;
    case "success":
      return "Downloaded " + state.response.title;
  }
}
      `}
        </CodePane>
      </Slide>

      <Slide>
        <Heading>Generic Types 🤔</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`
class AnyList {
  private values: any[] = [];

  constructor (values: any[] = []) {
      this.values = values;
  }
  public add(value: any): void {
      this.values.push(value);
  }
}

class User {
    name: string;
    constructor(name: string) { this.name = name; }
}

const intList = new AnyList();
intList.add(4);

const stringList = new AnyList();
stringList.add('hello');

const userList = new AnyList();
userList.add(new User('Jamie'));
      `}
        </CodePane>
      </Slide>

      <Slide>
        <Heading>Generics Types 💡</Heading>

        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`
class TypedList<T> {
  private values: T[] = [];

  constructor (values: T[] = []) {
    this.values = values;
  }

  public add(value: T): void {
      this.values.push(value);
  }
}

class User {
  name: string;
  constructor(name: string) { this.name = name; }
}

const intList = new TypedList<number>();
intList.add(4);

const stringList = new TypedList<string>();
stringList.add('hello');

const userList = new TypedList<User>();
userList.add(new User('Jamie'));
      
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Keyof Types 🤔</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`

interface User {
  firstName: string;
  lastName: string;
}

const user: User = {
  firstName: "Type",
  lastName: "Script"
};
      
function getProperty(obj: User, key: string) {
  return obj[key];
}
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Keyof Types 💡</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`
    interface User {
      firstName: string;
      lastName: string;
    }
    
    const user: User = {
      firstName: "Type",
      lastName: "Script"
    };
          
    function getProperty<Obj>(obj: Obj, key: keyof Obj): Obj[keyof Obj] {
      return obj[key];
    }
    `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Tuple Types 🤔</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>{`
        type SuccessData = {
            success: true;
            response: {};
        };
        
        type ErrorData = {
            success: false;
            error: string
            description: string;
        }
        
        function splitSuccessAndErrorData(data: SuccessData[] | ErrorData[]) {
            const successData = [];
            const errorData = [];
            data.forEach((d) => {
                if (d.success) {
                    successData.push(d);
                } else {
                    errorData.push(d);
                }
            });
            return [successData, errorData];
        }
        `}</CodePane>
      </Slide>

      <Slide>
        <Heading>Tuple Types 💡</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>{`
      type SuccessData = {
          success: true;
          response: {};
      };
      
      type ErrorData = {
          success: false;
          error: string
          description: string;
      }
      
      function splitSuccessAndErrorData(data: SuccessData[] | ErrorData[]): [SuccessData[], ErrorData[]] {
          const successData: SuccessData[] = [];
          const errorData: ErrorData[] = [];
          data.forEach((d) => {
              if (d.success) {
                  successData.push(d);
              } else {
                  errorData.push(d);
              }
          });
          return [successData, errorData];
      }
        `}</CodePane>
      </Slide>
      <Slide>
        <Heading>Type Predicates / User Defined Type Guards 🤔</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>{`
    interface Cat {
      numberOfLives: number;
    }
    interface Dog {
      isAGoodBoy: boolean;
    }
      
    let animal: Cat | Dog;
    
    function logger(animal: Cat | Dog) {
        console.log(animal)
    }
      `}</CodePane>
      </Slide>

      <Slide>
        <Heading>Type Predicates / User Defined Type Guards 💡</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>{`
    interface Cat {
      kind: 'cat';
      numberOfLives: number;
    }
    interface Dog {
      kind: 'dog';
      isAGoodBoy: boolean;
    }
      
    let animal: Cat | Dog;
    
    function isCat(animal: Cat | Dog): animal is Cat {
      return animal.kind === 'cat';
    }
    
    function logger(animal: Cat | Dog) {
      if (isCat(animal)) {
        console.log(animal)
      }
    }
      `}</CodePane>
      </Slide>
      <Slide>
        <Heading>Utility / Mapped types 🤔</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>{`
    interface Todo {
      title: string;
      description: string;
    }
    
    function updateTodo(todo: Todo, fieldsToUpdate: Todo) {
      return { ...todo, ...fieldsToUpdate };
    }
    const todo1 = { title: 'Update tsconfig', description: 'enable strictNullChecks' };
    
    updateTodo(todo1, { description: 'enable noImplicitAny' });
      `}</CodePane>
      </Slide>
      <Slide>
        <Heading>Utility / Mapped types 💡</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>{`
    interface Todo {
      title: string;
      description: string;
    }
    
    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
      return { ...todo, ...fieldsToUpdate };
    }
    
    const todo1 = { title: 'Update tsconfig', description: 'enable strictNullChecks' };
    
    updateTodo(todo1, { description: 'enable noImplicitAny' });
      `}</CodePane>
        <Heading fontSize="h6">
          In addition to Partial, there's many more Utility types
        </Heading>
      </Slide>
      <Slide>
        <Heading>Inferred Types</Heading>
        <CodePane language="javascript" theme="prism" highlightRanges={[]}>
          {`
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"

function setAlignment(value: '$VerticalAlignment-$HorizontalAlignment'): void { }

setAlignment("top-left");   // works!
setAlignment("top-middel"); // error!
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Thank you 🙏🏻</Heading>
      </Slide>
    </Deck>
  );
}

export default App;
