import { expect } from "chai";
import { PrepareMsgString, AdvanceVariantPrint } from "../Main";

describe("Advance Variant Tests", async () => {
  it("verify message string", async () => {
    const msgString = PrepareMsgString("Advance Variant");
    expect(msgString).to.equal("Advance Variant --> *** Windows platform --> Hello-World ***");
    AdvanceVariantPrint("Advance Variant");
  });
});