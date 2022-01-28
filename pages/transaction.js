import { CashIcon } from '@heroicons/react/solid';

const transaction = () => {
  return (
    <div className="w-full">
      <div className="mx-12 sm:mx-28 mt-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <CashIcon className="h-28 w-28 text-blue-500" />
          <h1 className="text-xl font-semibold capitalize">
            handle your transaction payment
          </h1>
          <p>You can handle and customize your own transaction easily</p>
        </div>
        <div className="mt-14">
          <article>
            Handle your own transaction method by customized your transaction
            with the customer directly or by using other methods that make you
            feel comfortable and safe.
          </article>
        </div>
      </div>
    </div>
  );
};

export default transaction;
