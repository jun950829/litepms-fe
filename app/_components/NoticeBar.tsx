import { Card } from "@/components/ui/card";

interface NoticeBarProps {
  message: string;
}

export default function NoticeBar({ message }: NoticeBarProps) {
  return (
    <Card className="mb-4 p-4 text-sm font-medium">
      {message}
    </Card>
  );
} 