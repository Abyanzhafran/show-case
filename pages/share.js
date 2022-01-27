import { ShareIcon } from '@heroicons/react/solid';

const share = () => {
  return (
    <div className="w-full">
      <div className="mx-12 sm:mx-28 mt-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <ShareIcon className="h-28 w-28 text-blue-500" />
          <span className="text-xl font-semibold capitalize">
            share and collaborate
          </span>
          <p>Share it and collaborate with your friends</p>
        </div>
        <div className="mt-14">
          <p>
            Share your product easily by using our easy sharing system method
            and collaborate with others to improve your products advertising.
          </p>
        </div>
      </div>
    </div>
  );
};

export default share;
