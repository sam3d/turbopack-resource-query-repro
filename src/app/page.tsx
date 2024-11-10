import isHello from "./example.txt?hello";
import shouldBeWorld from "@/app/example.txt?world";

export default async function Page() {
  return (
    <ul>
      <li>isHello: {isHello}</li>
      <li>shouldBeWorld: {shouldBeWorld}</li>
    </ul>
  );
}
