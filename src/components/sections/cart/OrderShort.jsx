import { observer } from "mobx-react-lite";
import { useStore } from "../../../store/StoreProvider";
import Button from "@/components/UI/Buttons";
import { useEffect, useState } from "react";
import Quantity from "../products/Quantity";
import SummaryInfo from "./SummaryInfo";

const OrderShort = observer(({ func }) => {
  return <SummaryInfo section={"ordershort"} func={func} />;
});

export default OrderShort;
