import { ClipboardListIcon } from '@heroicons/react/solid';

const simpleMainBoard = () => {
  return (
    <div className="w-full">
      <div className="mx-12 sm:mx-28 mt-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <ClipboardListIcon className="h-28 w-28 text-blue-500" />
          <span className="text-xl font-semibold capitalize">
            simple main board
          </span>
          <p>Make your own page with very simple main board</p>
        </div>
        <div className="mt-14">
          <p>
            Make your own page using our very simple main board to easily
            improve your page creation time and we provide a template to save
            more time so you can deploy it to the world faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default simpleMainBoard;
