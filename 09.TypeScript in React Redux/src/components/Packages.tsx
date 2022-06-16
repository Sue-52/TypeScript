import { FC, FormEvent, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Packages: FC = () => {
  const [key, setKey] = useState<string>("");
  const { searchPackages } = useActions();
  const state = useTypedSelector((state) => state.packages);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchPackages(key);
  };
  return (
    <>
    
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={key} onChange={(event) => setKey(event.target.value)} />
      <button>search</button>
    </form>

    {state.loading && <div>loading....</div>}
      {state.error && <div>{state.error}</div>}
      {state.list.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </>
    
  );
};

export default Packages;