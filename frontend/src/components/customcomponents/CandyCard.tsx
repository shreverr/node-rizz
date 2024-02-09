import { FC } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CandyIcon } from 'lucide-react';


interface CandyCardProps {
    title: String;
    description: String;
    Icon: any;
    candyId: String;

}

const CandyCard: FC<CandyCardProps> = ({ title,description,Icon,candyId }) => {
  return (
    <Card className="flex items-center w-96 h-80 flex-col">
        <CardHeader className="flex items-center">
          <CardTitle className="text-2xl text">{title}</CardTitle>
          <CardDescription className="text-m border-b-2 pb-5 w-64 flex justify-center">{description}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text">
          <CandyIcon className="mr-2 h-28 w-28 "/>
          </CardContent>
          <CardFooter>
          <Button variant="candybutton" className='w-80'>
            <a href={`/candy/${candyId}`}>OPEN CANDY</a>
          </Button>
          </CardFooter>
    </Card>

  )
}

export default CandyCard