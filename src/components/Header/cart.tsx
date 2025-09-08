import { useCart } from "@helpdice/pro";
import { memo } from "react";

function Cart() {
    const { cartTotal, inCart, totalItems, items } = useCart();
    console.log(items);
    return (
<></>
    )
}

export default memo(Cart);