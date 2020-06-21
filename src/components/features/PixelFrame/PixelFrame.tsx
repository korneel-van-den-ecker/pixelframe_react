import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pixel, { PixelProps } from "./Pixel";
import { FormControl } from "@material-ui/core";
import {init,pixelChange} from './PixelFrameSlice'
import { useSelector, useDispatch } from "react-redux";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  table: {
    //minWidth: 50,
  },
});

export type PixelframeProps = {
  height?: number;
  width?: number;
  pixelArray: PixelProps[][];
};



const PixelFrame = ({ width, height, pixelArray }: PixelframeProps) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  
  useEffect(()=>{
    init({width:16,heigth:16})
  },[])

  const onPixelChangeHandler = (e:React.MouseEvent<HTMLButtonElement>,x:number,y:number) =>{
    dispatch(pixelChange({x:x,y:y,color:"#00ff00"}))
    alert('jooooo' + x + y)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          
            {pixelArray.map((rij,x) => {
              return (
                <TableRow>
                  {rij.map((pix,y) => {
                    return (
                      <TableCell>
                        <Pixel   {...pix } onClickHandler={(e)=>onPixelChangeHandler(e,x,y)} ></Pixel>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
         
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PixelFrame;
