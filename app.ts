// // interface 接口中定义的属性和类型在使用时也要一样
// interface study {
//   vue: boolean;
//   typescript: boolean;
// }

// const rty: study = {
//   vue: false,
//   typescript: false,
// };

// // 重名接口会自动合并
// interface study {
//   vue: boolean;
//   typescript: boolean;
// }
// interface study {
//   javascript: boolean;
// }
// const rty: study = {
//   vue: false,
//   typescript: false,
//   javascript: false,
// };

// 接口继承 extends
// interface study {
//   vue: boolean;
//   typescript: boolean;
// }
// interface skill extends study {
//   javascript: boolean;
// }
// const rty: skill = {
//   vue: false,
//   typescript: false,
//   javascript: false,
// };

// 可选属性
// interface study {
//   vue: boolean;
//   typescript?: boolean;
// }
// const rty: study = {
//   vue: false,
// };

// 只读属性 readonly
// interface study {
//   readonly vue: boolean;
//   typescript: boolean;
// }
// const rty: study = {
//   vue: true,
//   typescript: false,
// };
// console.log(rty); //{ vue: true, typescript: false }
// // rty.vue = false; //无法分配到 "vue" ，因为它是只读属性。

// 任意属性 [propName]
interface study {
  readonly vue: boolean;
  typescript: boolean;
  fun(): void;
  fun2(): number;
  [propName: string]: any;
}
const rty: study = {
  vue: true,
  typescript: true,
  fun: () => console.log(1),
  fun2: () => 123,
  age: 29,
  name: "bruno",
};
