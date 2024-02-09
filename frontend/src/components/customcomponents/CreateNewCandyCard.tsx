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

interface CreateNewCandyCardProps {

}

const CreateNewCandyCard: FC<CreateNewCandyCardProps> = ({ }) => {
  return (
   <Card className="flex items-center w-96 h-80 flex-col ml-44">
          <CardContent className="text-sm text">
          <PlusIcon className="mr-2 h-44 w-44 mt-12 mt-8"/>
          </CardContent>
          <CardFooter>
          <Button variant="candybutton" className='w-80 mt-8 bg-transparent border-2 text-black'>
            <a href={`/candy`}>New Candy</a>
          </Button>
          </CardFooter>
    </Card>
  )
}

export default CreateNewCandyCard