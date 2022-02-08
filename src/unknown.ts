/*
  unknownについてのプラクティス
  @data: 2022/02/07
*/

export {};

const kansu = (): number => 25;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// typeofで型を出力
//console.log(typeof numberUnknown);

// numbertUnknownがnumber型になり得るのか真偽を問うている 結果trueになる為、IF文の中は実行される
// = 型ガードという
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
    console.log(sumUnknown);
}
