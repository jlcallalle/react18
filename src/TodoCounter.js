/* const estilos = {
  backgroundColor: 'red'
} */

import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  );
}

// eslint-disable-next-line no-lone-blocks
{/* <h1 style={{backgroundColor: 'coral'}></h1> */}

  export { TodoCounter };
  