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

    public send (message: string,tekstKleur:string,tekstBright:number):void{
        const teksKlRGB = hexToRgb(tekstKleur)
        this.socket.emit("PixelframeTekst", {
            tekst: message,            
            achertergrondkleur: {...teksKlRGB, bright: tekstBright.toString() },
            tekstKleur: { r: 0, g: 255, b: 0, bright: "1"}})
    }

    public subscribe (eventName:string,func:()=>void){
        this.socket.on(eventName,func)
    }

    public disconnect ():void {
        this.socket.disconnect();
    }
}