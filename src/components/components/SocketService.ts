import io from 'socket.io-client';
const WS_BASE = "http://192.168.1.110:5000";
export class SocketService{
    private socket:SocketIOClient.Socket = {} as SocketIOClient.Socket;

    public init():SocketService{
        this.socket = io(WS_BASE)
        return this;
    }

    public send (message: string):void{
        this.socket.emit("PixelframeTekst", {
            tekst: message,
            tekstKleur: { r: 0, g: 0, b: 0, bright: "1" },
            achertergrondkleur: { r: 0, g: 255, b: 0, bright: "1"}})
    }

    public disconnect ():void {
        this.socket.disconnect();
    }
}