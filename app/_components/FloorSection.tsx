import RoomCard, { RoomCardProps } from "./RoomCard";

interface FloorSectionProps {
  floor: string;
  rooms: RoomCardProps[];
}

export default function FloorSection({ floor, rooms }: FloorSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 pl-1">{floor}</h2>
      <div className="flex flex-wrap gap-6">
        {rooms.map((room, idx) => (
          <RoomCard key={idx} {...room} />
        ))}
      </div>
    </section>
  );
} 