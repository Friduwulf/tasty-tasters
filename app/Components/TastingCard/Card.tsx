'use client'
import { useRouter } from 'next/navigation';

interface TastingCardProps {
  id: string;
  name: string;
  dateCreated: Date;
  dueDate: Date;
}

export default function TastingCard({ id, name, dateCreated, dueDate }: TastingCardProps) {
  console.log(id, name, dateCreated, dueDate);

  const formattedDateCreated = dateCreated.toLocaleDateString();
  const formattedDueDate = dueDate.toLocaleDateString();

  const tastingId = id;
  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem('TastingID', tastingId);
    router.push(`/Tests/${id}`);
  };

  return (
    <div className="card max-w-lg bg-neutral shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>Date Created: {formattedDateCreated}</p>
        <p >Date Due: {formattedDueDate}</p>
        <div className="card-actions justify-end">
          <button onClick={handleClick} className="btn btn-primary">Get Tasting!</button>
        </div>
      </div>
    </div>
  );
}
