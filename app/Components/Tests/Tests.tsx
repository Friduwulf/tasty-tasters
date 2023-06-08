import Link from 'next/link';

interface TestProps {
    id: string;
    name: string;
    testType: string;
    batch: string;
    tastingId: string;
    beerId: string;
    beer: {
        name: string;
        style: string;
    },
}

export default function Test({ id, name, testType, batch, tastingId, beerId, beer }: TestProps) {
    console.log(
        id, 
        name,
        testType,
        batch,
        tastingId,
        beerId,
        beer,
        );

    return (
        <Link className="card max-w-lg bg-neutral shadow-xl" href={`/${testType}/${beerId}`}>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p className="text-base-100">Beer: {beer.name}</p>
                <p className="text-base-100">{testType} Test</p>
                <p className="text-base-100">Batch: {batch}</p>
            </div>
        </Link>
    );
}