import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 md:px-5 md:py-2.5 px-4 text-xs',
    round: base + ' py-1 md:px-3.5 md:py-1.5 px-2.5 text-md',
    secondary:
      'rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 focus:text-stone-800 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
