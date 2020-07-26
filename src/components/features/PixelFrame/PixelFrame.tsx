import React, { useEffect,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pixel, { PixelProps } from "./Pixel";
import { init, pixelChangeColor } from "./PixelFrameSlice";
import {  useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../../components/SocketContext";
import {selectPixelframe} from './PixelFrameSlice'
const useStyles = makeStyles({
  table: {
    maxWidth: 400,
    padding: "none",
  },
});

export type PixelframeProps = {
  height?: number;
  width?: number;
  pixelArray: PixelProps[][];
};

/* function Maakjson(){
  //Json Object prepareren
   var pixelFrame = {"pixelLijst":[]};

  $('.btnPixel').each(function(){
      var xPos = $(this).data('xpos'),
          yPos = $(this).data('ypos'),
          kleur = $(this).css("background-color"),
          bright = $(this).data('brightness');                
          //We kuisen eerst de kleur code op dat deze gewoon r,g,b wordt
          var kleurGeknipt = kleur.slice(4,kleur.length-1);
          //console.log(kleurGeknipt);
      pixelFrame.pixelLijst.push({
          'xPos':parseInt(yPos),
          'yPos':parseInt(xPos),
          'kleur':kleurGeknipt,
          'brightness' : bright
      });
  });
  console.log(pixelFrame);
}; */


const PixelFrame = ({ width, height, pixelArray }: PixelframeProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ws = useContext(SocketContext);
  const {pixelFrame} = useSelector(selectPixelframe)
  useEffect(() => {
    init({ width: 16, heigth: 16 });
  }, []);

  const onPixelChangeHandler =  (x: number, y: number) => {
    dispatch(pixelChangeColor({ x: x, y: y },ws));
    //ws.updateFrame(pixelFrame)
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {pixelArray.map((rij, x) => {
            return (
              <TableRow>
                {rij.map((pix, y) => {
                  return (
                    <TableCell padding="none" align="center" size="small">
                      <Pixel
                        {...pix}
                        onClickHandler={(e) => onPixelChangeHandler(x, y)}
                      ></Pixel>
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
