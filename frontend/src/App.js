import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';

function App() {
  const homeRef = useRef(null)
  const educationRef = useRef(null)
  const workRef = useRef(null)
  const portofolioRef = useRef(null)

  return (
    <>
      <Nav homeRef={homeRef} educationRef={educationRef} workRef={workRef} portofolioRef={portofolioRef} />
     
      <div className='md:h-screen pt-10' ref={homeRef}>
        <div className='md:w-2/4 w-10/12 mx-auto mt-10 mb-3'>
          <h1 className='text-5xl mb-3'>Test Tester</h1>
          <p className='text-2xl text-cyan-900 ml-2'>Software Engineer</p>
        </div>

        <div className='flex md:flex-row flex-col space-between md:w-2/4 m-auto py-5 border rounded-sm px-3 shadow'>
          <img
            alt='profile'
            className='rounded-full w-64 h-64 mx-8'
            src='./me.jpg'
          />
          <div>
            <h5 className='text-2xl text-cyan-900 border-b-2 border-slate-300'>
              Biography
            </h5>
            <p className='pt-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Adipiscing elit pellentesque habitant morbi tristique senectus et
              netus. Risus ultricies tristique nulla aliquet enim. Dignissim
              suspendisse in est ante in nibh mauris cursus. Nullam vehicula
              ipsum a arcu cursus vitae congue mauris rhoncus. Id velit ut
              tortor pretium viverra. Fusce ut placerat orci nulla pellentesque
              dignissim enim. In mollis nunc sed id semper risus in. Tortor
              consequat id porta nibh venenatis. Erat pellentesque adipiscing
              commodo elit.
            </p>
          </div>
        </div>
      </div>

      <div className='md:h-screen pt-16' ref={educationRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-3'>My Education</h1>
          <p className='text-lg text-cyan-900'>
            Here is the education that I have received
          </p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              School, Computer Science
            </h3>
            <h5 className='py-2'>2016 - 2020</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>

          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              School, Computer Science
            </h3>
            <h5 className='py-2'>2016 - 2020</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>

          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              School, Computer Science
            </h3>
            <h5 className='py-2'>2016 - 2020</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>
        </div>
      </div>

      <div className='md:h-screen pt-16' ref={workRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-3'>My Work Experience</h1>
          <p className='text-lg text-cyan-900'>
            Here is some of my most recent relevant work experience.
          </p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Company, Software Engineer
            </h3>
            <h5 className='py-2'>2016 - 2020</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>

          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Company, Software Engineer
            </h3>
            <h5 className='py-2'>2016 - 2020</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>

          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Company, Software Engineer
            </h3>
            <h5 className='py-2'>2016 - 2020</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>
        </div>
      </div>

      <div className='md:h-screen pt-16' ref={portofolioRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-3'>My Portfolio</h1>
          <p className='text-lg text-cyan-900'>
            Take a look at some of my most recent projects that I have built and
            the linked code on GitHub.
          </p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Title
            </h3>
            <h5 className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer'>
              View Code
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>

          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Title
            </h3>
            <h5 className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer'>
              View Code
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>

          <div className='border rounded-sm p-3 shadow'>
            <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>
              Title
            </h3>
            <h5 className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer'>
              View Code
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum. At volutpat diam ut
              venenatis tellus. Id consectetur purus ut faucibus pulvinar
              elementum integer enim. Aliquam nulla facilisi cras fermentum odio
              eu feugiat. Mollis nunc sed id semper risus in. Metus dictum at
              tempor commodo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
