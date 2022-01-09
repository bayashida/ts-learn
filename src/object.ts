/*
  objectについてのプラクティス
  @data: 2022/01/09
*/
export {};

let profile1: object = { name: 'Baya' };
profile1 = { birthYear: 1800 };

let profile2: {
    name: string;
} = { name: 'Baya' };

// nameではないので代入できない
// profile2 = { birthYear: 1800 };

// nameには別の値を代入できる
profile2 = { name: 'Yaba' };
