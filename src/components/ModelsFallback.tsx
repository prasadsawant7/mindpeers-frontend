export default function ModelsFallback() {
  return (
    <div className="model-details flex justify-between items-center bg-white p-5 mb-4 rounded-md shadow-md shadow-blue-600/5 w-full">
      <div className="model-icon flex justify-center items-center w-1/12">
        <div className="bg-gray-200/80 p-2 rounded-md lg:w-10 lg:h-10 animate-pulse"></div>
      </div>
      <div className="model-name flex justify-center items-center w-4/12">
        <p className="text-xl bg-gray-200/80 rounded-md lg:h-10 lg:w-64 animate-pulse"></p>
      </div>
      <div className="model-description flex flex-col justify-center items-center w-7/12">
        <p className="text-description text-xs bg-gray-200/80 rounded-md lg:h-5 lg:w-96 mb-0.5 font-medium animate-pulse"></p>
        <p className="text-description text-xs bg-gray-200/80 rounded-md lg:h-5 lg:w-96 mt-0.5 font-medium animate-pulse"></p>
      </div>
    </div>
  );
}
