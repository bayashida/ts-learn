/*
  interfaceについてのプラクティス
  @data: 2022/01/11
*/
export {};

// 型エイリアス (先頭大文字)
type ObjectType = {
    name: string;
    age: number;
}

// interface (先頭大文字)
interface ObjectInterface {
    name: string;
    age: number;
}

let object: ObjectInterface = {
    name: 'Yabashi',
    age: 30
};
