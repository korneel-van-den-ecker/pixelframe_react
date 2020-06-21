import React, { ChangeEvent } from "react";
import { Input, Button } from "@material-ui/core";
import ColorPicker from "../../components/ColorPicker";
import {selectLiveEditor, setSelectedColor} from './LiveEditorSlice'
import { useSelector, useDispatch } from "react-redux";

const LiveEditor = () => {
    const {selectedColor} = useSelector(selectLiveEditor);
    const dispatch = useDispatch();
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedColor({color:e.target.value}))
  };
  return <ColorPicker color={selectedColor}  onChangeHandler={onChangeHandler}></ColorPicker>;
};

export default LiveEditor;
