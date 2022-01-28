import { PencilAltIcon } from '@heroicons/react/solid';

const customizeDomain = () => {
  return (
    <div className="w-full">
      <div className="mx-12 sm:mx-28 mt-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <PencilAltIcon className="h-28 w-28 text-blue-500" />
          <h1 className="text-xl font-semibold capitalize">
            customized domain
          </h1>
          <p>Create your beautiful domain</p>
        </div>
        <div className="mt-14">
          <article>
            Create your own beautiful domain to improve your page interest to
            catch customers attention so you can make it very attractive for
            your satisfaction and very appealing to the customers
          </article>
        </div>
      </div>
    </div>
  );
};

export default customizeDomain;
