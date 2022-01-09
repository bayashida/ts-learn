/*
  anyについてのプラクティス
  + axiosについても
  @data: 2022/01/09
*/
import axios from "axios";

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// getにてgetリクエスト -> レスポンスをコールバック関数にて受け取る
axios.get(url).then(function(response) {
    // object型であるArticle型を定義
    interface Article {
        id: number;
        title: string;
        description: string;
    }
    let data: Article[];
    data = response.data;
    console.log(data)
});
