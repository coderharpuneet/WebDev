import  { useState } from 'react'
import {X} from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(title,details);
    let copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask);
    console.log(copyTask);
    setTitle('');
    setDetails('');
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask);

  }
  return (
    <div className='h-screen lg:flex  bg-black text-white  '>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex items-start gap-4 lg:w-1/2 flex-col p-10' > 
      <h1 className='text-4xl font-bold'>Add Notes</h1>
          <input 
        className='outline-none px-5 py-2 w-full border-2 rounded font-medium'
        type="text" 
        placeholder='Enter Notes Heading'
        value={title} 
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <textarea type="text" 
          className='px-5 h-20 py-2 w-full border-2 rounded outline-none font-medium' 
          placeholder='Write Details'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className='bg-white w-full text-black px-5 py-2 rounded outline-none active:scale-95'>Add Notes</button>
      </form>

      <div className='  p-10 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-[90%]'>
          {task.map((elem,idx)=>{
            return <div key={idx} className=' relative h-52 w-40 py-12 px-20 text-black rounded-2xl  bg-[url("https://imgs.search.brave.com/WCpTrWQtBySv_q2pOZe8yF2GNUQWadRiOWsycl4inpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/NjAxLzExOS9zbWFs/bC9taW5pbWFsaXN0/LW5vdGVwYWQtcGFw/ZXItaWxsdXN0cmF0/aW9uLXBuZy5wbmc")] bg-cover'>
              <h2 onClick={(idx)=>deleteNote(idx)} className='absolute top-10 right-2 bg-red-500 p-1 rounded-full text-xs cursor-pointer active:scale-95'><X size={16} strokeWidth={2.75} /></h2>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App