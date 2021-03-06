import io from 'socket.io-client';
import {hexToRgb} from '../../util/index'
const WS_BASE = "http://192.168.1.110:5000";
export class SocketService{
    private socket:SocketIOClient.Socket = {} as SocketIOClient.Socket;

    public init():SocketService{
        this.socket = io(WS_BASE)
        return this;
    }

    public getSocket(){
        return this.socket;
    }

    public sendMessage (message: string,tekstKleur:string,tekstBright:number,bgKleur:string,bgBright:number):void{
       
        this.socket.emit("PixelframeTekst", {
            tekst: message,            
            achertergrondkleur: {...hexToRgb(tekstKleur), bright: tekstBright.toString() },
            tekstKleur: { ...hexToRgb(bgKleur), bright: bgBright.toString()}})
    }

    public updateFrame(data:any):void{
        var formattedData:any[] = [];
        data.pixelFrame.map((pixelRij:[any]) => {
            var pixelRijNew:any[] = [];
            pixelRij.map((pixel:any)=>{
                pixelRijNew.push({
                    kleur:{...hexToRgb(pixel.color)},
                    brightness:pixel.brightness
                })
            formattedData.push(pixelRijNew)
            })
            
        });
        this.socket.emit("pixelFramedata",formattedData)
    }


    public subscribe (eventName:string,func:()=>void){
        this.socket.on(eventName,func)
    }

    public disconnect ():void {
        this.socket.disconnect();
    }
}