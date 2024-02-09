import { FC } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CandyIcon, Plus, PlusIcon } from 'lucide-react'
import { Button } from '../ui/button'


interface CreateNewChocoChipCardProps {

}

const CreateNewChocoChipCard: FC<CreateNewChocoChipCardProps> = ({ }) => {
  return (
    <Card className="flex items-center w-96 h-80 flex-col ml-44">
          <CardContent className="text-sm text">
          <PlusIcon className="mr-2 h-44 w-44 mt-8 mb-8"/>
          </CardContent>
          <CardFooter>
          <Button variant="outline" className='w-80'>
            <a href={`/chocochipdb`}>New ChocoChip DB</a>
          </Button>
          </CardFooter>
    </Card>
  )
}

export default CreateNewChocoChipCard