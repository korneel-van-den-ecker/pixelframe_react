import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pixel,{PixelProps} from './Pixel'

const useStyles = makeStyles({
  table: {
    minWidth: 25,
  },
});

type PixelframeProps = {
  height?: number;
  width?: number;
  pixelArray: PixelProps[][];
};


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const createRow = () => {};



const PixelFrame = ({ width, height, pixelArray }: PixelframeProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {pixelArray.map((rij) => {
            return <TableRow>{rij.map((pix) => {
                return <TableCell ><Pixel {...pix}></Pixel></TableCell>
            })}</TableRow>;
          })}          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PixelFrame;
