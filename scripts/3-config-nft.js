import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x8EC1aB2B014dE4f8de0d8955f7338C5a834C5044");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Jolly Roger",
        description: "This NFT will give you access to PirateDAO!",
        image: readFileSync("scripts/assets/flag.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();