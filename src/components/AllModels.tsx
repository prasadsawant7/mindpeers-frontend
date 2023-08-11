import { VscSymbolKeyword } from "react-icons/vsc";
import { MdOutlineSentimentSatisfied } from "react-icons/md";

export default function AllModels() {
  return (
    <>
      <div className="font-semibold text-xl mb-4">All Models Details</div>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-5">
        <div className="flex justify-between items-center bg-white rounded-md shadow-md shadow-mindpeers-sea-green-dark/10">
          <div className="model-icon h-full flex justify-center items-start px-4 pt-6">
            <div className="bg-mindpeers-sea-green-light p-2 rounded-md">
              <MdOutlineSentimentSatisfied className="text-xl text-mindpeers-sea-green-dark" />
            </div>
          </div>
          <div className="model-info flex flex-col justify-between items-start py-5 pr-8">
            <div className="model-name font-medium text-lg">
              Sentiment Analysis
            </div>
            <div className="model-description font-normal text-sm text-justify text-gray-700">
              This ML model will analyse the provided text and predicts the
              sentiment whether the text is positive or negative.
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white rounded-md shadow-md shadow-mindpeers-sea-green-dark/10">
          <div className="model-icon h-full flex justify-center items-start px-4 pt-6">
            <div className="bg-mindpeers-sea-green-light p-2 rounded-md">
              <MdOutlineSentimentSatisfied className="text-xl text-mindpeers-sea-green-dark" />
            </div>
          </div>
          <div className="model-info flex flex-col justify-between items-start py-5 pr-8">
            <div className="model-name font-medium text-lg">
              Sentiment Analysis Feedback
            </div>
            <div className="model-description font-normal text-sm text-justify text-gray-700">
              This ML model is for giving the right & accurate sentiment as a
              feedback to retrain the model inorder to get the right & accurate
              sentiment prediction.
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white rounded-md shadow-md shadow-mindpeers-sea-green-dark/10">
          <div className="model-icon h-full flex justify-center items-start px-4 pt-6">
            <div className="bg-ke-icon-bg p-2 rounded-md">
              <VscSymbolKeyword className="text-xl text-ke-icon" />
            </div>
          </div>
          <div className="model-info flex flex-col justify-between items-start py-5 pr-8">
            <div className="model-name font-medium text-lg">
              Keyword Extraction
            </div>
            <div className="model-description font-normal text-sm text-justify text-gray-700">
              This ML model will extract the keywords from the text. It also
              gives a score which indicates closeness of keyword to context of
              text.
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white rounded-md shadow-md shadow-mindpeers-sea-green-dark/10">
          <div className="model-icon h-full flex justify-center items-start px-4 pt-6">
            <div className="bg-ke-icon-bg p-2 rounded-md">
              <VscSymbolKeyword className="text-xl text-ke-icon" />
            </div>
          </div>
          <div className="model-info flex flex-col justify-between items-start py-5 pr-8">
            <div className="model-name font-medium text-lg">
              Keyword Extraction Feedback
            </div>
            <div className="model-description font-normal text-sm text-justify text-gray-700">
              This ML model is for giving the right & accurate keywords as a
              feedback to retrain the model inorder to get the right & accurate
              keywords prediction.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
