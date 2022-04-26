// 字符串类型
let str: string = "test";
console.log(str); //test

// 数值类型
let number: number = 111;
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制

// 布尔类型
let boolean: boolean = true;
let boolean2: boolean = false;

// 空值类型 void
// 一般用于表示没有返回值的函数
function voidFn(): void {
  console.log("此函数不需要返回");
}
// void也可以定义undefined和null
let undef: void = undefined;
let nul: void = null;

// null && undefined
let a: undefined = undefined;
let b: null = null;
// undefined类型变量可以赋值给其他类型变量
str = a;
number = a;
b = a
str = b;
