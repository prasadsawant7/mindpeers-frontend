import { VscSymbolKeyword } from "react-icons/vsc";
import ModelDetails from "./ModelDetails";
import ModelPrediction from "./ModelPrediction";

export default function KEFeedbackModel() {
  return (
    <>
      <ModelDetails
        modelIcon={<VscSymbolKeyword className="text-xl text-ke-icon" />}
        modelName="Keyword Extraction Feedback"
        modelDescription="Enhancing precision: Keyword Feedback ML model offers accurate keyword feedback to optimize predictive keyword extraction."
      />
      <ModelPrediction
        btnText="Submit Feedback"
        outHeading1="Keywords"
        outHeading2="Score"
        feedbackModel="ke"
      />
    </>
  );
}
