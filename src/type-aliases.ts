/*
  型エイリアスについてのプラクティス
  @data: 2022/01/11
*/
export {};

// 型エイリアスは先頭大文字
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'Baya',
    age: 30
};

// 型エイリアスの定義
type Profile = {
    name: string;
    age: number;
}

// const example2: {
//     name: string;
//     age: number
// } = {
//     name: 'Baya',
//     age: 30
// } ;
const example2: Profile = {
    name: 'Baya',
    age: 30
};

// example1というオブジェクトから型を推論
// typeofにてexampe1の型をProfile2として設定している
type Profile2 = typeof example1;
