'use client';

import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';
import { IoCafeOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            title={`${count}`}
            subTitle='Carrito de compras'
            label='Counter'
            icon={ <IoCafeOutline size={70} className="text-blue-600"/> }
            href='/dashboard/counter'
        />
    </div>
  )
}
