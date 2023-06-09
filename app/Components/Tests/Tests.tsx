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

//A card to display a test
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
        <Link className="card w-full bg-neutral shadow-xl" href={`/${testType}/${beerId}`}>
            <div className="card-body w-full">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{testType} Test</p>
                <p>Beer: {beer.name}</p>
                <p>Batch: {batch}</p>
            </div>
        </Link>
    );
}