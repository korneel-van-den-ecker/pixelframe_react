import React, { ChangeEvent } from 'react'
import { Input, Button } from '@material-ui/core';

 type ColorPickerProps ={
     color:string;
    onChangeHandler:(event:ChangeEvent<HTMLInputElement>)=> void;
}

const ColorPicker = ({color,onChangeHandler}:ColorPickerProps)=>{
    return(
        <Button><Input value={color} style={{width:50}} type={"color"} onChange={onChangeHandler}></Input></Button>        
    )
}

export default ColorPicker;