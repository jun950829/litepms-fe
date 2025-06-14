import NoticeBar from "./_components/NoticeBar";
import FloorSection from "./_components/FloorSection";
import ReservationList from "./_components/ReservationList";

const floors = [
  { floor: "1층", rooms: Array(5).fill({ roomNumber: "101호", type: "일반룸", status: "청소중" }) },
  { floor: "2층", rooms: Array(5).fill({ roomNumber: "101호", type: "일반룸", status: "청소중" }) },
  { floor: "3층", rooms: Array(5).fill({ roomNumber: "101호", type: "일반룸", status: "청소중" }) },
  { floor: "4층", rooms: Array(5).fill({ roomNumber: "101호", type: "일반룸", status: "청소중" }) },
];

const reservations = [
  { name: "신현호", info: "시작 12:00\n대실 4시간, 일반" },
  { name: "유현하", info: "시작 17:00\n숙박, 디럭스" },
  { name: "유동현", info: "도착 18:00\n대실 5시간, 디럭스" },
];

export default function Home() {
  return (
    <main className="p-6 bg-muted min-h-screen">
      <div className="max-w-6xl mx-auto">
        <NoticeBar message="공지 사항: 객실청소 점검(14:00) 오늘 체크인 5건 예약 문의 2건" />
        {floors.map((f, idx) => (
          <FloorSection key={idx} floor={f.floor} rooms={f.rooms} />
        ))}
        <div className="mt-8">
          <div className="mb-2 text-base font-semibold">다가오는 예약 대실 2 숙박 1</div>
          <ReservationList reservations={reservations} />
        </div>
      </div>
    </main>
  );
}
