import {User} from "./User";
import {Company} from "./Company";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
}

export class Map {
    // 用于存储地图实例
    private googleMap: google.maps.Map;

    constructor( divId: string ){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    // 添加标记
    addMarker(mappable: Mappable) {
        // 创建标记
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        })
        // 标记绑定点击事件
        marker.addListener("click",()=>{
            const infoWidnow = new google.maps.InfoWindow(
                {content: mappable.markerContent()}
            )
            infoWidnow.open(this.googleMap, marker)
        })
    }
}