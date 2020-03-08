# TypeScript

TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发，代码开源于 GitHub 上。

它的第一个版本发布于 2012 年 10 月，经历了多次更新后不仅在 Microsoft 内部得到广泛运用，而且 Google 的 Angular2 也使用了 TypeScript 作为开发语言。

```typescript
// 'xxx: number' 表示声明一个number类型
const num: number = 123;

// 声明一个函数的参数类型(number以及any)和返回值(void)
function fn(arg1: number, arg2: any): void {
  // todo
}
fn(num, [1, 2, 3, 4]);

// 声明一个接口
interface IPerson {
  name: string; // IPerson需要包含一个name属性，类型是string
  age: number; // IPerson需要包含一个age属性，类型是number
  family: string[]; // IPerson需要包含一个family属性，类型是数组，数组里面都是string类型的数据
  sex?: "男" | "女"; // IPerson可选一个sex属性，值为'男'或者'女'或者undefined
}
// 使用IPerson接口定义一个对象，如果对象不符合IPerson的定义，编译器会飘红报错
const person: IPerson = {
  name: "小王",
  age: 12,
  family: ["爹", "娘"]
};

// type类似interface，以下写法等同用interface声明IPerson
type IPerson2 = {
  name: string;
  age: number;
  family: string[];
  sex?: "男" | "女";
};
// 因此可以直接定义过来
const person2: IPerson2 = person;
```

## 优势

- 类型系统实际上是最好的文档
- 可以在编译阶段就发现大部分错误
- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等
- TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
- 即使不显式的定义类型，也能够自动做出类型推论
- 可以定义从简单到复杂的几乎一切类型
- 即使 TypeScript 编译报错，也可以生成 JavaScript 文件
- 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript - 读取

## 类型

### 原始数据

- boolean
- number
- string
- Void
- Null 和 Undefined

> 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量

### any

任意值（Any）用来表示允许赋值为任意类型，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

### 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型

```typescript
let myFavoriteNumber = "seven";
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

> 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

### 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种

```typescript
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```typescript
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

上例中，第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。

而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。

### Interfaces

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

class UserAccount
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
```

- 定义的变量比接口少了一些属性是不允许的
- 多一些属性也是不允许的

#### 可选属性

有时我们希望不要完全匹配一个形状，那么可以用可选属性：

```typescript
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: "Tom"
};
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: "Tom",
  age: 25
};
```

#### 任意属性

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: "Tom",
  gender: "male"
};
```

#### 只读属性

```typescript
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 89757,
  name: "Tom",
  gender: "male"
};

tom.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```

> 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

### 数组

#### 「类型 + 方括号」表示法

```typescript
let list: number[] = [1, 1, 2, 3, 5];

// 数组的项中不允许出现其他的类型
let list: number[] = [1, "1", 2, 3, 5];

// Type 'string' is not assignable to type 'number'.
```

#### 数组泛型

我们也可以使用数组泛型（Array Generic） `Array<elemType>` 来表示数组

```typescript
let list: Array<number> = [1, 1, 2, 3, 5];
```

#### 用接口表示数组

```typescript
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

`NumberArray` 表示：只要索引的类型是数字时，那么值的类型必须是数字。
虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
不过有一种情况例外，那就是它常用来表示类数组。

#### 类数组

类数组（Array-like Object）不是数组类型，比如 `arguments`：



```
function sum() {    let args: number[] = arguments;}
// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
```

上例中，`arguments` 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：

```
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```

在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 `length` 和 `callee` 两个属性。

事实上常用的类数组都有自己的接口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等：

```
function sum() {
    let args: IArguments = arguments;
}
```

其中 `IArguments` 是 TypeScript 中定义好了的类型，它实际上就是：

```
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```

### 方法

````typescript
/**
 * 一个方法：生成错误提示信息
 *
 * @param {string} message 提示信息，比如`you have a error`
 * @param {number | string} code 错误码，数字和字符都行
 * @param {string} type 类型，请写`demo1`或者`demo2`
 *
 * [还不懂？点这里吧](https://www.google.com)
 *
 * ```js
 * // demo
 * genErrMsg('demo', 10086)
 *
 * ```
 */
export function genErrMsg(
  message: string,
  code: number | string,
  type?: "demo1" | "demo2"
): string {
  return (message || `网络繁忙，请稍候再试`) + (code ? `(${code})` : ``);
}
````
