import React, { useEffect } from 'react'

import socketIOClient from 'socket.io-client'


const  SocketClient = ()=>{
    useEffect(()=>{
        const socket = socketIOClient();
        socket.emit('PixelframeTekst',"Test Message")
    },[])
}

export default SocketClient;