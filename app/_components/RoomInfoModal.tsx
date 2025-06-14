import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  checkoutTime: z.string(),
  stayType: z.enum(["대실", "숙박", "장기"]),
  paymentType: z.enum(["현금", "카드", "계좌"]),
  customerName: z.string().optional(),
  contact: z.string().optional(),
  reservation: z.string().optional(),
  salesAmount: z.string().optional(),
  guestCount: z.string().optional(),
  hasCar: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface RoomInfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roomName: string;
  roomType: string;
  price: string;
  targetPrice: string;
  lastUse: string;
}

export function RoomInfoModal({
  open,
  onOpenChange,
  roomName,
  roomType,
  price,
  targetPrice,
  lastUse,
}: RoomInfoModalProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stayType: "대실",
      paymentType: "현금",
      hasCar: false,
    },
  });

  const onSubmit = () => {
    // TODO: 저장 로직
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[1600px] sm:max-w-3/4 h-auto max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>{roomName}</DialogTitle>
        </DialogHeader>
        <div className="flex gap-6 min-w-0 flex-wrap overflow-y-auto max-h-[70vh]">
          {/* 좌측 객실 기본 정보 */}
          <div className="w-1/4 min-w-[180px] bg-muted rounded-md p-4 flex flex-col gap-2 text-sm">
            <div>
              <div className="text-xs text-muted-foreground">방 타입</div>
              <div>{roomType}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">숙박 가격</div>
              <div>{price}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">대실 가격</div>
              <div>{targetPrice}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">마지막 사용일</div>
              <div>{lastUse}</div>
            </div>
          </div>
          {/* 우측 입력 폼 */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex-1 min-w-0 flex flex-col gap-4">
            {/* 탭 메뉴 (이용중 표시/객실메모/추가결제) */}
            <div className="flex border-b mb-2">
              <button type="button" className="px-4 py-2 border-b-2 border-primary font-semibold">이용중 표시</button>
              <button type="button" className="px-4 py-2 text-muted-foreground">객실메모</button>
              <button type="button" className="px-4 py-2 text-muted-foreground">추가결제/시간변경</button>
            </div>
            {/* 기본 정보 */}
            <div className="border rounded-md p-4 flex flex-col gap-4">
              <div className="font-semibold mb-2">기본 정보</div>
              <div className="flex gap-4 items-center">
                <Input type="datetime-local" {...register("checkoutTime")} className="w-60" />
                <div className="flex gap-2 ml-4">
                  <label><input type="radio" value="대실" {...register("stayType")} /> 대실</label>
                  <label><input type="radio" value="숙박" {...register("stayType")} /> 숙박</label>
                  <label><input type="radio" value="장기" {...register("stayType")} /> 장기</label>
                </div>
                <div className="flex gap-2 ml-4">
                  <label><input type="radio" value="현금" {...register("paymentType")} /> 현금</label>
                  <label><input type="radio" value="카드" {...register("paymentType")} /> 카드</label>
                  <label><input type="radio" value="계좌" {...register("paymentType")} /> 계좌</label>
                </div>
              </div>
            </div>
            {/* 고객 정보 */}
            <div className="border rounded-md p-4 flex flex-col gap-4">
              <div className="font-semibold mb-2">고객 정보</div>
              <div className="flex gap-4">
                <Input placeholder="고객 성명" {...register("customerName")} />
                <Input placeholder="연락처" {...register("contact")} />
              </div>
              <Input placeholder="예약처" {...register("reservation")} />
            </div>
            {/* 이용 정보 */}
            <div className="border rounded-md p-4 flex flex-col gap-4">
              <div className="font-semibold mb-2">이용 정보</div>
              <div className="flex gap-4">
                <Input placeholder="매출 금액" {...register("salesAmount")} />
                <Input placeholder="입실 인원" {...register("guestCount")} />
              </div>
            </div>
            {/* 차량 정보 */}
            <div className="border rounded-md p-4 flex items-center gap-4">
              <div className="font-semibold">차량 정보</div>
              <Switch checked={watch("hasCar")} onCheckedChange={(v: boolean) => setValue("hasCar", v)} />
              <span>차량 방문 여부</span>
            </div>
            <DialogFooter>
              <Button type="submit">저장</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
