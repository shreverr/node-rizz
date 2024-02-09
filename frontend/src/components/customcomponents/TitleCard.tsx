import { FC } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface TitleCardProps {
    title: String;

}

const TitleCard: FC<TitleCardProps> = ({ title }) => {
  return (
    <Card className="h-24">
        <CardHeader>
          <CardTitle className="text-5xl text">{title}</CardTitle>
        </CardHeader>
    </Card>
  )
}

export default TitleCard