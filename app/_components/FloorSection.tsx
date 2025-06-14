import { Card } from "@/components/ui/card";
import RoomCard, { RoomCardProps } from "./RoomCard";

interface FloorSectionProps {
  floor: string;
  rooms: RoomCardProps[];
}

export default function FloorSection({ floor, rooms }: FloorSectionProps) {
  return (
    <Card className="p-4 mb-5 gap-2">
      <h2 className="text-xl font-bold pl-1">{floor}</h2>
      <div className="flex flex-wrap gap-6">
        {rooms.map((room, idx) => (
          <RoomCard key={idx} {...room} />
        ))}
      </div>
    </Card>
  );
} 