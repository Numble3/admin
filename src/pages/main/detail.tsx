import { useParams } from 'react-router-dom';

export default function MainDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Dashboard Detail</h1>
      id : {id}
    </div>
  );
}
