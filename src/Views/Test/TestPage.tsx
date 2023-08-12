import React from "react";
import { Button } from "antd";
import { Cookies } from "react-cookie";
import { NewGuid } from "../../Utils";
const cookies = new Cookies();

export function TestPage() {
  const test=()=>{
  }
  return <div><Button>test</Button></div>;
}
