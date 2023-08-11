import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Axios from "axios";

type ModelPredictionProps = {
  btnText: string;
  outHeading1: string;
  outHeading2: string;
  feedbackModel?: string;
};

type Input = {
  text: string;
  label?: string | number;
};

type Result = {
  text: string;
  sentiment: string;
};

export default function ModelPrediction(props: ModelPredictionProps) {
  const [results, setResults] = useState<Array<Result>>([]);
  const { register, handleSubmit, watch } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      if (!data.label) {
        if (props.btnText === "Analyse Text") {
          const response = await Axios.post(
            "http://127.0.0.1:49990/api/v1/sentiment-analysis",
            {
              text: data.text,
            }
          );
          setResults((items) => [...items, response.data.response]);
        } else if (props.btnText === "Extract Keywords") {
          const response = await Axios.post(
            "http://127.0.0.1:8000/api/v1/keyword-extraction",
            {
              text: data.text,
            }
          );
          console.log(response);
        }
      } else {
        if (props.feedbackModel === "sa") {
          const response = await Axios.post(
            "http://127.0.0.1:8000/api/v1/sentiment-analysis-feedback",
            {
              text: data.text,
              label: Number(data.label),
            }
          );
          setResults(response.data?.response);
        } else if (props.feedbackModel === "ke") {
          const response = await Axios.post(
            "http://127.0.0.1:8000/api/v1/keyword-extraction-feedback",
            {
              text: data.text,
              label: data.label,
            }
          );
          console.log(response);
        }
      }
    } catch (error) {
      console.log(`Error => ${error}`);
    }
  };
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isFeedback, setIsFeedback] = useState(false);
  const textareaValue: string = watch("text", "");
  const labelValue: string | number | undefined = watch("label", "");

  useEffect((): void => {
    if (props.btnText === "Submit Feedback") {
      setIsFeedback(true);
    }

    if (
      textareaValue.length !== 0 &&
      (props.btnText === "Analyse Text" || props.btnText === "Extract Keywords")
    ) {
      if (btnRef.current) {
        btnRef.current.disabled = false;
        btnRef.current.classList.add("bg-mindpeers-sea-green-dark");
        btnRef.current.classList.remove("bg-mindpeers-sea-green-mid");
      }
    } else if (
      textareaValue.length === 0 &&
      (props.btnText === "Analyse Text" || props.btnText === "Extract Keywords")
    ) {
      if (btnRef.current) {
        btnRef.current.disabled = true;
        btnRef.current.classList.remove("bg-mindpeers-sea-green-dark");
        btnRef.current.classList.add("bg-mindpeers-sea-green-mid");
      }
    } else if (
      textareaValue.length !== 0 &&
      props.btnText === "Submit Feedback" &&
      ((typeof labelValue === "string" && labelValue.length !== 0) ||
        (typeof labelValue === "number" && labelValue.toString().length !== 0))
    ) {
      if (btnRef.current) {
        btnRef.current.disabled = false;
        btnRef.current.classList.add("bg-mindpeers-sea-green-dark");
        btnRef.current.classList.remove("bg-mindpeers-sea-green-mid");
      }
    } else {
      if (btnRef.current) {
        btnRef.current.disabled = true;
        btnRef.current.classList.remove("bg-mindpeers-sea-green-dark");
        btnRef.current.classList.add("bg-mindpeers-sea-green-mid");
      }
    }
  }, [props.btnText, textareaValue, labelValue]);

  return (
    <div className="model-prediction w-full lg:h-[80%] bg-white shadow-md shadow-blue-600/5 rounded-md p-5 flex justify-between items-center">
      <form
        className="input flex flex-col justify-between items-start border-r-2 border-gray-200 w-6/12 h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-start items-start">
          <div className="heading text-xl font-medium mb-2">
            Test with your own text
          </div>
          <div className="text">
            <textarea
              id="text"
              className="border-2 border-gray-200 rounded-md ring-0 outline-none w-86 p-2 h-52 text-sm overflow-y-auto"
              placeholder="Enter text here"
              {...register("text")}
            ></textarea>
          </div>
          {isFeedback && (
            <div className="label">
              <input
                type="text"
                id="label"
                className="border-2 border-gray-200 rounded-md ring-0 outline-none w-86 p-2 text-sm"
                placeholder="Enter feedback here"
                {...register("label")}
              />
            </div>
          )}
        </div>
        <div className="predict">
          <button
            type="submit"
            ref={btnRef}
            className="bg-mindpeers-sea-green-dark text-sm text-white px-5 py-2 rounded-md shadow-md shadow-mindpeers-sea-green-dark/30 font-medium"
          >
            {props.btnText}
          </button>
        </div>
      </form>
      <div className="output flex flex-col justify-start items-start w-6/12 h-full px-5 overflow-y-auto">
        <div className="heading text-sm flex justify-between w-full pb-2 mb-2 text-gray-600 font-medium border-b-2">
          <div className="th">{props.outHeading1}</div>
          <div className="th">{props.outHeading2}</div>
        </div>
        {results &&
          results?.map((result, index) => (
            <div
              className="result text-sm flex justify-between w-full pb-2 mb-2 border-b-2"
              key={index}
            >
              <div className="tb text-gray-800">{result.sentiment}</div>
              <div className="tb text-green-500">97.03%</div>
            </div>
          ))}
        {/* <div className="result text-sm flex justify-between w-full pb-2 mb-2 border-b-2">
          <div className="tb text-gray-800">Positive</div>
          <div className="tb text-green-500">97.03%</div>
        </div>
        <div className="result text-sm flex justify-between w-full pb-2 mb-2 border-b-2">
          <div className="tb text-gray-800">Negative</div>
          <div className="tb text-red-500">77.53%</div>
        </div>
        <div className="result text-sm flex justify-between w-full pb-2 mb-2 border-b-2">
          <div className="tb text-gray-800">lonely</div>
          <div className="tb text-green-500">0.85</div>
        </div> */}
      </div>
    </div>
  );
}
