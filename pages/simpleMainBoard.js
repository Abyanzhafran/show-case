import { ClipboardListIcon } from '@heroicons/react/solid';

const simpleMainBoard = () => {
  return (
    <div className="w-full">
      <div className="mx-12 sm:mx-28 mt-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <ClipboardListIcon className="h-28 w-28 text-blue-500" />
          <h1 className="text-xl font-semibold capitalize">
            simple main board
          </h1>
          <p>Make your own page with very simple main board</p>
        </div>
        <div className="mt-14">
          <article>
            Make your own page using our very simple main board to easily
            improve your page creation time and we provide a template to save
            more time so you can deploy it to the world faster.
          </article>
        </div>
      </div>
    </div>
  );
};

export default simpleMainBoard;
