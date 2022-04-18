import { useParams } from 'react-router-dom';

export default function UserDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>User Detail</h1>
      id : {id}
    </div>
  );
}
