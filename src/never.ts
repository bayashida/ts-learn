/*
  neverについてのプラクティス
  @data: 2022/01/09
*/
export {};

// 関数の呼び出し元に戻ることはない為、never型 (never returnから来ている?)
function error(message: string): never {
    throw new Error(message);
}

// error関数を呼び出すが例外が発生するので呼び出し元には戻らない
// エラーハンドリングによりcatchされコンソールにエラー内容が表示される
try {
    let result = error('test');
    console.log({ result });
} catch (error) {
    console.log({ error });
}

// void型にはundefinedが代入できる
// never型にはnever型の関数(の結果)を代入できる
let foo: void = undefined;
let bar: never = error('only me!');
