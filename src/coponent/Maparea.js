import React,{ useState, useEffect } from 'react';
import './css/map.css';
// GoogleMap利用のためのライブラリ
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

// APIキーはなしで開発者モードで使用
// デプロイする場合は.envを作成しそこにAPI_KEYを埋めて使用する
const APIKEY ="";

function Maparea(){

  // 中心位置とズームレベル、現在地をstateで管理
  const [center, setCenter] = useState({
    lat: 34.673542,
    lng: 135.433338
  });
  
  const [zoom, setZoom] = useState(13);
  
  const [currentPosition, setCurrentposition] = useState();

  // 起動時の表示画面の中視点座標
  // 現在地取得成功
  const current = data => {
    const currentPosition = {
      lat: data.coords.latitude,
      lng: data.coords.longitude
    };
    setCurrentposition(currentPosition);
    setCenter(currentPosition);
  };
  // 現在地取得が失敗した場合
  const unfind = data => {
    const currentPosition = {
      /* 日本時間標準時（兵庫県明石市） */
      lat:34.673542,
      lng:135.433338
    };
    setCurrentposition(currentPosition);
    setCenter(currentPosition);
  };

  // 現在地取得のための関数
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(current, unfind);
  }, []);

  // オリジナルのピン作成のための変数
  // 以下のピンは文字のみ表示のため見にくいため別でピンを作成し直す
  const Localmarker = ({text}) => <div>{text}</div>;


  return(
    <div className= "map">
      <h1 className="title-log">mapApp</h1> {/* このh1タグは表示されないようににしてあります */}
      <GoogleMapReact
        bootstrapURLKeys={{key:APIKEY}}
        center={center}
        defaultZoom={zoom}
        >
        <Localmarker
          lat = {36.561567}
          lng = {136.658122}
          text = "金沢能楽美術館" />
        <Marker
          lat={36.560867}
          lng={136.658258}
          text="21世紀美術館" />
        <Marker
          lat={36.572587}
          lng={136.666548}
          text="東茶屋街" />
        <Marker
          lat={36.552713}
          lng={136.673291}
          text={"下馬地蔵"}/>
        <Marker
          lat={36.577912}
          lng={136.648904}
          text={"金沢駅(鼓門・もてなしドーム)"}/>
        <Marker
          lat={36.561919}
          lng={136.656927}
          text={"辰巳用水"}/>
        <Marker
          lat={36.56509}
          lng={136.649333}
          text={"旧加賀藩士高田家跡"}/>
        <Marker
          lat={36.559291}
          lng={136.657889}
          text={"金沢ふるさと偉人館"}/>
        <Marker
          lat={36.573068}
          lng={136.667921}
          text={"卯辰山山麓寺院群"}/>
        <Marker
          lat={36.485789}
          lng={136.757673}
          text={"白鷺の足湯"}/>
        <Marker
          lat={36.55886}
          lng={136.658646}
          text={"金沢歌劇座"}/> 
      </GoogleMapReact>
    </div>
  );
}
export default Maparea;