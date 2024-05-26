import { CreateMsgString } from "@naveed235812/hello-world-windows/lib/Main";

export function AdvanceVariantPrint(appMsgString: string): void {
  const domainComponentMsg = CreateMsgString();
  console.log(appMsgString + " --> " + domainComponentMsg);
}
