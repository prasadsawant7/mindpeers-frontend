import { MdOutlineSentimentSatisfied } from "react-icons/md";
import ModelDetails from "./ModelDetails";
import ModelPrediction from "./ModelPrediction";

export default function SAModel() {
  return (
    <>
      <ModelDetails
        modelIcon={
          <MdOutlineSentimentSatisfied className="text-xl text-mindpeers-sea-green-dark" />
        }
        modelName="Sentiment Analysis"
        modelDescription="Analyze and understand emotions in text, capturing underlying feelings and expressions for nuanced comprehension."
      />
      <ModelPrediction
        btnText="Analyse Text"
        outHeading1="Sentiment"
        outHeading2="Accuracy"
      />
    </>
  );
}
