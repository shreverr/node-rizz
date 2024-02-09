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


interface ChocoChipCardProps {
    title: String;
    description: String;
    Icon: any;
    chipId: String;

}
const ChocoChipCard: FC<ChocoChipCardProps> = ({ title, chipId }) => {
  return (
    <Card className="flex items-center w-96 h-80 flex-col">
        <CardHeader className="flex items-center">
          <CardTitle className="text-2xl text">{title}</CardTitle>
          <CardDescription className="text-m border-b-2 pb-5 w-64 flex justify-center">{}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm mt-4 flex-col">
          <div className='w-64 flex-col items-center'>
            
            <div className="w-64 text-black text-xl">
              DB: Maria DB
            </div>
            <div className="w-64 text-black text-xl">
              Usage: 76%
            </div>
            <div className="w-64 text-black text-xl">
              Total Storage: 10GiB
            </div>
            
          
          </div>
          </CardContent>
          <CardFooter>
          <Button variant="candybutton" className='w-80 mt-8'>
            <a href={`/candy/${chipId}`}>OPEN CHOCOCHIP</a>
          </Button>
          </CardFooter>
    </Card>
  )
}

export default ChocoChipCard