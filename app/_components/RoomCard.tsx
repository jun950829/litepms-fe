'use client'

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { RoomInfoModal } from "./RoomInfoModal";

export interface RoomCardProps {
  roomNumber: string;
  type: string;
  status: string;
}

export default function RoomCard({ roomNumber, type, status }: RoomCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        className="w-44 h-28 flex flex-col items-center justify-center text-center p-10 shadow-lg hover:shadow-xl transition-shadow gap-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="font-bold text-lg">{roomNumber}</div>
        <div className="text-xs text-muted-foreground">{type}</div>
        <div className="text-xs text-primary font-medium">{status}</div>
      </Card>
      <RoomInfoModal
        open={open}
        onOpenChange={setOpen}
        roomName={roomNumber + "호"}
        roomType={type}
        price={"70,000원"}
        targetPrice={"30,000원"}
        lastUse={"11-04"}
      />
    </>
  );
} 