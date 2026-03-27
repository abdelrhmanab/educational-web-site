type Prop = {
  label: string;
  placeHolder: string;
  id: string;
};

const TextInput = ({ label, placeHolder, id }: Prop) => {
  return (
    <fieldset className="w-full flex flex-col gap-5">
      <label htmlFor={id} className="label text-2xl">
        {label} :
      </label>
      <input
        id={id}
        type="text"
        className="input input-primary bg-gray-50 input-xl  p-5"
        placeholder={placeHolder}
      />
    </fieldset>
  );
};


export default TextInput;