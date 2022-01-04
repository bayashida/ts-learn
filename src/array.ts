/*
  arrayについてのプラクティス
  @data: 2022/01/04
*/
export {};

let numbers: number[] = [1, 2, 3];

for (let i=0; i<=2; i++){
    console.log(numbers[i]);
};

// 非推奨 Javaっぽい書き方
let numbers2: Array<number> = [1, 2, 3];

// 二次元配列
let nijigen: number[][] = [
    [50, 100],
    [150, 300]
];

// 複数型存在パターン
let hairetsu: (number | boolean | string)[] = [1, false, 'Japan'];
