import { Card } from "@/components/ui/card";

export interface RoomCardProps {
  roomNumber: string;
  type: string;
  status: string;
}

export default function RoomCard({ roomNumber, type, status }: RoomCardProps) {
  return (
    <Card className="w-44 h-28 flex flex-col items-center justify-center text-center p-5 shadow-lg hover:shadow-xl transition-shadow min-w-[176px] min-h-[112px]">
      <div className="font-bold text-lg mb-1">{roomNumber}</div>
      <div className="text-xs text-muted-foreground mb-0.5">{type}</div>
      <div className="text-xs text-primary font-medium mt-1">{status}</div>
    </Card>
  );
} 