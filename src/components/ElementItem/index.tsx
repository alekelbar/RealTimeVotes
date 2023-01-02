import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { AppElement } from '../../types/index';
import { useAppSelector } from '../../redux/hooks/index';

type Props = Required<AppElement>

export const ElementItem: React.FC<Props> = ({ name, votes, id }) => {

  const { socket } = useAppSelector(state => state.socketsState);
  const [formInput, setFormInput] = useState({ name })

  useEffect(() => {
    setFormInput({ name })
  }, [name])


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFormInput({ ...formInput, [e.target.name]: newValue });
    socket.emit('re-name', { name: newValue, id })
  }

  return (
    <div className='container p-3 max-w-md'>
      <div className='grid grid-cols-1 gap-3' >
        <form className='mx-auto' onSubmit={handleSubmit}>
          <input
            value={formInput.name}
            onChange={handleChange}
            name='name'
            placeholder='Element name'
            type="text"
            className='text-green-200 font-bold py-3 px-2 text-center rounded-2xl border'
          />
        </form>
        <h1 className="mx-auto capitalize mt-4 text-xl">{votes} vote(s)</h1>
        <button className='btn-primary text-center mx-auto'>
          vote
        </button>
        <button className='mx-auto btn-danger text-center'>
          remove
        </button>
      </div>
    </div>
  )
}
