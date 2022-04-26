// // 字符串类型
// let str: string = "test";
// console.log(str); //test

// // 数值类型
// let number: number = 111;
// let binaryLiteral: number = 0b1010; // 二进制
// let octalLiteral: number = 0o744; // 八进制
// let decLiteral: number = 6; // 十进制
// let hexLiteral: number = 0xf00d; // 十六进制

// // 布尔类型
// let boolean: boolean = true;
// let boolean2: boolean = false;

// // 空值类型 void
// // 一般用于表示没有返回值的函数
// function voidFn(): void {
//   console.log("此函数不需要返回");
// }
// // void也可以定义undefined和null
// let undef: void = undefined;
// let nul: void = null;

// // null && undefined
// let a: undefined = undefined;
// let b: null = null;
// // undefined类型变量可以赋值给其他类型变量
// str = a;
// number = a;
// b = a
// str = b;

// // any不限制类型，可以随意赋值，不检查类型
// let a: any = 1;
// a = "111";
// a = {};
// a = [];
// a = function () {};

// // unknow也可以定义任何类型的值
// let b: unknown;
// b = "111";
// b = true;
// b = {};
// b = [];
// b = function () {};

// // unkonw作为自类型不行
// let c: unknown = 123;
// let d = "test";
// // d = c; // 报错-不能将unknow赋值给其他类型 只能复制unkown或者any
// a = c; // 可以运行
// b = c; // 可以运行

// // unknow不能调用属性和方法 any可以
// let e: unknown = { a: 1, b: (): number => 123 };
// // e.a  // 报错
// // e.b  // 报错

// 数组类型
let numberArr: number[] = [1, 2, 3, 4, 5, 6];
let booleanArr: boolean[] = [true, false, true];
let stringArr: string[] = ["1", "2"];
let anyArr: any[] = [1, "2", true];
// 多维数组
let list:number[][] = [[1,2],[2,1]]