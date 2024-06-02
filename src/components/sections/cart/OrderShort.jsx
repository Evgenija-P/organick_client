import { observer } from "mobx-react-lite";

import SummaryInfo from "./SummaryInfo";

const OrderShort = observer(({ func }) => {
  return <SummaryInfo section={"ordershort"} func={func} />;
});

export default OrderShort;
