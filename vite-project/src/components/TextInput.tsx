type Prop = {
  placeHolder: string;
};

const TextInput = ({  placeHolder}: Prop) => {
  return (
    <input className='p-5 rounded-2xl text-lg
     bg-slate-100 focus:outline-3
       outline-blue-500 focus:bg-white'
        type="text" placeholder={placeHolder} 
        name="" id="1" />

  );
};


export default TextInput;