import { ReactNode } from "react";

type ModelDetailsProps = {
  modelIcon: ReactNode;
  modelName: string;
  modelDescription: string;
};

export default function ModelDetails(props: ModelDetailsProps) {
  return (
    <div className="model-details flex justify-between items-center bg-white p-5 mb-4 rounded-md shadow-md shadow-blue-600/5 w-full">
      <div className="model-icon flex justify-center items-center w-1/12">
        <div className="bg-ke-icon-bg p-2 rounded-md">{props.modelIcon}</div>
      </div>
      <div className="model-name flex justify-center items-center w-4/12">
        <p className="text-xl">{props.modelName}</p>
      </div>
      <div className="model-description flex flex-wrap justify-center items-center w-7/12">
        <p className="text-description text-xs font-medium">
          {props.modelDescription}
        </p>
      </div>
    </div>
  );
}
