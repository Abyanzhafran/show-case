import MainLayout from '../components/MainLayout';
import Card from '../components/Card';
import Head from 'next/head';
import {
  BeakerIcon,
  ShareIcon,
  CloudUploadIcon,
  PencilAltIcon,
  ClipboardListIcon,
  CashIcon,
} from '@heroicons/react/solid';

const Homepage = () => {
  const cardPricingItem = [
    {
      access: 'Free',
      price: '$0',
      caption: 'Always free for 1 user',
      btn: 'Get started',
    },
    {
      access: 'Standard',
      price: '$7.50',
      caption: 'per user (avarage) $75 a month',
      btn: 'Start trial',
    },
    {
      access: 'Premium',
      price: '$14.50',
      caption: 'per user (average) $145 a month',
      btn: 'Start trial',
    },
  ];
  const cardCompItem = [
    {
      icon: <BeakerIcon className="h-14 w-14 text-blue-500" />,
      title: 'page builder',
      caption: 'Build your page easily',
      url: '/pageBuilder',
    },
    {
      icon: <PencilAltIcon className="h-14 w-14 text-blue-500" />,
      title: 'customized domain',
      caption: 'Create your beautiful domain',
      url: '/customizeDomain',
    },
    {
      icon: <ClipboardListIcon className="h-14 w-14 text-blue-500" />,
      title: 'simple main board',
      caption: 'Make your own page with very simple main board',
      url: '/simpleMainBoard',
    },
    {
      icon: <CashIcon className="h-14 w-14 text-blue-500" />,
      title: 'handle your transaction payment',
      caption: 'You can handle and customize your own transaction easily',
      url: '/transaction',
    },
    {
      icon: <CloudUploadIcon className="h-14 w-14 text-blue-500" />,
      title: 'easy publish page',
      caption: 'Easy to publish',
      url: '/easyPublish',
    },
    {
      icon: <ShareIcon className="h-14 w-14 text-blue-500" />,
      title: 'share and collaborate',
      caption: 'Share it and collaborate with your friends',
      url: '/share',
    },
  ];
  const aboutItem = [
    {
      name: 'M. Abyan Zhafran Daffa',
      position: 'Web Developer',
      img: '/gue_1.png',
    },
    {
      name: 'Ignatius Tegar Saputra',
      position: 'UI/UX Designer',
      img: '/tegar_1.png',
    },
  ];

  return (
    <MainLayout>
      <Head>
        {/* <title>The page title</title> */}
        <meta
          name="google-site-verification"
          content="edcgayO-Pn_cLPPeIN2-lHU0UJzQuJseBwl4DTTB-pI"
        />
      </Head>
      <main className="w-full">
        <section
          id="home"
          className="flex flex-col items-center justify-center py-8 h-full"
        >
          <article className="flex flex-wrap justify-center mt-28 gap-8">
            <div className="w-64 flex flex-col gap-6">
              <h1 className="text-5xl font-bold">Showcase</h1>
              <p className="text-lg">
                Showcase is web builder that can help people to build their own
                page for their product and do a payment with it
              </p>
            </div>
            <div>
              <img src="/dashboard.png" className="w-full h-full lg:h-96" />
            </div>
          </article>
        </section>
        <section
          id="features"
          className="flex flex-col items-center justify-center my-8 h-full"
        >
          <div className="py-8 bg-gray-300">
            <div className="flex flex-col gap-5 px-8 items-center">
              <div>
                <span className="font-semibold text-4xl">Features</span>
                <hr className="border-blue-500 border-2 w-full mt-3 mb-3" />
              </div>
              <div className="flex flex-wrap gap-8 justify-center">
                {cardCompItem.map((item) => (
                  <Card
                    className="w-64 sm:w-96 bg-white rounded-lg hover:bg-gray-200"
                    onClick={() => (window.location.href = item.url)}
                    key={item.title}
                  >
                    <div className="flex flex-col items-center justify-center h-48 gap-3">
                      {item.icon}
                      <h2 className="text-xl font-semibold capitalize">
                        {item.title}
                      </h2>
                      <p>{item.caption}</p>
                      {/* <div className="justify-center card-actions">
                        <button className="btn btn-outline btn-accent">
                          Detail Feature
                        </button>
                      </div> */}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="my-8 h-full">
          <div className="py-16 px-8 flex flex-col items-center">
            <div className="mb-8">
              <span className="font-semibold text-4xl">Pricing</span>
              <hr className="border-blue-500 border-2 w-full mt-3 mb-3" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {cardPricingItem.map((item) => (
                <Card className="w-64 sm:w-96 bg-white rounded-lg">
                  <div className="h-72 flex flex-col items-center justify-start gap-4">
                    <span className="text-4xl font-bold">{item.access}</span>
                    <hr className="border-gray-400 border-1 w-full mt-3 mb-3" />
                    <span className="text-4xl font-bold">{item.price}</span>
                    <p className="text-lg">{item.caption}</p>
                    <div className="justify-center card-actions">
                      <button className="btn btn-outline btn-primary">
                        {item.btn}
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="my-8 h-full">
          <div className="py-16 px-8 flex flex-col items-center bg-gray-300">
            <div className="mb-8">
              <span className="font-semibold text-4xl">About</span>
              <hr className="border-blue-500 border-2 w-full mt-3 mb-3" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {aboutItem.map((i) => (
                <div className="card text-center shadow-2xl bg-white">
                  <div className="px-10 pt-10">
                    <img src={i.img} className="rounded-xl" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{i.name}</h2>
                    <span className="text-lg font-semibold">{i.position}</span>
                    <div className="justify-center card-actions">
                      <button className="btn btn-outline btn-accent">
                        More info
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-center py-8 h-full mb-8"
        >
          <div className="flex flex-col w-auto sm:w-96 px-10 gap-4">
            <span className="text-4xl font-semibold font-mono">
              Get in Touch
            </span>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea h-24 textarea-bordered"
                placeholder="Send Message"
              ></textarea>
            </div>
            <div className="w-56">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Homepage;
