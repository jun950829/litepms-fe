import { Card } from "@/components/ui/card";

export interface Reservation {
  name: string;
  info: string;
}

interface ReservationListProps {
  reservations: Reservation[];
}

export default function ReservationList({ reservations }: ReservationListProps) {
  return (
    <div className="flex gap-6 mt-4">
      {reservations.map((r, idx) => (
        <Card key={idx} className="flex-1 p-6 text-base shadow-lg hover:shadow-xl transition-shadow min-w-[180px] min-h-[90px]">
          <div className="font-semibold text-lg mb-1">{r.name}</div>
          <div className="text-xs mt-1 whitespace-pre-line text-muted-foreground">{r.info}</div>
        </Card>
      ))}
      <Card className="flex-1 p-6 flex items-center justify-center cursor-pointer hover:bg-muted shadow-lg hover:shadow-xl transition-shadow min-w-[180px] min-h-[90px] text-base font-semibold">
        예약 추가하기
      </Card>
    </div>
  );
} 