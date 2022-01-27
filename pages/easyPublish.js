import { CloudUploadIcon } from '@heroicons/react/solid';

const easyPublish = () => {
  return (
    <div className="w-full">
      <div className="mx-12 sm:mx-28 mt-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <CloudUploadIcon className="h-28 w-28 text-blue-500" />
          <span className="text-xl font-semibold capitalize">
            easy publish page
          </span>
          <p>Easy to publish</p>
        </div>
        <div className="mt-14">
          <p>
            Easy to publish your very own page to the community so you can share
            your product faster. We also provide customer services to help you
            with the process in case you need it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default easyPublish;
