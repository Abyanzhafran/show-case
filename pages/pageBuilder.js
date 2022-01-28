import { BeakerIcon } from '@heroicons/react/solid';

const pageBuilder = () => {
  return (
    <div className="w-full">
      <div className="mx-12 sm:mx-28 mt-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <BeakerIcon className="h-28 w-28 text-blue-500" />
          <h1 className="text-xl font-semibold capitalize">page builder</h1>
          <p>Build your page easily</p>
        </div>
        <div className="mt-14">
          <article>
            Build your own page design easily by using our feature to make your
            page look attractive and meet your expectations. Feel free to use
            our provided template design or by using your very own customized
            page design.
          </article>
        </div>
      </div>
    </div>
  );
};

export default pageBuilder;
