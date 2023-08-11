import ModelDetails from "./ModelDetails";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import ModelPrediction from "./ModelPrediction";

export default function SAFeedbackModel() {
  return (
    <>
      <ModelDetails
        modelIcon={
          <MdOutlineSentimentSatisfied className="text-xl text-mindpeers-sea-green-dark" />
        }
        modelName="Sentiment Analysis Feedback"
        modelDescription="Enhancing accuracy: Sentiment Feedback ML model provides precise sentiment
      feedback to refine predictions effectively."
      />
      <ModelPrediction
        btnText="Submit Feedback"
        outHeading1="Sentiment"
        outHeading2="Accuracy"
        feedbackModel="sa"
      />
    </>
  );
}
