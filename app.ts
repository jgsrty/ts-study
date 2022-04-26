// any不限制类型，可以随意赋值，不检查类型
let a: any = 1;
a = "111";
a = {};
a = [];
a = function () {};

// unknow也可以定义任何类型的值
let b: unknown;
b = "111";
b = true;
b = {};
b = [];
b = function () {};

// unkonw作为自类型不行
let c: unknown = 123;
let d = "test";
// d = c; // 报错-不能将unknow赋值给其他类型 只能复制unkown或者any
a = c; // 可以运行
b = c; // 可以运行

// unknow不能调用属性和方法 any可以
let e: unknown = { a: 1, b: (): number => 123 };
// e.a  // 报错
// e.b  // 报错
