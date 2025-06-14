import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-lg rounded-2xl mt-4 mb-8 mx-auto max-w-6xl px-8 py-4 flex items-center justify-between min-h-[60px] transition-shadow">
      <div className="flex flex-row gap-2">
        <div className="text-4xl font-bold">Logo</div>
        <div className="text- font-bold pl-1">홍대점</div>
      </div>
      <div className="flex flex-row gap-3">
        <Button variant="outline">관리자 화면으로</Button>
        <Button variant="outline">로그아웃</Button>
        <Button variant="default">지점 선택 확인으로</Button>
      </div>
    </header>
  )
}