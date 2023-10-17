import dynamic from "next/dynamic";
import "./scss/global.scss";
import "./scss/responsive.scss";

const Signature = dynamic(() => import("./shop/products/signature"), {
  ssr : false
})

export default function Home() {
  return (
    <Signature />
  );
}
