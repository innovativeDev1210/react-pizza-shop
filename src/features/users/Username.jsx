import { useSelector } from 'react-redux';
import { getUser } from './userSlice';

function Username() {
  const user = useSelector(getUser);

  return (
    <div className="hidden text-sm font-semibold md:block">
      {user.username || 'Guest'}
    </div>
  );
}

export default Username;
