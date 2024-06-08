import { expect } from "chai";
import { PrepareMsgString, AdvanceAppPrint } from "../Main";

describe("Advance App Tests", async () => {
  it("verify message string", async () => {
    const msgString = PrepareMsgString("Advance App");
    expect(msgString).to.equal("Advance App --> *** Windows platform --> Hello-World ***");
    AdvanceAppPrint("Advance App");
  });
});