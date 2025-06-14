import { Card } from "@/components/ui/card";

export interface RoomCardProps {
  roomNumber: string;
  type: string;
  status: string;
}

export default function RoomCard({ roomNumber, type, status }: RoomCardProps) {
  return (
    <Card className="w-44 h-28 flex flex-col items-center justify-center text-center p-10 shadow-lg hover:shadow-xl transition-shadow gap-2">
      <div className="font-bold text-lg">{roomNumber}</div>
      <div className="text-xs text-muted-foreground">{type}</div>
      <div className="text-xs text-primary font-medium">{status}</div>
    </Card>
  );
} 