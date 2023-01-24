import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';

function App() {
  return (
    <>
      <Nav />

      <div className='h-screen'>
        <div className='w-2/4 m-auto mt-10 mb-3'>
          <h1 className='test-5xl mb-3'>Test Tester</h1>
          <p className='text-2xl test-cyan-900 ml-2'>Software Engineer</p>
        </div>

        <div className='flex space-between w-2/4 m-auto py-5 border rounded-sm px-3 shadow'>
          <img
            alt='profile'
            className='rounded-full w-36 h-38 mx-8'
            src='./me.jpg'
          ></img>
          <div>
            <h5 className='=text-2xl text-cyan-900 border-b-2 border-slate-300'>
              Biography
            </h5>
            <p className='pt-3'>
              This is supposed to be a Biography, This is supposed to be a
              Biography, This is supposed to be a Biography, This is supposed to
              be a Biography This is supposed to be a Biography, This is
              supposed to be a Biography, This is supposed to be a Biography,
              This is supposed to be a Biography This is supposed to be a
              Biography, This is supposed to be a Biography, This is supposed to
              be a Biography, This is supposed to be a Biography This is
              supposed to be a Biography, This is supposed to be a Biography,
              This is supposed to be a Biography, This is supposed to be a
              Biography
            </p>
          </div>
        </div>

        <div className='h-38'>
          <div className='mb-5 mx-5'>
            <h1 className='text-5xl mb-3 mt-96'>My Education</h1>
            <p className='text-lg text-cyan-900'>
              Here is the my education, Here is the my education, Here is the my
              education, Here is the my education, Here is the my education,
              Here is the my education, Here is the my education, Here is the my
              education, Here is the my education, Here is the my education,Here
              is the my education, Here is the my education,Here is the my
              education,
            </p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-7 mx-5'>
          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Univeristy
            </h3>
            <h5 className='py-2'>2016-2020</h5>
            <p>
              My best years...My best years...My best years...My best years...
              My best years... My best years... My best years... My best
              years... My best years... My best years... My best years... My
              best years... My best years... My best years... My best years...
              My best years... My best years... My best years...
            </p>
          </div>
          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Univeristy
            </h3>
            <h5 className='py-2'>2016-2020</h5>
            <p>
              My best years...My best years...My best years...My best years...
              My best years... My best years... My best years... My best
              years... My best years... My best years... My best years... My
              best years... My best years... My best years... My best years...
              My best years... My best years... My best years...
            </p>
          </div>

          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Univeristy
            </h3>
            <h5 className='py-2'>2016-2020</h5>
            <p>
              My best years...My best years...My best years...My best years...
              My best years... My best years... My best years... My best
              years... My best years... My best years... My best years... My
              best years... My best years... My best years... My best years...
              My best years... My best years... My best years...
            </p>
          </div>
        </div>

        <div className='h-38'>
          <div className='mb-5 mx-5'>
            <h1 className='text-5xl mb-5 mt-96'>My Work Experience</h1>
            <p className='text-lg text-cyan-900'>
              WORK,WORK,WORK,WORK,WORK,WORK, WORK, WORK, WORK, WORK, WORK, WORK,
              WORK, WORK, WORK, WORK, WORK,WORK, WORK,WORK, WORK,WORK, WORK,
              WORK,WORK, WORK,WORK, WORK,WORK, WORK,WORK, WORK,WORK,WORK,
              WORK,WORK,WORK,WORK,WORK, WORK,WORK, WORK, WORK,WORK, WORK,WORK,
              WORK, WORK,WORK, WORK,WORK, WORK,WORK, WORK,WORK, WORK,WORK,
              WORK,WORK, WORK,WORK, WORK,WORK, WORK, WORK,WORK, WORK,WORK,
              WORK,WORK, WORK,WORK,WORK,WORK,WORK, WORK,WORK,WORK,WORK,
            </p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-2 mx-5'>
          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Project
            </h3>
            <h5 className='py-2'>2016-2020</h5>
            <p>
              CAMELOT, CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
            </p>
          </div>
          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Project
            </h3>
            <h5 className='py-2'>2016-2020</h5>
            <p>
              CAMELOT, CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
            </p>
          </div>

          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Project
            </h3>
            <h5 className='py-2'>2016-2020</h5>
            <p>
              CAMELOT, CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
              CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT, CAMELOT,
            </p>
          </div>
        </div>

        <div className='h-38'>
          <div className='mb-5 mx-5'>
            <h1 className='text-5xl mb-5 mt-96'>My Portofolio</h1>
            <p className='text-lg text-cyan-900'>Take a look at my projects</p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-6 mx-5'>
          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Title
            </h3>
            <h5 className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer'>View Code</h5>
            <p>Take a look at my project</p>
          </div>
          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Title
            </h3>
            <h5 className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer'>View Code</h5>
            <p>
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
            </p>
          </div>

          <div className='border rounded-sm p-3 shadown'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Title
            </h3>
            <h5 className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer'>View Code</h5>
            <p>
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
