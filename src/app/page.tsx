import dynamic from "next/dynamic";

const Signature = dynamic(() => import("./shop/products/signature"), {
  ssr : false
})

export default function Home() {
  return (
    <Signature />
  );
}
