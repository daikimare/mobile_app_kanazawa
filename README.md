# binoculars
これは金沢工業大学メディア情報学科3年の授業(モバイルアプリケーション制作)で作成したアプリケーションです。

## 概要
金沢市の観光施設など公共の施設について知ってもらうためのサービス。  
どこに何があってどのような施設なのかを知ってもらう。
### 背景
金沢を観光しに来る人に限らず金沢にいるのに金沢特有の施設などを知らない人がいる。  
これは非常にもったいないことであると同時に地域コミュニケーションの低下につながると考えた。  
よって、まずは金沢について知るための機械や手段が必要である。

## 目的
このアプリケーションは以下に示す目的で作成しました。
1. 金沢という観光都市について知ってもらう
    - 主に施設について
2. 施設がどこに存在するかを知ってもらう

以上二つの目的のために作りました。

## 機能
- GoogleMapApiを用いて地図を表示させ金沢市の施設をプロットする
  - 金沢市の施設については金沢市の施設のオープンデータを使用
- 施設を一覧で表示する機能
- プロットしてある場所を洗濯すると施設についての情報が表示される
  - 施設の概要
  - 入館料
  - その他…

## 開発環境
プラットフォーム：**webブラウザ**  
開発言語：**JavaScript**,*(React)*  
使用したAPIなど：**GoogleMapAPI**,**shisetsu_kankou.csv**(金沢市提供オープンデータ)

## 起動方法

起動準備を行いましょう。  
まずはこのリポジトリをローカル環境にクローンしてください  
- HTTPの場合  
`$ git clone https://daikimare/mobile_app_kanazawa.git`

- SSHの場合  
`$ git clone git@github.com:daikimare/mobile_app_kanazawa.git`

次に本サービスはいくつかのライブラリを利用しておりますのでそれらのパッケージをインストールしてください。  
`$ npm install`

以上で起動の準備は終わりです  
実際に起動させます。 

- npmの場合  
`$ npm start`

- yarnの場合  
`$ yarn start`

上記の二つのうちいずれかのコマンドを実行していただければ起動します。  
うまく起動できましたらおそらく**localhost:3000**が開くはずです。  
正確には(http://localhost:3000)というポートが出てきます。  
ローカルホストの3000番ポートですのでローカルサーバーになります。情報が外部に漏れることはありませんので安心してください。
