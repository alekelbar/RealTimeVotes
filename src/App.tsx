import react, { useEffect, useState } from 'react';
import { ElementItem } from "./components/ElementItem";
import { Header } from "./components/Header";
import { useAppDispatch, useAppSelector } from './redux/hooks/index';
import { ServiceStatus, setList } from "./redux/slices";


function App() {

  const { list, socket } = useAppSelector(state => state.socketsState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.on('band-list', (data) => {
      dispatch(setList(data))
    })
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => {
      dispatch(ServiceStatus(socket.connected));
    })

  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      dispatch(ServiceStatus(socket.connected));
    })
  }, [socket]);

  return (
    <div className="container mt-1">
      <Header />
      <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2">
        {list.map(e => (
          <ElementItem key={e.id} {...e} />
        ))}
      </div>
    </div>
  )
}

export default App
