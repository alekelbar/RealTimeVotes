import { ElementItem } from "./components/ElementItem";
import { Header } from "./components/Header";
import { useSocket } from './hooks/useSocket';


export const App = () => {

  const { list } = useSocket();

  return (
    <div className="container mt-1">
      <Header />
      <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2">
        {list.map(e => (
          <ElementItem key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
};
