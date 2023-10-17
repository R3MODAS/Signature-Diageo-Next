import dynamic from "next/dynamic";
import "./css/global.scss";
import "./css/responsive.scss";

const Signature = dynamic(() => import("./shop/products/signature"), {
  ssr : false
})

export default function Home() {
  return (
    <Signature />
  );
}
