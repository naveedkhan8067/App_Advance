import { CreateMsgString } from "@naveed235812/hello-world-windows/lib/Main";

/*
  Creates final message string
*/
export function PrepareMsgString(appMsgString: string): string {
  const domainComponentMsg = CreateMsgString();
  return appMsgString + " --> " + domainComponentMsg;
}

/*
  Display message string
*/
export function AdvanceAppPrint(message: string): void {
  const msgString = PrepareMsgString(message);
  console.log(msgString);
}
