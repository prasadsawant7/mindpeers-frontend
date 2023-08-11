import { VscSymbolKeyword } from "react-icons/vsc";
import ModelDetails from "./ModelDetails";
import ModelPrediction from "./ModelPrediction";

export default function KEModel() {
  return (
    <>
      <ModelDetails
        modelIcon={<VscSymbolKeyword className="text-xl text-ke-icon" />}
        modelName="Keyword Extraction"
        modelDescription="
Unveil insights: Keyword Extraction ML model reveals vital terms in text, scoring their context relevance."
      />
      <ModelPrediction
        btnText="Extract Keywords"
        outHeading1="Keywords"
        outHeading2="Score"
      />
    </>
  );
}
